// Translations for Sentaro website
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
    "knives.tagline": "Sentaro watches every ticker on five exchanges and surfaces the ones that just moved — on the 5-minute candle, as it happens.",
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
    "analyzer.f4.desc": "Rank every ticker by 24h change, volume, open interest, funding rate or NATR volatility, keep as many watchlists as you need, and load any ticker into every open chart with one click.",
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
    "ticks.headline": "See the trades that move the price.",
    "ticks.tagline": "Every big aggressive buy and sell across nine venues, the moment it prints — grouped by coin, with the chart right above.",
    "ticks.f1.title": "Big for this coin, not just big",
    "ticks.f1.desc": "Filter by dollar size, by how far the trade moved price, or by how it compares to the coin's normal minute. Each venue can have its own size.",
    "ticks.f2.title": "One order, one line",
    "ticks.f2.desc": "The fills of a single market order are merged into one tick, with the move it caused and how many prints it took.",
    "ticks.f3.title": "Catch the quiet buyer",
    "ticks.f3.desc": "TWAP detection finds the same order size repeating on one venue — the footprint of an algorithm working a large order without a single big print.",
    "ticks.f4.title": "Laid out your way",
    "ticks.f4.desc": "Ticks and TWAPs in one grid, or TWAPs in their own panel docked to any edge of the window.",
    "ticks.docs": "Full documentation →",
    "terminal.label": "Experimental",
    "terminal.headline": "Trade from the order book.",
    "terminal.note": "This one is a proof of concept and it can be buggy. It is off by default, entirely opt-in, and needs trade-only keys — never withdrawal access. Every other tool in Sentaro works without any keys at all.",
    "terminal.docs": "Read the docs first →",
    
    // Customize section
    
    // Chart colors
    
    
    // FAQ
    "faq.label": "FAQ",
    "faq.title": "Common questions",
    "faq.warning.title": "Windows Defender / SmartScreen warning",
    "faq.warning.text1": "When you first download and run Sentaro, <strong>Windows Defender SmartScreen may show a warning</strong> saying the app is unrecognized. This is completely normal and expected — here's why:",
    "faq.warning.text2": "Windows SmartScreen flags <strong>any new application that hasn't yet built up a reputation</strong> with Microsoft. It is not a virus detection — it simply means not enough people have downloaded the file yet for Microsoft to automatically trust it. Every new indie app goes through this. As Sentaro gains more downloads, this warning will disappear on its own.",
    "faq.warning.step1": "Click <strong>\"More info\"</strong> on the SmartScreen popup",
    "faq.warning.step2": "Click <strong>\"Run anyway\"</strong> to launch the application",
    "faq.warning.step3": "This only happens once — subsequent launches won't show the warning",
    "faq.q1": "Is Sentaro free?",
    "faq.a1": "Yes. Sentaro is completely free during the beta period. There are no hidden fees, no premium tiers, and no paywalls. All tools and features are available to everyone.",
    "faq.q2": "Which exchanges are supported?",
    "faq.a2": "Sentaro currently supports Bybit, Binance, Gate.io, OKX and Hyperliquid, plus Kraken spot in the Ticks tool. All exchanges are monitored simultaneously. More exchanges may be added based on community feedback.",
    "faq.q3": "Does Sentaro access my exchange account or API keys?",
    "faq.a3": "The monitoring tools — Knives, Alerts, Analyzer, Monitor and Ticks — read publicly available market data only. They never ask for API keys, never connect to your account, and cannot place trades.<br/><br/>The one exception is Terminal, an experimental trading tool that is off by default. It only does anything if you deliberately set it up with your own exchange keys, and it asks for trade permission only — Sentaro never needs withdrawal access and has no feature that uses it.",
    "faq.q4": "Does it work on macOS or Linux?",
    "faq.a4": "Sentaro is currently Windows-only. macOS and Linux support may be considered in the future depending on demand.",
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
    "footer.copyright": "© 2026 SENTARO"
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
    "knives.tagline": "Sentaro стежить за кожним тікером на п'яти біржах і показує ті, що щойно зрушили — на 5-хвилинній свічці, у момент руху.",
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
    "analyzer.f4.desc": "Ранжуйте кожен тікер за зміною за 24г, обсягом, відкритим інтересом, фандингом чи волатильністю NATR, ведіть скільки завгодно списків спостереження й одним кліком завантажуйте будь-який тікер на всі відкриті графіки.",
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
    "ticks.headline": "Бачте угоди, що рухають ціну.",
    "ticks.tagline": "Кожна велика агресивна купівля й продаж на дев'яти майданчиках у момент друку — згруповані за монетою, з графіком просто над ними.",
    "ticks.f1.title": "Велика для цієї монети, а не просто велика",
    "ticks.f1.desc": "Фільтруйте за сумою в доларах, за тим, наскільки угода зрушила ціну, або порівняно зі звичайною хвилиною монети. Кожен майданчик може мати власний розмір.",
    "ticks.f2.title": "Один ордер — один рядок",
    "ticks.f2.desc": "Виконання одного ринкового ордера об'єднуються в один тік — з рухом, який він спричинив, і кількістю принтів.",
    "ticks.f3.title": "Помітьте тихого покупця",
    "ticks.f3.desc": "Пошук TWAP знаходить той самий розмір ордера, що повторюється на одному майданчику, — слід алгоритму, який виконує великий ордер без жодного великого принта.",
    "ticks.f4.title": "Розкладка на ваш смак",
    "ticks.f4.desc": "Тіки й TWAP в одній сітці або TWAP в окремій панелі, пристикованій до будь-якого краю вікна.",
    "ticks.docs": "Повна документація →",
    "terminal.label": "Експериментально",
    "terminal.headline": "Торгуйте прямо зі стакана.",
    "terminal.note": "Це proof of concept, і він може містити помилки. Вимкнений за замовчуванням, вмикається лише вами й потребує ключів тільки для торгівлі — ніколи для виведення коштів. Усі інші інструменти Sentaro працюють узагалі без ключів.",
    "terminal.docs": "Спершу прочитайте документацію →",
    
    // Customize section
    
    // Chart colors
    
    
    // FAQ
    "faq.label": "FAQ",
    "faq.title": "Поширені запитання",
    "faq.warning.title": "Попередження Windows Defender / SmartScreen",
    "faq.warning.text1": "При першому завантаженні та запуску Sentaro, <strong>Windows Defender SmartScreen може показати попередження</strong> про те, що програма нерозпізнана. Це повністю нормально і очікувано — ось чому:",
    "faq.warning.text2": "Windows SmartScreen позначає <strong>будь-яку нову програму, яка ще не здобула репутацію</strong> у Microsoft. Це не виявлення вірусу — це просто означає, що недостатньо людей завантажили файл, щоб Microsoft автоматично довіряла йому. Кожна нова незалежна програма проходить через це. Коли Sentaro набере більше завантажень, це попередження зникне саме собою.",
    "faq.warning.step1": "Натисніть <strong>\"Докладніше\"</strong> на спливаючому вікні SmartScreen",
    "faq.warning.step2": "Натисніть <strong>\"Все одно запустити\"</strong> для запуску програми",
    "faq.warning.step3": "Це трапляється тільки один раз — подальші запуски не показуватимуть попередження",
    "faq.q1": "Sentaro безкоштовний?",
    "faq.a1": "Так. Sentaro повністю безкоштовний протягом бета-періоду. Немає прихованих платежів, немає преміум-рівнів. Всі інструменти та функції доступні всім.",
    "faq.q2": "Які біржі підтримуються?",
    "faq.a2": "Sentaro наразі підтримує Bybit, Binance, Gate.io, OKX та Hyperliquid, а також Kraken spot в інструменті Ticks. Всі біржі моніторяться одночасно. Більше бірж може бути додано на основі відгуків спільноти.",
    "faq.q3": "Чи має Sentaro доступ до мого облікового запису біржі або API ключів?",
    "faq.a3": "Інструменти моніторингу — Knives, Alerts, Analyzer, Monitor та Ticks — читають лише загальнодоступні ринкові дані. Вони ніколи не запитують API ключі, не підключаються до вашого акаунта і не можуть торгувати.<br/><br/>Єдиний виняток — Terminal, експериментальний торговий інструмент, вимкнений за замовчуванням. Він працює, лише якщо ви свідомо налаштуєте його власними ключами, і потребує дозволу лише на торгівлю — Sentaro ніколи не потребує доступу до виведення коштів.",
    "faq.q4": "Чи працює він на macOS або Linux?",
    "faq.a4": "Sentaro наразі тільки для Windows. Підтримка macOS та Linux може бути розглянута в майбутньому залежно від попиту.",
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
    "footer.copyright": "© 2026 SENTARO"
  },
  ru: {
    // Navigation
    "nav.tools": "Инструменты",
    "nav.docs": "Документация",
    "nav.faq": "FAQ",
    "nav.download": "Скачать",

    // Hero
    "hero.badge": "Бета — Бесплатный доступ",
    "hero.exchanges": "Все пять сразу, в одном окне",
    "hero.more": "+ дальше больше",
    "hero.tagline": "Узнавайте о движении рынка в ту же секунду.",
    "hero.download": "Скачать для Windows",
    "hero.explore": "Смотреть инструменты →",

    // Tools section
    "tools.label": "Инструменты",
    "tools.title": "Всё в одном рабочем пространстве",
    "tools.sub": "Каждый инструмент открывается в собственном окне и настраивается отдельно. Ничего лишнего — только нужные данные, расставленные так, как удобно вам.",

    // Knives
    "knives.headline": "Больше не пропустите ни одного движения.",
    "knives.tagline": "Sentaro следит за каждым тикером на пяти биржах и показывает те, что только что сдвинулись — на 5-минутной свече, в момент движения.",
    "knives.f1.title": "Ловит то, что вручную не увидеть",
    "knives.f1.desc": "500+ тикеров на Bybit, Binance, Gate.io, OKX и Hyperliquid — все одновременно. Одно окно вместо пяти вкладок браузера.",
    "knives.f3.title": "Только те движения, что важны",
    "knives.f3.desc": "Фильтры объёма отсекают шум низкой ликвидности, так что 5% скачок на мёртвом тикере не отнимет ваше внимание.",
    "knives.f5.title": "Слышите, не глядя",
    "knives.f5.desc": "Один звук для обычного движения, другой — для большого. Пусть работает в фоне, а вы посмотрите, когда он позовёт.",
    "knives.f6.title": "Настроено под вашу торговлю",
    "knives.f6.desc": "У каждой биржи свой процент срабатывания и фильтр объёма. Держите Binance узко, а Gate.io свободно — если вы так работаете.",
    "knives.docs": "Полная документация →",

    // Alerts
    "alerts.headline": "Увидьте разрыв, пока он не закрылся.",
    "alerts.tagline": "Одна и та же монета редко стоит везде одинаково. Alerts ловит разрыв в момент его появления — и сообщает, когда что-то новое выходит на торги.",
    "alerts.f1.title": "Видите разрыв, пока он открыт",
    "alerts.f1.desc": "Цены одной монеты постоянно расходятся между биржами. Alerts показывает спред в реальном времени, а не таким, каким он был в момент оповещения.",
    "alerts.f2.title": "Будьте на месте при листинге",
    "alerts.f2.desc": "Новые листинги отмечаются в момент начала торгов, со своим звуком. Первый час бывает только раз.",
    "alerts.f3.title": "Задайте свой порог",
    "alerts.f3.desc": "Видите только разрывы выше выбранного вами процента, от 1%. Ниже — тишина.",
    "alerts.f4.title": "Игнорируйте то, чем не поторгуешь",
    "alerts.f4.desc": "Разрыв засчитывается, только если хотя бы у двух бирж за ним реальный объём — чтобы вы не гнались за цифрой на пустом стакане.",
    "alerts.docs": "Полная документация →",

    // Analyzer
    "analyzer.headline": "Все таймфреймы одновременно.",
    "analyzer.tagline": "Один тикер, до восьми графиков, на той бирже, где вы действительно торгуете. Без переключения вкладок, без потери контекста.",
    "analyzer.f1.title": "Соберите раскладку под себя",
    "analyzer.f1.desc": "До восьми графиков рядом, каждый на любом таймфрейме от 1м до 1н. Открывается на 5м, 15м, 1ч и 4ч — и запоминает, как вы его оставили.",
    "analyzer.f2.title": "Пять бирж, спот и фьючерсы",
    "analyzer.f2.desc": "Мгновенно переключайте биржу или тип рынка. Каждый график и каждое число следуют за ними, без перезагрузки.",
    "analyzer.f3.title": "Рисуйте прямо на графике",
    "analyzer.f3.desc": "Лучи, трендовые линии, прямоугольники и свободное рисование — каждый на выбранной вами клавише, с привязкой к максимумам и минимумам свечей. Рисунки сохраняются для каждого тикера и биржи.",
    "analyzer.f4.title": "Сортируйте весь рынок",
    "analyzer.f4.desc": "Ранжируйте каждый тикер по изменению за 24ч, объёму, открытому интересу, фандингу или волатильности NATR, ведите сколько угодно списков наблюдения и одним кликом загружайте любой тикер на все открытые графики.",
    "analyzer.docs": "Полная документация →",

    // Monitor
    "monitor.headline": "Весь рынок, отсортированный по движению.",
    "monitor.tagline": "Живой рейтинг волатильности. Ранжируйте каждый тикер по NATR, объёму или изменению в процентах, агрегированно по всем пяти биржам.",
    "monitor.f1.title": "Видите, что движется прямо сейчас",
    "monitor.f1.desc": "Каждый тикер ранжируется в реальном времени по волатильности, объёму или изменению цены. Таблица перестраивается вместе с рынком.",
    "monitor.f3.title": "Уберите балласт",
    "monitor.f3.desc": "Фильтры минимального объёма убирают неликвидные тикеры, так что наверху всегда то, чем действительно можно торговать.",
    "monitor.f5.title": "Решайте, какой бирже верить",
    "monitor.f5.desc": "Перетащите биржи в порядке приоритета и выберите, усреднять ли числа, брать максимум или использовать первую из них.",
    "monitor.f7.title": "Понятно с первого взгляда",
    "monitor.f7.desc": "Значения меняют цвет, когда пересекают заданные вами уровни, с опциональным звуком. Контур, заливка и цвет — всё на ваш выбор.",
    "monitor.docs": "Полная документация →",

    // Ticks
    "ticks.headline": "Видите сделки, которые двигают цену.",
    "ticks.tagline": "Каждая крупная агрессивная покупка и продажа на девяти площадках в момент печати — сгруппированы по монете, с графиком прямо над ними.",
    "ticks.f1.title": "Крупная для этой монеты, а не просто крупная",
    "ticks.f1.desc": "Фильтруйте по сумме в долларах, по тому, насколько сделка сдвинула цену, или по сравнению с обычной минутой монеты. У каждой площадки может быть свой размер.",
    "ticks.f2.title": "Один ордер — одна строка",
    "ticks.f2.desc": "Исполнения одного рыночного ордера объединяются в один тик — с движением, которое он вызвал, и количеством принтов.",
    "ticks.f3.title": "Заметьте тихого покупателя",
    "ticks.f3.desc": "Поиск TWAP находит один и тот же размер ордера, повторяющийся на одной площадке, — след алгоритма, исполняющего крупный ордер без единого крупного принта.",
    "ticks.f4.title": "Раскладка на ваш вкус",
    "ticks.f4.desc": "Тики и TWAP в одной сетке или TWAP в отдельной панели, пристыкованной к любому краю окна.",
    "ticks.docs": "Полная документация →",

    // Terminal
    "terminal.label": "Экспериментально",
    "terminal.headline": "Торгуйте прямо из стакана.",
    "terminal.note": "Это proof of concept, и в нём могут быть ошибки. Выключен по умолчанию, включается только вами и требует ключей только для торговли — никогда для вывода средств. Все остальные инструменты Sentaro работают вообще без ключей.",
    "terminal.docs": "Сначала прочитайте документацию →",

    // FAQ
    "faq.label": "FAQ",
    "faq.title": "Частые вопросы",
    "faq.warning.title": "Предупреждение Windows Defender / SmartScreen",
    "faq.warning.text1": "При первой загрузке и запуске Sentaro <strong>Windows Defender SmartScreen может показать предупреждение</strong> о том, что приложение не распознано. Это совершенно нормально и ожидаемо — вот почему:",
    "faq.warning.text2": "Windows SmartScreen помечает <strong>любое новое приложение, которое ещё не заработало репутацию</strong> у Microsoft. Это не обнаружение вируса — это просто значит, что файл скачало недостаточно людей, чтобы Microsoft автоматически ему доверял. Через это проходит каждое новое независимое приложение. Когда у Sentaro станет больше загрузок, предупреждение исчезнет само.",
    "faq.warning.step1": "Нажмите <strong>\"Подробнее\"</strong> во всплывающем окне SmartScreen",
    "faq.warning.step2": "Нажмите <strong>\"Выполнить в любом случае\"</strong>, чтобы запустить приложение",
    "faq.warning.step3": "Это происходит только один раз — при следующих запусках предупреждения не будет",
    "faq.q1": "Sentaro бесплатный?",
    "faq.a1": "Да. Sentaro полностью бесплатен на время бета-периода. Никаких скрытых платежей и премиум-уровней. Все инструменты и функции доступны всем.",
    "faq.q2": "Какие биржи поддерживаются?",
    "faq.a2": "Sentaro сейчас поддерживает Bybit, Binance, Gate.io, OKX и Hyperliquid, а также Kraken spot в инструменте Ticks. Все биржи отслеживаются одновременно. Новые биржи могут появиться по отзывам сообщества.",
    "faq.q3": "Есть ли у Sentaro доступ к моему аккаунту на бирже или API-ключам?",
    "faq.a3": "Инструменты мониторинга — Knives, Alerts, Analyzer, Monitor и Ticks — читают только общедоступные рыночные данные. Они никогда не запрашивают API-ключи, не подключаются к вашему аккаунту и не могут торговать.<br/><br/>Единственное исключение — Terminal, экспериментальный торговый инструмент, выключенный по умолчанию. Он работает, только если вы сознательно настроите его своими ключами, и требует разрешения только на торговлю — Sentaro никогда не нужен доступ к выводу средств.",
    "faq.q4": "Работает ли он на macOS или Linux?",
    "faq.a4": "Sentaro пока только для Windows. Поддержка macOS и Linux может появиться в будущем в зависимости от спроса.",
    "faq.q5": "Как сообщить об ошибке или предложить функцию?",
    "faq.a5": "Присоединяйтесь к группе в Telegram — это самый быстрый способ сообщить о проблеме, предложить функцию и получить прямой ответ.",

    // CTA section
    "cta.text": "Готовы попробовать?",
    "cta.download": "Скачать для Windows",

    // Telegram section
    "telegram.text1": "Присоединяйтесь ради новостей и обратной связи",
    "telegram.text2": "Обновления, запросы функций и прямая связь",
    "telegram.button": "Telegram",

    // Footer
    "footer.tools": "Инструменты",
    "footer.telegram": "Telegram",
    "footer.copyright": "© 2026 SENTARO"
  }
};

// Current language
let currentLang = localStorage.getItem('sentaro-lang') || 'en';

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
  // en/, uk/ and ru/ trees, so only the locale segment of the path changes.
  document.querySelectorAll('a[data-manual]').forEach(a => {
    const href = a.getAttribute('href');
    if (href) a.setAttribute('href', href.replace(/\/manual\/(?:en|uk|ru)\//, '/manual/' + lang + '/'));
  });

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Save to localStorage
  localStorage.setItem('sentaro-lang', lang);
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
