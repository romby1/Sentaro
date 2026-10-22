// Generates the sentaro.trade landing page from content.cjs (every string, in
// English, Ukrainian and Russian) and site.css:
//   docs/index.html, docs/404.html, docs/i18n.js, docs/site.css
// Images are not generated: they live in docs/img/ and are referenced by name.
//   node site-src/build.cjs
const fs = require('fs');
const path = require('path');

const DOCS = path.join(__dirname, '..', 'docs');
const C = require('./content.cjs');
const t = (k) => { if (!C[k]) throw new Error('missing ' + k); return C[k].en; };
const tx = (k, tag = 'span', attrs = '') => `<${tag}${attrs} data-i18n="${k}">${t(k)}</${tag}>`;

const WEB = 'https://app.sentaro.trade/';
const DOWNLOAD = 'https://github.com/romby1/Sentaro/releases/latest';
const TELEGRAM = 'https://t.me/sentaro_trade';

const ARROW = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';
const WIN = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M1 2.7 6.7 2v5.5H1zM7.4 1.9 15 1v6.5H7.4zM1 8.2h5.7v5.5L1 13zM7.4 8.2H15V15l-7.6-1z"/></svg>';
const TG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.9 4.3 18.6 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.2-8.3c.4-.4-.1-.6-.6-.2L6 13.6l-4.9-1.5c-1.1-.3-1.1-1.1.2-1.6L20.5 3.1c.9-.3 1.7.2 1.4 1.2z"/></svg>';
const ICON = {
  knives: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  spreads: '<path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"/>',
  analyzer: '<path d="M9 5v4M7 9h4v6H7zM9 15v2M17 3v2M15 5h4v8h-4zM17 13v3M3 3v16a2 2 0 0 0 2 2h16"/>',
  monitor: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  ticks: '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
  bell: '<path d="M10.27 21a2 2 0 0 0 3.46 0M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.96 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.41 5.96-2.74 7.33"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
  desktop: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
};
const icon = (k) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;

// Pieces of the app's own screens (2880 × 1720 captures): x/y/w/h in source px.
const crop = (cls, src, x, y, w, h, label) =>
  `<div class="crop ${cls}" style="--src: url(img/${src}); --x: ${x}; --y: ${y}; --w: ${w}; --h: ${h}" role="img" aria-label="${label}"></div>`;
const SPREAD_CARD = (cls) => crop(cls, 'spreads.webp', 12, 183, 561, 458, 'A Spreads card: one coin on five exchanges, with volume and funding');
const LISTING_TOAST = (cls) => crop(cls, 'spreads.webp', 2246, 1440, 602, 248, 'A new-listing pop-up with a Copy button');

const ctas = `<div class="ctas">
        <a class="btn primary" href="${WEB}">${tx('cta.web')} ${ARROW}</a>
        <a class="btn ghost" href="${DOWNLOAD}" target="_blank" rel="noopener">${WIN}${tx('cta.win')}</a>
      </div>`;
const venues = `<div class="venues" aria-label="Exchanges">
        <span class="venue"><img src="logos/binance.png" alt="" width="18" height="18">Binance</span>
        <span class="venue"><img class="invert" src="logos/bybit.png" alt="" width="18" height="18">Bybit</span>
        <span class="venue"><img class="invert" src="logos/okx.png" alt="" width="18" height="18">OKX</span>
        <span class="venue"><img src="logos/gateio.png" alt="" width="18" height="18">Gate</span>
        <span class="venue"><img src="logos/hyperliquid.png" alt="" width="18" height="18">Hyperliquid</span>
      </div>`;

const TOOLS = [
  { id: 'knives', name: 'Knives', doc: 'knives', img: 'knives.webp', fit: 'full', alt: 'Sentaro Knives: coins whose 5-minute candle just moved past the threshold' },
  { id: 'spreads', name: 'Spreads', doc: 'spreads', img: 'spreads.webp', fit: 'short', alt: 'Sentaro Spreads: one coin priced on five exchanges' },
  { id: 'analyzer', name: 'Analyzer', doc: 'analyzer', img: 'analyzer.webp', fit: 'desk', alt: 'Sentaro Analyzer: one coin on four timeframes with drawings and big-order levels, beside the market list' },
  { id: 'monitor', name: 'Monitor', doc: 'monitor', img: 'monitor.webp', fit: '', alt: 'Sentaro Monitor: coins ranked by volatility' },
  { id: 'ticks', name: 'Ticks', doc: 'ticks', img: 'ticks.webp', fit: 'desk', alt: 'Sentaro Ticks: big trades, TWAPs and liquidations, each grouped by coin' },
];

