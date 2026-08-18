// Translations for Warden website
const translations = {
  en: {
    // Navigation
    "nav.tools": "Tools",
    "nav.docs": "Docs",
    "nav.faq": "FAQ",
    "nav.download": "Download",
    
    // Hero
    "hero.badge": "Beta — Free Access",
    "hero.exchanges": "All five at once, in one window",
    "hero.more": "+ more to come",
    "hero.tagline": "Know the second the market moves.",
    "hero.download": "Download for Windows",
    "hero.explore": "Explore Tools →",
    
    // Tools section
    "tools.label": "Tools",
    "tools.title": "Everything in one workspace",
    "tools.sub": "Each tool opens in its own window and is configured on its own terms. No bloat, no noise — just the data you need, arranged the way you want it.",
    "knives.headline": "Never miss a move again.",
    
    // Knives
    "knives.tagline": "Warden watches every ticker on five exchanges and surfaces the ones that just moved — on the 5-minute candle, as it happens.",
    "knives.f1.title": "Catches what you'd miss by hand",
    "knives.f1.desc": "500+ tickers across Bybit, Binance, Gate.io, OKX and Hyperliquid, all watched at once. One window instead of five browser tabs.",
    "knives.f3.title": "Only the moves that matter",
    "knives.f3.desc": "Volume filters cut low-liquidity noise, so a 5% jump on a dead ticker never steals your attention.",
    "knives.f5.title": "Hear it without watching it",
    "knives.f5.desc": "One sound for an ordinary move, another for a big one. Leave it running in the background and look when it calls you.",
    "knives.f6.title": "Tuned the way you trade",
    "knives.f6.desc": "Every exchange gets its own trigger percentage and volume filter. Run Binance tight and Gate.io loose if that's how you work.",
    "knives.docs": "Full documentation →",
    "alerts.headline": "Spot the gap before it closes.",

    // Alerts
    "alerts.tagline": "The same coin rarely costs the same everywhere. Alerts catches the split the moment it opens — and tells you when something new starts trading.",
    "alerts.f1.title": "See the gap while it's open",
    "alerts.f1.desc": "Prices for the same coin drift apart across exchanges constantly. Alerts shows you the spread live, updating as it moves — not as it was when the alert fired.",
    "alerts.f2.title": "Be there when a token lists",
    "alerts.f2.desc": "New listings are flagged the moment they start trading, with their own sound. That first hour only happens once.",
    "alerts.f3.title": "Set your own floor",
    "alerts.f3.desc": "Only see gaps above a percentage you choose, from 1% up. Below that, silence.",
    "alerts.f4.title": "Ignore what you can't trade",
    "alerts.f4.desc": "A gap only counts when at least two exchanges have real volume behind it, so you're not chasing a number on an empty book.",
    "alerts.docs": "Full documentation →",
    "analyzer.headline": "Every timeframe at once.",

    // Analyzer
    "analyzer.tagline": "One ticker, up to eight charts, on whichever exchange you actually trade. No tab switching, no context lost.",
    "analyzer.f1.title": "Build the layout you think in",
    "analyzer.f1.desc": "Up to eight charts side by side, each on any timeframe from 1m to 1w. Opens on 5m, 15m, 1h and 4h — and remembers how you left it.",
    "analyzer.f2.title": "Five exchanges, spot and futures",
    "analyzer.f2.desc": "Switch venue or market type instantly. Every chart and every number follows, with no reload.",
    "analyzer.f3.title": "Draw straight on the chart",
    "analyzer.f3.desc": "Rays, trend lines, boxes and freehand — each on a key you choose, snapping to candle highs and lows. Drawings are saved per ticker and per exchange.",
    "analyzer.f4.title": "Sort the entire market",
    "analyzer.f4.desc": "Rank every ticker by 24h change, volume, open interest or funding rate, then load any of them into every open chart with one click.",
    "analyzer.docs": "Full documentation →",
    "monitor.headline": "The whole market, ranked by what's moving.",

    // Monitor
    "monitor.tagline": "A live leaderboard of volatility. Rank every ticker by NATR, volume or percent change, aggregated across all five exchanges.",
    "monitor.f1.title": "See what's moving right now",
    "monitor.f1.desc": "Every ticker ranked live by volatility, volume or price change. The board reorders itself as the market turns.",
    "monitor.f3.title": "Keep the dead weight off",
    "monitor.f3.desc": "Minimum volume filters drop illiquid tickers, so the top of the board is always something you could actually trade.",
    "monitor.f5.title": "Decide which exchange to trust",
    "monitor.f5.desc": "Drag exchanges into priority order, and choose whether numbers are averaged across them, maxed, or taken from your first choice.",
    "monitor.f7.title": "Know at a glance, not at a squint",
    "monitor.f7.desc": "Values change colour as they climb past levels you set, with an optional sound when one crosses. Outline, fill and colour are all yours.",
    "monitor.docs": "Full documentation →",
    "terminal.label": "Experimental",
    "terminal.headline": "Trade from the order book.",
    "terminal.note": "This one is a proof of concept and it can be buggy. It is off by default, entirely opt-in, and needs trade-only keys — never withdrawal access. Every other tool in Warden works without any keys at all.",
    "terminal.docs": "Read the docs first →",
    
    // Customize section
    
    // Chart colors
    
    
    // FAQ
    "faq.label": "FAQ",
    "faq.title": "Common questions",
    "faq.warning.title": "Windows Defender / SmartScreen warning",
    "faq.warning.text1": "When you first download and run Warden, <strong>Windows Defender SmartScreen may show a warning</strong> saying the app is unrecognized. This is completely normal and expected — here's why:",
    "faq.warning.text2": "Windows SmartScreen flags <strong>any new application that hasn't yet built up a reputation</strong> with Microsoft. It is not a virus detection — it simply means not enough people have downloaded the file yet for Microsoft to automatically trust it. Every new indie app goes through this. As Warden gains more downloads, this warning will disappear on its own.",
    "faq.warning.step1": "Click <strong>\"More info\"</strong> on the SmartScreen popup",
    "faq.warning.step2": "Click <strong>\"Run anyway\"</strong> to launch the application",
    "faq.warning.step3": "This only happens once — subsequent launches won't show the warning",
    "faq.q1": "Is Warden free?",
    "faq.a1": "Yes. Warden is completely free during the beta period. There are no hidden fees, no premium tiers, and no paywalls. All tools and features are available to everyone.",
    "faq.q2": "Which exchanges are supported?",
    "faq.a2": "Warden currently supports Bybit, Binance, Gate.io, OKX and Hyperliquid. All exchanges are monitored simultaneously across every tool. More exchanges may be added based on community feedback.",
    "faq.q3": "Does Warden access my exchange account or API keys?",
    "faq.a3": "The monitoring tools — Knives, Alerts, Analyzer and Monitor — read publicly available market data only. They never ask for API keys, never connect to your account, and cannot place trades.<br/><br/>The one exception is Terminal, an experimental trading tool that is off by default. It only does anything if you deliberately set it up with your own exchange keys, and it asks for trade permission only — Warden never needs withdrawal access and has no feature that uses it.",
    "faq.q4": "Does it work on macOS or Linux?",
    "faq.a4": "Warden is currently Windows-only. macOS and Linux support may be considered in the future depending on demand.",
    "faq.q5": "How do I report bugs or request features?",
    "faq.a5": "Join the Telegram group — it's the fastest way to report issues, suggest features, and get direct responses.",
    
    // CTA section
    "cta.text": "Ready to try it?",
    "cta.download": "Download for Windows",
    
    // Telegram section
    "telegram.text1": "Join for news and to share your feedback",
    "telegram.text2": "Updates, feature requests and direct contact",
    "telegram.button": "Telegram",
    
    // Footer
    "footer.tools": "Tools",
    "footer.telegram": "Telegram",
    "footer.copyright": "© 2026 WARDEN"
  },
  
  uk: {
    // Navigation
    "nav.tools": "Інструменти",
    "nav.docs": "Документація",
    "nav.faq": "FAQ",
    "nav.download": "Завантажити",
    
    // Hero
    "hero.badge": "Бета — Безкоштовний доступ",
    "hero.exchanges": "Усі п’ять одночасно, в одному вікні",
    "hero.more": "+ далі більше",
    "hero.tagline": "Дізнавайтесь про рух ринку в ту саму секунду.",
    "hero.download": "Завантажити для Windows",
    "hero.explore": "Переглянути інструменти →",
    
    // Tools section
    "tools.label": "Інструменти",
    "tools.title": "Все в одному робочому просторі",
    "tools.sub": "Кожен інструмент відкривається у власному вікні й налаштовується окремо. Без зайвого — лише потрібні дані, розставлені так, як зручно вам.",
    "knives.headline": "Більше не проґавите жоден рух.",
    
    // Knives
    "knives.tagline": "Warden стежить за кожним тікером на п'яти біржах і показує ті, що щойно зрушили — на 5-хвилинній свічці, у момент руху.",
    "knives.f1.title": "Ловить те, що вручну не побачити",
    "knives.f1.desc": "500+ тікерів на Bybit, Binance, Gate.io, OKX та Hyperliquid — усі одночасно. Одне вікно замість п'яти вкладок браузера.",
    "knives.f3.title": "Лише ті рухи, що мають значення",
    "knives.f3.desc": "Фільтри обсягу відсікають шум низької ліквідності, тож 5% стрибок на мертвому тікері не краде вашу увагу.",
    "knives.f5.title": "Чуйте, не дивлячись",
    "knives.f5.desc": "Один звук для звичайного руху, інший — для великого. Хай працює у фоні, а ви подивитесь, коли він покличе.",
    "knives.f6.title": "Налаштовано під вашу торгівлю",
    "knives.f6.desc": "Кожна біржа має власний відсоток спрацювання та фільтр обсягу. Тримайте Binance вузько, а Gate.io вільно — якщо саме так ви працюєте.",
    "knives.docs": "Повна документація →",
    "alerts.headline": "Побачте розрив, доки він не зник.",
    
    // Alerts
    "alerts.tagline": "Та сама монета рідко коштує однаково всюди. Alerts ловить розрив у момент його появи — і повідомляє, коли щось нове виходить на торги.",
    "alerts.f1.title": "Бачте розрив, поки він відкритий",
    "alerts.f1.desc": "Ціни на одну монету постійно розходяться між біржами. Alerts показує спред у реальному часі, а не таким, яким він був у момент сповіщення.",
    "alerts.f2.title": "Будьте там, де новий лістинг",
    "alerts.f2.desc": "Нові лістинги позначаються в момент початку торгів, з власним звуком. Перша година буває лише раз.",
    "alerts.f3.title": "Встановіть власний поріг",
    "alerts.f3.desc": "Бачте лише розриви вище обраного вами відсотка, від 1%. Нижче — тиша.",
    "alerts.f4.title": "Ігноруйте те, чим не поторгуєш",
    "alerts.f4.desc": "Розрив зараховується лише тоді, коли принаймні дві біржі мають за ним реальний обсяг — щоб ви не гналися за цифрою на порожньому стакані.",
    "alerts.docs": "Повна документація →",
    "analyzer.headline": "Усі таймфрейми одночасно.",
    
    // Analyzer
    "analyzer.tagline": "Один тікер, до восьми графіків, на тій біржі, де ви справді торгуєте. Без перемикання вкладок, без втрати контексту.",
    "analyzer.f1.title": "Побудуйте розкладку під себе",
    "analyzer.f1.desc": "До восьми графіків поруч, кожен на будь-якому таймфреймі від 1хв до 1т. Відкривається на 5хв, 15хв, 1г і 4г — і запам'ятовує, як ви його лишили.",
    "analyzer.f2.title": "П'ять бірж, спот і ф'ючерси",
    "analyzer.f2.desc": "Миттєво перемикайте біржу або тип ринку. Кожен графік і кожне число йдуть слідом, без перезавантаження.",
    "analyzer.f3.title": "Малюйте прямо на графіку",
    "analyzer.f3.desc": "Промені, лінії тренду, прямокутники та вільне малювання — кожен на обраній вами клавіші, з прив'язкою до максимумів і мінімумів свічок. Рисунки зберігаються для кожного тікера й біржі.",
    "analyzer.f4.title": "Сортуйте весь ринок",
    "analyzer.f4.desc": "Ранжуйте кожен тікер за зміною за 24г, обсягом, відкритим інтересом чи фандингом, а тоді одним кліком завантажте будь-який на всі відкриті графіки.",
    "analyzer.docs": "Повна документація →",
    "monitor.headline": "Весь ринок, відсортований за рухом.",
    
    // Monitor
    "monitor.tagline": "Живий рейтинг волатильності. Ранжуйте кожен тікер за NATR, обсягом або зміною у відсотках, агреговано по всіх п'яти біржах.",
    "monitor.f1.title": "Бачте, що рухається просто зараз",
    "monitor.f1.desc": "Кожен тікер ранжується в реальному часі за волатильністю, обсягом чи зміною ціни. Таблиця перебудовується разом із ринком.",
    "monitor.f3.title": "Приберіть баласт",
    "monitor.f3.desc": "Фільтри мінімального обсягу прибирають неліквідні тікери, тож на вершині завжди те, чим справді можна торгувати.",
    "monitor.f5.title": "Вирішуйте, якій біржі вірити",
    "monitor.f5.desc": "Перетягніть біржі у порядок пріоритету й оберіть, чи усереднювати числа, брати максимум, чи використовувати першу з них.",
    "monitor.f7.title": "Зрозуміло з першого погляду",
    "monitor.f7.desc": "Значення змінюють колір, коли перетинають задані вами рівні, з опціональним звуком. Контур, заливка й колір — усе ваше.",
    "monitor.docs": "Повна документація →",
    "terminal.label": "Експериментально",
    "terminal.headline": "Торгуйте прямо зі стакана.",
    "terminal.note": "Це proof of concept, і він може містити помилки. Вимкнений за замовчуванням, вмикається лише вами й потребує ключів тільки для торгівлі — ніколи для виведення коштів. Усі інші інструменти Warden працюють узагалі без ключів.",
    "terminal.docs": "Спершу прочитайте документацію →",
    
    // Customize section
    
    // Chart colors
    
    
    // FAQ
    "faq.label": "FAQ",
    "faq.title": "Поширені запитання",
    "faq.warning.title": "Попередження Windows Defender / SmartScreen",
    "faq.warning.text1": "При першому завантаженні та запуску Warden, <strong>Windows Defender SmartScreen може показати попередження</strong> про те, що програма нерозпізнана. Це повністю нормально і очікувано — ось чому:",
    "faq.warning.text2": "Windows SmartScreen позначає <strong>будь-яку нову програму, яка ще не здобула репутацію</strong> у Microsoft. Це не виявлення вірусу — це просто означає, що недостатньо людей завантажили файл, щоб Microsoft автоматично довіряла йому. Кожна нова незалежна програма проходить через це. Коли Warden набере більше завантажень, це попередження зникне саме собою.",
    "faq.warning.step1": "Натисніть <strong>\"Докладніше\"</strong> на спливаючому вікні SmartScreen",
    "faq.warning.step2": "Натисніть <strong>\"Все одно запустити\"</strong> для запуску програми",
    "faq.warning.step3": "Це трапляється тільки один раз — подальші запуски не показуватимуть попередження",
    "faq.q1": "Warden безкоштовний?",
    "faq.a1": "Так. Warden повністю безкоштовний протягом бета-періоду. Немає прихованих платежів, немає преміум-рівнів. Всі інструменти та функції доступні всім.",
    "faq.q2": "Які біржі підтримуються?",
    "faq.a2": "Warden наразі підтримує Bybit, Binance, Gate.io, OKX та Hyperliquid. Всі біржі моніторяться одночасно на кожному інструменті. Більше бірж може бути додано на основі відгуків спільноти.",
    "faq.q3": "Чи має Warden доступ до мого облікового запису біржі або API ключів?",
    "faq.a3": "Інструменти моніторингу — Knives, Alerts, Analyzer та Monitor — читають лише загальнодоступні ринкові дані. Вони ніколи не запитують API ключі, не підключаються до вашого акаунта і не можуть торгувати.<br/><br/>Єдиний виняток — Terminal, експериментальний торговий інструмент, вимкнений за замовчуванням. Він працює, лише якщо ви свідомо налаштуєте його власними ключами, і потребує дозволу лише на торгівлю — Warden ніколи не потребує доступу до виведення коштів.",
    "faq.q4": "Чи працює він на macOS або Linux?",
    "faq.a4": "Warden наразі тільки для Windows. Підтримка macOS та Linux може бути розглянута в майбутньому залежно від попиту.",
    "faq.q5": "Як повідомити про помилки або запросити функції?",
    "faq.a5": "Приєднуйтесь до групи Telegram — це найшвидший спосіб повідомити про проблеми, запропонувати функції та отримати прямі відповіді.",
    
    // CTA section
    "cta.text": "Готові спробувати?",
    "cta.download": "Завантажити для Windows",
    
    // Telegram section
    "telegram.text1": "Приєднуйтесь для новин та відгуків",
    "telegram.text2": "Оновлення, запити функцій та прямий зв'язок",
    "telegram.button": "Telegram",
    
    // Footer
    "footer.tools": "Інструменти",
    "footer.telegram": "Telegram",
    "footer.copyright": "© 2026 WARDEN"
  }
};

// Current language
let currentLang = localStorage.getItem('warden-lang') || 'en';

// Apply translations to the page
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  
  // Point manual links at the manual in the selected language.
  // The manual is a separate VitePress site under /manual/ with its own
  // en/ and uk/ trees, so only the locale segment of the path changes.
  document.querySelectorAll('a[data-manual]').forEach(a => {
    const href = a.getAttribute('href');
    if (href) a.setAttribute('href', href.replace(/\/manual\/(?:en|uk)\//, '/manual/' + lang + '/'));
  });

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Save to localStorage
  localStorage.setItem('warden-lang', lang);
  currentLang = lang;
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language
  applyTranslations(currentLang);

  // Add click handlers to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang !== currentLang) {
        applyTranslations(lang);
      }
    });
  });

  // FAQ toggle functionality - use event delegation for reliability
  document.querySelector('.faq-list').addEventListener('click', (e) => {
    const question = e.target.closest('.faq-question');
    if (question) {
      const item = question.closest('.faq-item');
      if (item) {
        item.classList.toggle('open');
      }
    }
  });
});
