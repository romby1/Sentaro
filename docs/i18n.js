// Translations for Warden website
const translations = {
  en: {
    // Navigation
    "nav.tools": "Tools",
    "nav.customize": "Customize",
    "nav.faq": "FAQ",
    "nav.download": "Download",
    
    // Hero
    "hero.badge": "Beta — Free Access",
    "hero.sub": "Fully custom crypto monitoring workspace for Windows. Track price movements across Bybit, Binance, Gate.io and OKX simultaneously.",
    "hero.download": "Download for Windows",
    "hero.explore": "Explore Tools →",
    
    // Tools section
    "tools.label": "Tools",
    "tools.title": "Everything in one workspace",
    "tools.sub": "Each tool is purpose-built and fully configurable. No bloat, no noise — just the data you need. Change, resize, build your own monitoring workspace",
    
    // Knives
    "knives.tagline": "Signals about every ticker on the market that you should know about.<br/>Real-time price movement scanner across all major exchanges — the moment something moves, you know. All data is based on 5m timeframe.",
    "knives.f1.title": "4 Exchanges simultaneously",
    "knives.f1.desc": "Bybit, Binance, Gate.io and OKX all monitored at once. Enable or disable each exchange individually.",
    "knives.f2.title": "Two-tier alert thresholds",
    "knives.f2.desc": "Set a base % and a high % threshold independently. Separate sound notifications for each level.",
    "knives.f3.title": "Volume filtering",
    "knives.f3.desc": "Filter tickers by volume to cut out low-liquidity noise. Only see moves that actually matter. Volume calculated for 5m timeframe",
    "knives.f4.title": "Exchange badges per ticker",
    "knives.f4.desc": "Each ticker card shows exactly which exchanges it's listed on. Custom badge design per exchange.",
    "knives.f5.title": "Sound control",
    "knives.f5.desc": "Enable or disable sound notifications per threshold level, independently.",
    "knives.f6.title": "Fully custom per-exchange settings",
    "knives.f6.desc": "Each exchange has its own settings panel — thresholds, volume filters, sounds and display options all configured separately.",
    "knives.screenshots": "Settings panels",
    
    // Alerts
    "alerts.tagline": "Cross-exchange price deviation and listing scanner.<br/>Detects when the same asset is priced differently across exchanges or if new ticker is listed — and gives you alert instantly. All data is based on 5m timeframe.",
    "alerts.f1.title": "Cross-exchange deviation detection",
    "alerts.f1.desc": "Continuously compares prices for the same ticker across all monitored exchanges and flags deviations above your threshold.",
    "alerts.f2.title": "Live listing alerts",
    "alerts.f2.desc": "Get notified when newly listed tokens start trading on monitored exchanges. Never miss fresh opportunities.",
    "alerts.f3.title": "Minimum deviation threshold",
    "alerts.f3.desc": "Only see alerts above a % deviation you define. Adjustable from 1% to 10% in 0.5% increments.",
    "alerts.f4.title": "Volume filtering",
    "alerts.f4.desc": "Filter out low-liquidity alerts by setting a minimum trading volume per exchange. Toggle on or off without losing your setting. Volume calculated for 5m timeframe",
    "alerts.f5.title": "Sound notifications",
    "alerts.f5.desc": "Optional audio alert fires when a new deviation appears. Toggle independently from other tools.",
    "alerts.f6.title": "Configurable card limit",
    "alerts.f6.desc": "Set how many alert cards to display at once — from 3 up to 50. Keeps the window clean and focused.",
    "alerts.screenshots": "Settings panel",
    
    // Analyzer
    "analyzer.tagline": "Four timeframes. One ticker. Full picture.<br/>5m, 15m, 1h and 4h charts rendered simultaneously.",
    "analyzer.f1.title": "4 charts simultaneously",
    "analyzer.f1.desc": "5m, 15m, 1h and 4h candlestick charts render side by side for the selected ticker. No tab switching, no context loss.",
    "analyzer.f2.title": "4 exchanges, one interface",
    "analyzer.f2.desc": "Switch between Bybit, Binance, Gate.io and OKX instantly. All charts and ticker data update to the selected exchange with no reload.",
    "analyzer.f3.title": "Infinite scroll history",
    "analyzer.f3.desc": "Scroll left on any chart to automatically load more historical candles. Data loads in batches of 500 as you explore further back.",
    "analyzer.f4.title": "Full ticker list with sorting",
    "analyzer.f4.desc": "Search and sort all available tickers by 24h change, volume, open interest or funding rate. One click to load any ticker into all four charts.",
    "analyzer.f5.title": "Watchlist with exchange badges",
    "analyzer.f5.desc": "Save tickers to a persistent watchlist. Each entry shows which exchanges list it — so you always know where to trade.",
    "analyzer.f6.title": "Live stats in titlebar",
    "analyzer.f6.desc": "24h change, volume, open interest and funding countdown update live for the active ticker — always visible without leaving the chart view.",
    
    // Monitor
    "monitor.tagline": "Live market scanner sorted by volatility metrics.<br/>Rank every ticker by NATR, volume or % change — aggregated across all exchanges in real time. All data is based on 5m timeframe.",
    "monitor.f1.title": "Sort by 3 volatility metrics",
    "monitor.f1.desc": "Rank tickers by Normalised ATR, volume or % change. NATR smoothing via RMA (Wilder's moving average — smoother, slower to react) or SMA (simple average — more responsive to recent candles).",
    "monitor.f2.title": "Three NATR aggregation modes",
    "monitor.f2.desc": "Weighted average across exchanges, highest NATR across all exchanges, or priority — uses the first exchange in your order.",
    "monitor.f3.title": "Volume source control",
    "monitor.f3.desc": "Choose between total turnover summed across all exchanges or turnover from your top-priority exchange only.",
    "monitor.f4.title": "Configurable card limit",
    "monitor.f4.desc": "Display between 3 and 30 ticker cards. Adjust up or down without restarting — the list reorders live.",
    "monitor.f5.title": "Drag-to-reorder exchange priority",
    "monitor.f5.desc": "Set which exchange comes first when aggregating data. Drag exchanges into order, or drag below the divider to disable them entirely.",
    "monitor.f6.title": "NATR and % change alert thresholds",
    "monitor.f6.desc": "Set independent thresholds for NATR and % change. Values highlights when exceeded and an optional sound fires on each new alert.",
    "monitor.f7.title": "Per-metric color settings",
    "monitor.f7.desc": "Each metric gets its own color rules. NATR and % change shifts from a custom level-1 to level-2 color as volatility rises. Outline and background fill can be toggled independently per level — fully customizable colors for all three.",
    "monitor.screenshots": "Settings panels",
    "monitor.screenshots2": "Metric colors",
    
    // Customize section
    "customize.label": "Customization",
    "customize.title": "Built to be yours",
    "customize.sub": "Deep control over every visual detail — define how each metric is colored, how badges display, and what your workspace looks like at a glance.",
    
    // Chart colors
    "chartsColors.tagline": "Define exactly how candles would look like.<br/>This setting changes candle's color for all charts in every tool.",
    "chartsColors.screenshots": "Color settings",
    
    // Exchange badges
    "badges.tagline": "Control how exchange badges appear on every ticker card.<br/>Adjust opacity, outlines and sizing — or collapse them to minimal bars to declutter the view.",
    "badges.f1.title": "Show or hide all badges",
    "badges.f1.desc": "Toggle exchange badges on or off across all ticker cards with a single switch. Clean up the display when you don't need the exchange context.",
    "badges.f2.title": "Primary vs regular badge opacity",
    "badges.f2.desc": "The primary exchange badge can be shown at a different opacity from the rest. Dim secondary badges to draw focus to the exchange that actually provided the data.",
    "badges.f3.title": "Primary badge outline",
    "badges.f3.desc": "Add a subtle border to the primary exchange badge to make it stand out from secondary ones without changing size or color.",
    "badges.f4.title": "Minimized bar mode",
    "badges.f4.desc": "Collapse badges to thin vertical bars — still color-coded per exchange, but taking a fraction of the space. Useful when maximizing card density matters more than label clarity.",
    "badges.screenshots": "Badge appearance options",
    
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
    "faq.a2": "Warden currently supports Bybit, Binance, Gate.io and OKX. All exchanges are monitored simultaneously across every tool. More exchanges may be added based on community feedback.",
    "faq.q3": "Does Warden access my exchange account or API keys?",
    "faq.a3": "No. Warden only reads publicly available market data. It never asks for API keys, never connects to your exchange account, and never executes trades. It is a monitoring tool only.",
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
    "nav.customize": "Налаштування",
    "nav.faq": "FAQ",
    "nav.download": "Завантажити",
    
    // Hero
    "hero.badge": "Бета — Безкоштовний доступ",
    "hero.sub": "Повністю кастомний робочий простір для моніторингу криптовалют для Windows. Відстежуйте рух цін на Bybit, Binance, Gate.io та OKX одночасно.",
    "hero.download": "Завантажити для Windows",
    "hero.explore": "Переглянути інструменти →",
    
    // Tools section
    "tools.label": "Інструменти",
    "tools.title": "Все в одному робочому просторі",
    "tools.sub": "Кожен інструмент створений для конкретної задачі та має повну кастомізацію. Без зайвого — тільки дані, які вам потрібні. Змінюйте, налаштовуйте, створюйте власний робочий простір",
    
    // Knives
    "knives.tagline": "Сигнали про кожний тікер на ринку, про який ви повинні знати.<br/>Сканер руху цін у реальному часі на всіх основних біржах — щось рухається і ви дізнаєтесь миттєво. Всі дані на основі 5хв таймфрейму.",
    "knives.f1.title": "4 біржі одночасно",
    "knives.f1.desc": "Bybit, Binance, Gate.io та OKX моніторяться одночасно. Вмикайте або вимикайте кожну біржу окремо.",
    "knives.f2.title": "Дворівневі значення сповіщень",
    "knives.f2.desc": "Встановлюйте базовий % та високий % поріг незалежно. Окремі звукові сповіщення для кожного рівня.",
    "knives.f3.title": "Фільтрація за об'ємом",
    "knives.f3.desc": "Фільтруйте тікери за об'ємом, щоб відсіяти шум низької ліквідності. Бачте тільки ті рухи, які мають значення. Об'єм розраховується за 5хв таймфрейм",
    "knives.f4.title": "Значки бірж для кожного тікера",
    "knives.f4.desc": "Кожна картка тікера показує, на яких біржах він торгується. Індивідуальний дизайн значків для кожної біржі.",
    "knives.f5.title": "Контроль звуку",
    "knives.f5.desc": "Вмикайте або вимикайте звукові сповіщення для кожного рівня порогу незалежно.",
    "knives.f6.title": "Повністю індивідуальні налаштування для кожної біржі",
    "knives.f6.desc": "Кожна біржа має власну панель налаштувань — руч у відсотках, фільтри об'єму, звуки та параметри відображення налаштовуються окремо.",
    "knives.screenshots": "Панелі налаштувань",
    
    // Alerts
    "alerts.tagline": "Сканер відхилень цін між біржами та нових лістингів.<br/>Виявляє, коли один і той самий актив має різну ціну на біржах або якщо відбувся новий лістинг — і миттєво дає сповіщення про це. Всі дані на основі 5хв таймфрейму.",
    "alerts.f1.title": "Виявлення відхилень між біржами",
    "alerts.f1.desc": "Постійно порівнює ціни на один і той самий тікер на всіх доступних біржах і позначає відхилення вище вашого порогу.",
    "alerts.f2.title": "Сповіщення про нові лістинги",
    "alerts.f2.desc": "Отримуйте сповіщення, коли новостворені токени починають торгуватися на доступних біржах. Ніколи не пропускайте свіжі можливості.",
    "alerts.f3.title": "Мінімальний поріг відхилення",
    "alerts.f3.desc": "Бачте тільки сповіщення вище % відхилення, яке ви визначили. Регулюється від 1% до 10% з кроком 0.5%.",
    "alerts.f4.title": "Фільтрація за об'ємом",
    "alerts.f4.desc": "Фільтруйте сповіщення з низькою ліквідністю, встановлюючи мінімальний об'єм торгівлі для кожної біржі. Вмикайте або вимикайте без втрати налаштувань. Об'єм розраховується за 5хв таймфрейм",
    "alerts.f5.title": "Звукові сповіщення",
    "alerts.f5.desc": "Опціональне аудіо сповіщення при появі нового відхилення. Вмикається незалежно від інших інструментів.",
    "alerts.f6.title": "Налаштовуваний ліміт карток",
    "alerts.f6.desc": "Встановлюйте, скільки карток сповіщень відображати одночасно — від 3 до 50. Зберігає вікно чистим і зосередженим.",
    "alerts.screenshots": "Панель налаштувань",
    
    // Analyzer
    "analyzer.tagline": "Чотири таймфрейми. Один тікер. Повна картина.<br/>5хв, 15хв, 1г та 4г графіки рендеряться одночасно.",
    "analyzer.f1.title": "4 графіки одночасно",
    "analyzer.f1.desc": "Свічкові графіки 5хв, 15хв, 1г та 4г відображаються поруч для вибраного тікера. Без перемикання вкладок, без втрати контексту.",
    "analyzer.f2.title": "4 біржі, один інтерфейс",
    "analyzer.f2.desc": "Миттєво перемикайтеся між Bybit, Binance, Gate.io та OKX. Всі графіки та дані тікера оновлюються для вибраної біржі без перезавантаження.",
    "analyzer.f3.title": "Нескінченна історія прокрутки",
    "analyzer.f3.desc": "Прокручуйте вліво на будь-якому графіку, щоб автоматично завантажити більше історичних свічок. Дані завантажуються партіями по 500 при подальшому прокручуванні.",
    "analyzer.f4.title": "Повний список тікерів з сортуванням",
    "analyzer.f4.desc": "Шукайте та сортуйте всі доступні тікери за зміною за 24г, об'ємом, відкритим інтересом або ставкою фінансування. Один клік для завантаження будь-якого тікера на всі чотири графіки.",
    "analyzer.f5.title": "Список спостереження з бейджами бірж",
    "analyzer.f5.desc": "Зберігайте тікери в постійний список спостереження. Кожен запис показує, на яких біржах він доступний — тож ви завжди знаєте, де торгувати.",
    "analyzer.f6.title": "Жива статистика в заголовку",
    "analyzer.f6.desc": "Зміна за 24г, об'єм, відкритий інтерес та зворотний відлік фінансування оновлюються в реальному часі для активного тікера — завжди видно, не залишаючи вигляд графіка.",
    
    // Monitor
    "monitor.tagline": "Живий сканер ринку, відсортований за метриками волатильності.<br/>Ранжуйте кожен тікер за NATR, об'ємом або % зміною — агреговано на всіх біржах у режимі реального часу. Всі дані на основі 5хв таймфрейму.",
    "monitor.f1.title": "Сортування за 3 метриками волатильності",
    "monitor.f1.desc": "Ранжуйте тікери за Нормалізованим ATR, об'ємом або % зміною. Згладжування NATR через RMA (ковзне середнє Вайлдера — гладше, повільніше реагує) або SMA (просте середнє — більш чутливе до недавніх свічок).",
    "monitor.f2.title": "Три режими агрегації NATR",
    "monitor.f2.desc": "Зважене середнє на всіх біржах, найвищий NATR на всіх біржах або пріоритет — використовує першу біржу у вашому порядку.",
    "monitor.f3.title": "Контроль джерела об'єму",
    "monitor.f3.desc": "Обирайте між загальним оборотом, підсумованим на всіх біржах, або оборотом тільки від вашої біржі з найвищим пріоритетом.",
    "monitor.f4.title": "Налаштовуваний ліміт карток",
    "monitor.f4.desc": "Відображення від 3 до 30 карток тікерів. Регулюйте вгору або вниз без перезапуску — список впорядковується в режимі реального часу.",
    "monitor.f5.title": "Перетягування для зміни пріоритету бірж",
    "monitor.f5.desc": "Встановлюйте, яка біржа йде першою при агрегації даних. Перетягуйте біржі у порядок або перетягуйте нижче розділювача, щоб вимкнути їх повністю.",
    "monitor.f6.title": "Пороги сповіщень NATR та % зміни",
    "monitor.f6.desc": "Встановлюйте незалежні пороги для NATR та % зміни. Значення підсвічуються при перевищенні, і опціональний звук спрацьовує при кожному новому сповіщенні.",
    "monitor.f7.title": "Налаштування кольорів для кожної метрики",
    "monitor.f7.desc": "Кожна метрика має власні правила кольорів. NATR та % зміна переходять від індивідуального кольору рівня 1 до кольору рівня 2 при зростанні волатильності. Контур та заповнення фону можна вмикати незалежно для кожного рівня — повністю налаштовувані кольори для всіх трьох.",
    "monitor.screenshots": "Панелі налаштувань",
    "monitor.screenshots2": "Кольори метрик",
    
    // Customize section
    "customize.label": "Налаштування",
    "customize.title": "Створений бути вашим",
    "customize.sub": "Глибокий контроль над кожною візуальною деталлю — визначайте, як забарвлюється кожна метрика, як відображаються бейджі, і як виглядає ваш робочий простір загалом.",
    
    // Chart colors
    "chartsColors.tagline": "Визначте точно, як будуть виглядати свічки.<br/>Це налаштування змінює колір свічок для всіх графіків у кожному інструменті.",
    "chartsColors.screenshots": "Налаштування кольорів",
    
    // Exchange badges
    "badges.tagline": "Контролюйте, як бейджі бірж відображаються на кожній картці тікера.<br/>Регулюйте непрозорість, контури та розмір — або згорніть їх до мінімальних смужок, щоб розвантажити вигляд.",
    "badges.f1.title": "Показати або приховати всі бейджі",
    "badges.f1.desc": "Вмикайте або вимикайте бейджі бірж на всіх картках тікерів одним перемикачем. Очистіть відображення, коли вам не потрібен контекст біржі.",
    "badges.f2.title": "Непрозорість основного та звичайного бейджа",
    "badges.f2.desc": "Основний бейдж біржі може відображатися з іншою непрозорістю, ніж решта. Затемніть вторинні бейджі, щоб зосередити увагу на біржі, яка надала дані.",
    "badges.f3.title": "Контур основного бейджа",
    "badges.f3.desc": "Додайте тонку рамку до основного бейджа біржі, щоб він виділявся серед вторинних без зміни розміру або кольору.",
    "badges.f4.title": "Режим мінімізованої смужки",
    "badges.f4.desc": "Згорніть бейджі до тонких вертикальних смужок — все ще кольорово кодовані для кожної біржі, але займають частину місця. Корисно, коли максимізація щільності карток важливіша за чіткість міток.",
    "badges.screenshots": "Параметри відображення бейджів",
    
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
    "faq.a2": "Warden наразі підтримує Bybit, Binance, Gate.io та OKX. Всі біржі моніторяться одночасно на кожному інструменті. Більше бірж може бути додано на основі відгуків спільноти.",
    "faq.q3": "Чи має Warden доступ до мого облікового запису біржі або API ключів?",
    "faq.a3": "Ні. Warden тільки читає загальнодоступні ринкові дані. Він ніколи не запитує API ключі, ніколи не підключається до вашого облікового запису біржі і ніколи не виконує торгівлю. Це тільки інструмент моніторингу.",
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