const toolSection = (tool) => `<section class="tool" id="${tool.id}">
  <div class="inner">
    <div class="head">
      <p class="eyebrow"><span class="eyebrow-icon">${icon(tool.id)}</span>${tool.name}</p>
      ${tx(tool.id + '.title', 'h2')}
      ${tx(tool.id + '.lede', 'p', ' class="lede"')}
    </div>
    <div class="frame"><img class="shot ${tool.fit}" src="img/${tool.img}" alt="${tool.alt}" loading="lazy" decoding="async"></div>
    <ul class="feats">
      ${[1, 2, 3, 4].map((n) => `<li>${tx(`${tool.id}.f${n}h`, 'b')}${tx(`${tool.id}.f${n}d`)}</li>`).join('\n      ')}
    </ul>
    <p class="center"><a class="more" href="/manual/en/tools/${tool.doc}.html" data-manual>${tx('docs.link')} ${ARROW}</a></p>
  </div>
</section>`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${t('meta.title')}</title>
  <meta name="description" content="A live crypto screener for Binance, Bybit, OKX, Gate and Hyperliquid: price moves, cross-exchange spreads, big trades, liquidations and TWAPs. Free during the beta, in your browser or on Windows.">
  <link rel="canonical" href="https://sentaro.trade/">
  <!-- Link previews (Telegram, X, Discord, Slack). -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Sentaro">
  <meta property="og:url" content="https://sentaro.trade/">
  <meta property="og:title" content="Sentaro: the whole crypto market, one screen">
  <meta property="og:description" content="A live crypto screener for Binance, Bybit, OKX, Gate and Hyperliquid. Free during the beta, in your browser or on Windows.">
  <meta property="og:image" content="https://sentaro.trade/og.png?v=2">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Sentaro">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Sentaro: the whole crypto market, one screen">
  <meta name="twitter:description" content="A live crypto screener for five exchanges. Free during the beta, in your browser or on Windows.">
  <meta name="twitter:image" content="https://sentaro.trade/og.png?v=2">
  <link rel="icon" type="image/png" href="img/mark.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@500&display=swap">
  <link rel="preload" as="image" href="img/monitor.webp">
  <link rel="stylesheet" href="site.css">
</head>
<body>

<header class="hero">
  <div class="glow" aria-hidden="true"></div>
  <div class="inner">
    <nav class="nav" aria-label="Site">
      <a class="brand" href="/"><img src="img/mark.png" alt="" width="22" height="22">Sentaro</a>
      <ul>
        <li><a href="#tools">${tx('nav.tools')}</a></li>
        <li><a href="/manual/en/" data-manual>${tx('nav.docs')}</a></li>
        <li><a href="#faq">${tx('nav.faq')}</a></li>
      </ul>
      <span class="spacer"></span>
      <div class="langs" role="group" aria-label="Language">
        <button class="lang-btn active" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="uk">UA</button>
        <button class="lang-btn" data-lang="ru">RU</button>
      </div>
      <a class="btn sm ghost" href="${WEB}">${tx('nav.open')}</a>
    </nav>
    <div class="center hero-copy">
      <span class="pill"><span class="dot"></span>${tx('hero.pill')}</span>
      ${tx('hero.title', 'h1')}
      ${tx('hero.lede', 'p', ' class="lede"')}
      ${ctas}
      ${venues}
    </div>
    <div class="stage">
      <div class="frame"><img class="shot" src="img/monitor.webp" alt="Sentaro Monitor: coins ranked by volatility, each with a live chart" width="2880" height="1720" fetchpriority="high"></div>
      ${SPREAD_CARD('left')}
      ${LISTING_TOAST('right')}
    </div>
  </div>
</header>

<main>
<section class="overview" id="tools">
  <div class="inner center">
    ${tx('tools.label', 'p', ' class="eyebrow"')}
    ${tx('tools.title', 'h2')}
    <div class="tiles">
      ${TOOLS.map((tool) => `<a class="tile" href="#${tool.id}"><span class="tile-icon">${icon(tool.id)}</span><b>${tool.name}</b>${tx(tool.id + '.title')}</a>`).join('\n      ')}
    </div>
  </div>
</section>

${TOOLS.map(toolSection).join('\n\n')}

<section class="alerts">
  <div class="inner band">
    <div class="text">
      <p class="eyebrow"><span class="eyebrow-icon">${icon('bell')}</span>${tx('alerts.label')}</p>
      ${tx('alerts.title', 'h2')}
      ${tx('alerts.lede', 'p', ' class="lede"')}
    </div>
    ${LISTING_TOAST('band-toast')}
  </div>
</section>

<section class="platforms">
  <div class="inner center">
    ${tx('plat.label', 'p', ' class="eyebrow"')}
    ${tx('plat.title', 'h2')}
    <div class="plats">
      <div class="plat">
        <span class="tile-icon">${icon('globe')}</span>
        ${tx('plat.web.h', 'h3')}
        ${tx('plat.web.p', 'p')}
        <a class="btn primary" href="${WEB}">${tx('cta.web')} ${ARROW}</a>
      </div>
      <div class="plat">
        <span class="tile-icon">${icon('desktop')}</span>
        ${tx('plat.win.h', 'h3')}
        ${tx('plat.win.p', 'p')}
        <a class="btn ghost" href="${DOWNLOAD}" target="_blank" rel="noopener">${WIN}${tx('cta.win')}</a>
      </div>
    </div>
  </div>
</section>

<section class="faq" id="faq">
  <div class="inner narrow center">
    ${tx('faq.label', 'p', ' class="eyebrow"')}
    ${tx('faq.title', 'h2')}
    <div class="qs">
      ${[1, 2, 3, 4, 5, 6, 7].map((n) => `<details${n === 1 ? ' open' : ''}><summary>${tx(`faq.q${n}`)}</summary>${tx(`faq.a${n}`, 'p')}</details>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="finale">
  <div class="glow bottom" aria-hidden="true"></div>
  <div class="inner center">
    ${tx('final.title', 'h2')}
    ${ctas}
  </div>
</section>
</main>

<footer class="foot">
  <div class="inner footrow">
    <a class="brand" href="/"><img src="img/mark.png" alt="" width="22" height="22">Sentaro</a>
    <span class="spacer"></span>
    <a href="/manual/en/" data-manual>${tx('nav.docs')}</a>
    <a href="${DOWNLOAD}" target="_blank" rel="noopener">${tx('foot.download')}</a>
    <a class="tg" href="${TELEGRAM}" target="_blank" rel="noopener">${TG}Telegram</a>
    <span class="copy">© 2026 Sentaro</span>
  </div>
</footer>

<script src="i18n.js"></script>
</body>
</html>
`;

// i18n.js: the same strings for the switcher, and the switching itself.
const table = { en: {}, uk: {}, ru: {} };
for (const [key, v] of Object.entries(C)) for (const lang of Object.keys(table)) {
  if (!v[lang]) throw new Error(`${key} has no ${lang}`);
  table[lang][key] = v[lang];
}
const i18n = `// Generated from content.cjs by build.cjs; edit those, not this file.
// Elements carry data-i18n="key"; the page ships in English and switches here.
const translations = ${JSON.stringify(table, null, 2)};

const LANGS = ['en', 'uk', 'ru'];
const KEY = 'sentaro-lang';

function savedLang() {
  try {
    const saved = localStorage.getItem(KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {}
  const browser = (navigator.language || '').slice(0, 2);
  return LANGS.includes(browser) ? browser : 'en';
}

function applyLang(lang) {
  const strings = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const s = strings[el.dataset.i18n];
    if (s) el.innerHTML = s;
  });
  // The manual has its own en/, uk/ and ru/ trees: only the locale segment changes.
  document.querySelectorAll('a[data-manual]').forEach((a) => {
    a.href = a.getAttribute('href').replace(/\\/manual\\/(?:en|uk|ru)\\//, '/manual/' + lang + '/');
  });
  document.querySelectorAll('.lang-btn').forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
  document.documentElement.lang = lang;
  document.title = strings[document.body.dataset.titleKey || 'meta.title'];
  try { localStorage.setItem(KEY, lang); } catch {}
}

document.querySelectorAll('.lang-btn').forEach((b) => b.addEventListener('click', () => applyLang(b.dataset.lang)));
const initial = savedLang();
if (initial !== 'en') applyLang(initial);
`;

fs.writeFileSync(path.join(DOCS, 'index.html'), html);

// ── 404: PAGE/USDT, delisted. A Knives card whose chart walks up and then
// drops off a cliff, drawn here so the page needs no script to show it. ──
const crashChart = (() => {
  const W = 560, H = 210, N = 46, cw = W / N;
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  let top = 0; // the highest price, set once the bars exist
  const y = (p) => 12 + (1 - (p - 40) / (top - 40)) * (H - 60);
  let price = 66;
  const bars = [];
  for (let i = 0; i < N - 1; i++) {
    const open = price;
    price += (rnd() - 0.42) * 7 + (i > 32 ? 1.2 : 0);
    const close = price;
    bars.push({ open, close, high: Math.max(open, close) + rnd() * 3.5, low: Math.min(open, close) - rnd() * 3.5, vol: 6 + rnd() * 14 });
  }
  bars.push({ open: price, close: 40, high: price + 1, low: 40, vol: 52 }); // the delisting
  top = Math.max(...bars.map((c) => c.high)) + 2;
  const candle = (c, i) => {
    const x = i * cw + cw / 2, up = c.close >= c.open, col = up ? 'var(--up)' : 'var(--down)';
    const top = y(Math.max(c.open, c.close)), bot = y(Math.min(c.open, c.close));
    return `<line x1="${x}" x2="${x}" y1="${y(c.high).toFixed(1)}" y2="${y(c.low).toFixed(1)}" stroke="${col}"/>` +
      `<rect x="${(x - cw * 0.32).toFixed(1)}" y="${top.toFixed(1)}" width="${(cw * 0.64).toFixed(1)}" height="${Math.max(1, bot - top).toFixed(1)}" fill="${col}"/>` +
      `<rect x="${(x - cw * 0.32).toFixed(1)}" y="${(H - c.vol * 0.5).toFixed(1)}" width="${(cw * 0.64).toFixed(1)}" height="${(c.vol * 0.5).toFixed(1)}" fill="${col}" opacity="0.35"/>`;
  };
  const last = y(40);
  return `<svg class="nf-chart" viewBox="0 0 ${W + 70} ${H}" role="img" aria-label="A price chart that rises, then falls straight down to the bottom">
      <g stroke-width="1">${bars.map(candle).join('')}</g>
      <line x1="0" x2="${W}" y1="${last.toFixed(1)}" y2="${last.toFixed(1)}" stroke="var(--subtle)" stroke-dasharray="2 3"/>
      <rect x="${W + 4}" y="${(last - 10).toFixed(1)}" width="62" height="20" rx="3" fill="var(--down)"/>
      <text x="${W + 35}" y="${(last + 4).toFixed(1)}" text-anchor="middle" font-family="var(--mono)" font-size="11" font-weight="500" fill="#1a0b0e">0.00404</text>
    </svg>`;
})();

const notFound = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${t('nf.meta')}</title>
  <meta name="robots" content="noindex">
  <link rel="icon" type="image/png" href="/img/mark.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@500&display=swap">
  <link rel="stylesheet" href="/site.css">
</head>
<body data-title-key="nf.meta">
<header class="hero nf">
  <div class="glow" aria-hidden="true"></div>
  <div class="inner">
    <nav class="nav" aria-label="Site">
      <a class="brand" href="/"><img src="/img/mark.png" alt="" width="22" height="22">Sentaro</a>
      <span class="spacer"></span>
      <div class="langs" role="group" aria-label="Language">
        <button class="lang-btn active" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="uk">UA</button>
        <button class="lang-btn" data-lang="ru">RU</button>
      </div>
      <a class="btn sm ghost" href="${WEB}">${tx('nav.open')}</a>
    </nav>
    <main class="center nf-main">
      <article class="nf-card">
        <header class="nf-head">
          <b>PAGE/USDT</b>
          <span class="nf-badge">${tx('nf.badge')}</span>
          <span class="spacer"></span>
          <span class="nf-change">−404.00%</span>
        </header>
        ${crashChart}
        <dl class="nf-stats">
          <div><dt>${tx('nf.move')}</dt><dd class="down">−404.00%</dd></div>
          <div><dt>${tx('nf.vol')}</dt><dd>$0</dd></div>
          <div><dt>${tx('nf.since')}</dt><dd>${tx('nf.now')}</dd></div>
        </dl>
      </article>
      ${tx('nf.title', 'h1')}
      ${tx('nf.lede', 'p', ' class="lede"')}
      <div class="ctas">
        <a class="btn primary" href="/">${tx('nf.home')} ${ARROW}</a>
        <a class="btn ghost" href="${WEB}">${tx('cta.web')}</a>
      </div>
    </main>
  </div>
</header>
<script src="/i18n.js"></script>
</body>
</html>
`;
fs.writeFileSync(path.join(DOCS, '404.html'), notFound);
fs.writeFileSync(path.join(DOCS, 'i18n.js'), i18n);
fs.copyFileSync(path.join(__dirname, 'site.css'), path.join(DOCS, 'site.css'));
console.log('ok');
