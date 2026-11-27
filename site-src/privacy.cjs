// The Privacy Policy, in English, Ukrainian and Russian: build.cjs makes
// docs/privacy.html from it. Each language is plain HTML (h2, p, ul).
// Keep it true to what the app and the server do; when either changes what
// it collects, change this and UPDATED.
//
// No long dashes in the text (house style): "-" or a comma.

const UPDATED = { en: '27 November 2026', uk: '27 листопада 2026', ru: '27 ноября 2026' };
const TG = '<a href="https://t.me/sentaro_trade" target="_blank" rel="noopener">@sentaro_trade</a>';

const en = `
<h1>Privacy Policy</h1>
<p class="updated">Last updated: ${UPDATED.en}</p>
<p>This policy explains what data Sentaro (the web app at app.sentaro.trade, the desktop app and the servers behind them, "we") collects, why, who processes it for us and what you can do about it. Questions and requests: Telegram ${TG}.</p>

<h2>1. What we collect</h2>
<h3>Your account</h3>
<ul>
<li><b>Email address and password.</b> Used to sign you in, confirm your email and reset the password. Passwords are stored only as a hash by our authentication provider (Supabase); we never see them.</li>
<li><b>Subscription.</b> Your plan, its status and expiry date, and the payment records for it: order number, plan, amount and payment status.</li>
<li><b>Settings.</b> Your tool settings, watchlists, blacklists, muted coins and layout are saved to your account so they follow you between devices.</li>
<li><b>Alerts and Telegram.</b> The price and other alert rules you create are stored on our server. If you link Telegram for alerts, we store your Telegram chat ID and your notification preferences.</li>
</ul>
<h3>Payments</h3>
<p>Subscriptions are paid in cryptocurrency through NOWPayments. We receive the order, the amount and whether it was paid. The payment itself, including any wallet addresses, is handled by NOWPayments under its own privacy policy.</p>
<h3>Usage analytics</h3>
<p>To understand which features are used and to improve them, we record product events with PostHog, an analytics provider whose servers are in the European Union:</p>
<ul>
<li>visits to the sign-in page, account creation, email confirmation and the steps of choosing and paying for a plan, with the page that referred you and any campaign tags in the link;</li>
<li>the app being opened, which tools you open and use together, your interface language, and whether you use the web or the desktop app;</li>
<li>from our servers: when your app connects to a tool (for example Monitor or Spreads), and how many accounts are connected at a time.</li>
</ul>
<p>Before you sign in, these events are anonymous. After you sign in they are linked to a pseudonymous identifier, a SHA-256 hash of your account ID, never to your email or name. PostHog uses your IP address to estimate your country and city. We do not record your screen or sessions, do not capture what you type, and do not use advertising or tracking cookies. To reach PostHog reliably, analytics requests from the app go through our own server (api.cryptowarden.xyz), which passes them on without storing them.</p>
<h3>Server logs</h3>
<p>Our servers keep technical logs to run the service and protect it from abuse: IP addresses, the addresses requested, browser or app version and times, and, in the logs of the data connections, the email of the account that connected. These logs are deleted after 7 days.</p>
<h3>What stays on your device</h3>
<ul>
<li>Your sign-in session and a local copy of your settings are kept in your browser's or the app's local storage.</li>
<li>In the desktop app, if you connect an exchange or Hyperliquid account to trade, its API keys or private key are kept in your operating system's credential store (Windows Credential Manager or macOS Keychain). They are used on your device to sign your orders and are <b>never sent to us</b>.</li>
</ul>
<h3>Exchanges</h3>
<p>Charts, order books and other market data are loaded by the app directly from the exchanges (such as Binance, Bybit, OKX, Gate, Hyperliquid, Aster and KuCoin). These requests come from your device, so the exchanges see your IP address under their own privacy policies. Orders you place in the desktop app go directly from your device to the exchange.</p>

<h2>2. Why we use it</h2>
<ul>
<li>to provide the service you signed up for: your account, subscription, settings, alerts and data feeds;</li>
<li>to handle payments and keep the records we need for them;</li>
<li>to keep the service secure and working, and to investigate problems;</li>
<li>to understand how the app is used and improve it (analytics, on our legitimate interest; you can object, see section 5).</li>
</ul>
<p>We do not sell your data, use it for advertising or share it with anyone except the providers below.</p>

<h2>3. Who processes it for us</h2>
<ul>
<li><b>Supabase</b>: authentication and the account database (email, subscription, settings).</li>
<li><b>OVHcloud</b>: the servers that run our data feeds, alerts and the analytics relay (Singapore).</li>
<li><b>PostHog</b>: product analytics (European Union).</li>
<li><b>NOWPayments</b>: subscription payments.</li>
<li><b>Telegram</b>: alert messages, only if you link it.</li>
</ul>
<p>Some of these providers store data outside your country. Each processes the data only to provide its service to us.</p>

<h2>4. How long we keep it</h2>
<ul>
<li>Account, settings and alerts: until you delete your account or ask us to.</li>
<li>Payment records: as long as we need them for accounting and to resolve disputes.</li>
<li>Server logs: 7 days.</li>
<li>Analytics: while they are useful for improving the product; deleted with your account on request.</li>
</ul>

<h2>5. Your rights</h2>
<p>You can ask us to give you a copy of your data, correct it, delete your account and its data, or exclude you from analytics. Write to Telegram ${TG} from the account you use, or tell us the email of your Sentaro account, and we will answer within 30 days. Depending on where you live you may also have the right to complain to your data protection authority.</p>

<h2>6. Security</h2>
<p>Connections to our servers are encrypted (HTTPS and secure WebSockets), passwords are stored hashed, and access to our servers is restricted. No system is perfectly secure, but we take reasonable measures to protect your data.</p>

<h2>7. Children</h2>
<p>Sentaro is a trading tool for adults and is not intended for anyone under 18.</p>

<h2>8. Changes</h2>
<p>When we change what we collect or how we use it, we update this page and its date. For significant changes we will also announce them in our Telegram channel.</p>
`;

const uk = `
<h1>Політика конфіденційності</h1>
<p class="updated">Оновлено: ${UPDATED.uk}</p>
<p>Ця політика пояснює, які дані збирає Sentaro (веб-застосунок app.sentaro.trade, десктопний застосунок і сервери, на яких вони працюють, далі «ми»), навіщо, хто обробляє їх для нас і що ви можете з цим зробити. Питання і запити: Telegram ${TG}.</p>

<h2>1. Що ми збираємо</h2>
<h3>Ваш акаунт</h3>
<ul>
<li><b>Email і пароль.</b> Потрібні для входу, підтвердження email і скидання пароля. Пароль зберігається лише у вигляді хешу в нашого провайдера автентифікації (Supabase), ми його не бачимо.</li>
<li><b>Підписка.</b> Ваш план, його статус і дата закінчення, а також записи про оплату: номер замовлення, план, сума і статус платежу.</li>
<li><b>Налаштування.</b> Налаштування інструментів, списки монет, чорні списки, приглушені монети і розкладка зберігаються у вашому акаунті, щоб бути однаковими на всіх пристроях.</li>
<li><b>Алерти і Telegram.</b> Правила цінових та інших алертів, які ви створюєте, зберігаються на нашому сервері. Якщо ви підключаєте Telegram для алертів, ми зберігаємо ID вашого чату в Telegram і налаштування сповіщень.</li>
</ul>
<h3>Оплата</h3>
<p>Підписка оплачується криптовалютою через NOWPayments. Ми отримуємо замовлення, суму і те, чи його оплачено. Сам платіж, зокрема адреси гаманців, обробляє NOWPayments за власною політикою конфіденційності.</p>
<h3>Аналітика використання</h3>
<p>Щоб розуміти, якими функціями користуються, і покращувати їх, ми записуємо події продукту в PostHog, сервіс аналітики із серверами в Європейському Союзі:</p>
<ul>
<li>відвідування сторінки входу, створення акаунта, підтвердження email і кроки вибору та оплати плану, разом зі сторінкою, з якої ви прийшли, і мітками кампанії в посиланні;</li>
<li>відкриття застосунку, які інструменти ви відкриваєте і використовуєте разом, мова інтерфейсу, і чи ви користуєтесь вебом або десктопом;</li>
<li>з наших серверів: коли ваш застосунок підключається до інструмента (наприклад, Монітора чи Спредів), і скільки акаунтів підключено одночасно.</li>
</ul>
<p>До входу в акаунт ці події анонімні. Після входу вони прив'язуються до псевдонімного ідентифікатора, SHA-256 хешу ID вашого акаунта, і ніколи до email чи імені. PostHog використовує вашу IP-адресу, щоб визначити країну і місто. Ми не записуємо екран чи сесії, не збираємо те, що ви вводите, і не використовуємо рекламні чи відстежувальні cookie. Щоб аналітика надійно доходила до PostHog, запити застосунку йдуть через наш сервер (api.cryptowarden.xyz), який передає їх далі, не зберігаючи.</p>
<h3>Логи серверів</h3>
<p>Наші сервери ведуть технічні логи, щоб сервіс працював і був захищений від зловживань: IP-адреси, запитані адреси, версія браузера чи застосунку і час, а в логах підключень до даних також email акаунта, що підключився. Ці логи видаляються через 7 днів.</p>
<h3>Що лишається на вашому пристрої</h3>
<ul>
<li>Сесія входу і локальна копія налаштувань зберігаються в локальному сховищі браузера або застосунку.</li>
<li>Якщо в десктопному застосунку ви підключаєте акаунт біржі чи Hyperliquid для торгівлі, його API-ключі або приватний ключ зберігаються в системному сховищі облікових даних (Windows Credential Manager або macOS Keychain). Вони використовуються на вашому пристрої для підпису ордерів і <b>ніколи не надсилаються нам</b>.</li>
</ul>
<h3>Біржі</h3>
<p>Графіки, стакани та інші ринкові дані застосунок завантажує напряму з бірж (зокрема Binance, Bybit, OKX, Gate, Hyperliquid, Aster і KuCoin). Ці запити йдуть з вашого пристрою, тож біржі бачать вашу IP-адресу відповідно до своїх політик конфіденційності. Ордери, які ви ставите в десктопному застосунку, йдуть з вашого пристрою напряму на біржу.</p>

<h2>2. Навіщо ми їх використовуємо</h2>
<ul>
<li>щоб надавати сервіс, на який ви підписались: акаунт, підписку, налаштування, алерти і потоки даних;</li>
<li>щоб приймати оплату і вести потрібні для цього записи;</li>
<li>щоб сервіс був захищеним і працював, і щоб розбиратися з проблемами;</li>
<li>щоб розуміти, як користуються застосунком, і покращувати його (аналітика, на підставі нашого законного інтересу; ви можете заперечити, див. розділ 5).</li>
</ul>
<p>Ми не продаємо ваші дані, не використовуємо їх для реклами і не передаємо нікому, крім провайдерів нижче.</p>

<h2>3. Хто обробляє дані для нас</h2>
<ul>
<li><b>Supabase</b>: автентифікація і база акаунтів (email, підписка, налаштування).</li>
<li><b>OVHcloud</b>: сервери потоків даних, алертів і ретранслятора аналітики (Сінгапур).</li>
<li><b>PostHog</b>: аналітика продукту (Європейський Союз).</li>
<li><b>NOWPayments</b>: оплата підписки.</li>
<li><b>Telegram</b>: повідомлення з алертами, лише якщо ви його підключили.</li>
</ul>
<p>Частина цих провайдерів зберігає дані за межами вашої країни. Кожен обробляє їх лише для того, щоб надавати нам свій сервіс.</p>

<h2>4. Скільки ми зберігаємо дані</h2>
<ul>
<li>Акаунт, налаштування і алерти: доки ви не видалите акаунт або не попросите нас про це.</li>
<li>Записи про оплату: стільки, скільки потрібно для обліку і вирішення спорів.</li>
<li>Логи серверів: 7 днів.</li>
<li>Аналітика: доки вона корисна для покращення продукту; на запит видаляється разом з акаунтом.</li>
</ul>

<h2>5. Ваші права</h2>
<p>Ви можете попросити нас надати копію ваших даних, виправити їх, видалити акаунт разом із даними або виключити вас з аналітики. Напишіть у Telegram ${TG} з акаунта, яким користуєтесь, або вкажіть email вашого акаунта Sentaro, і ми відповімо протягом 30 днів. Залежно від країни проживання ви також можете мати право поскаржитися до органу із захисту даних.</p>

<h2>6. Безпека</h2>
<p>З'єднання з нашими серверами шифруються (HTTPS і захищені WebSocket), паролі зберігаються у вигляді хешу, доступ до серверів обмежено. Жодна система не захищена ідеально, але ми вживаємо розумних заходів, щоб захистити ваші дані.</p>

<h2>7. Діти</h2>
<p>Sentaro це інструмент для трейдингу для дорослих, і він не призначений для осіб, молодших за 18 років.</p>

<h2>8. Зміни</h2>
<p>Коли ми змінюємо, що збираємо або як це використовуємо, ми оновлюємо цю сторінку і її дату. Про суттєві зміни ми також повідомимо в нашому Telegram-каналі.</p>
`;

const ru = `
<h1>Политика конфиденциальности</h1>
<p class="updated">Обновлено: ${UPDATED.ru}</p>
<p>Эта политика объясняет, какие данные собирает Sentaro (веб-приложение app.sentaro.trade, десктопное приложение и серверы, на которых они работают, далее «мы»), зачем, кто обрабатывает их для нас и что вы можете с этим сделать. Вопросы и запросы: Telegram ${TG}.</p>

<h2>1. Что мы собираем</h2>
<h3>Ваш аккаунт</h3>
<ul>
<li><b>Email и пароль.</b> Нужны для входа, подтверждения email и сброса пароля. Пароль хранится только в виде хеша у нашего провайдера аутентификации (Supabase), мы его не видим.</li>
<li><b>Подписка.</b> Ваш план, его статус и дата окончания, а также записи об оплате: номер заказа, план, сумма и статус платежа.</li>
<li><b>Настройки.</b> Настройки инструментов, списки монет, черные списки, заглушенные монеты и раскладка хранятся в вашем аккаунте, чтобы быть одинаковыми на всех устройствах.</li>
<li><b>Алерты и Telegram.</b> Правила ценовых и других алертов, которые вы создаете, хранятся на нашем сервере. Если вы подключаете Telegram для алертов, мы храним ID вашего чата в Telegram и настройки уведомлений.</li>
</ul>
<h3>Оплата</h3>
<p>Подписка оплачивается криптовалютой через NOWPayments. Мы получаем заказ, сумму и то, оплачен ли он. Сам платеж, в том числе адреса кошельков, обрабатывает NOWPayments по собственной политике конфиденциальности.</p>
<h3>Аналитика использования</h3>
<p>Чтобы понимать, какими функциями пользуются, и улучшать их, мы записываем события продукта в PostHog, сервис аналитики с серверами в Европейском союзе:</p>
<ul>
<li>посещения страницы входа, создание аккаунта, подтверждение email и шаги выбора и оплаты плана, вместе со страницей, с которой вы пришли, и метками кампании в ссылке;</li>
<li>открытие приложения, какие инструменты вы открываете и используете вместе, язык интерфейса, и пользуетесь ли вы вебом или десктопом;</li>
<li>с наших серверов: когда ваше приложение подключается к инструменту (например, Монитору или Спредам), и сколько аккаунтов подключено одновременно.</li>
</ul>
<p>До входа в аккаунт эти события анонимны. После входа они привязываются к псевдонимному идентификатору, SHA-256 хешу ID вашего аккаунта, и никогда к email или имени. PostHog использует ваш IP-адрес, чтобы определить страну и город. Мы не записываем экран или сессии, не собираем то, что вы вводите, и не используем рекламные или отслеживающие cookie. Чтобы аналитика надежно доходила до PostHog, запросы приложения идут через наш сервер (api.cryptowarden.xyz), который передает их дальше, не сохраняя.</p>
<h3>Логи серверов</h3>
<p>Наши серверы ведут технические логи, чтобы сервис работал и был защищен от злоупотреблений: IP-адреса, запрошенные адреса, версия браузера или приложения и время, а в логах подключений к данным также email подключившегося аккаунта. Эти логи удаляются через 7 дней.</p>
<h3>Что остается на вашем устройстве</h3>
<ul>
<li>Сессия входа и локальная копия настроек хранятся в локальном хранилище браузера или приложения.</li>
<li>Если в десктопном приложении вы подключаете аккаунт биржи или Hyperliquid для торговли, его API-ключи или приватный ключ хранятся в системном хранилище учетных данных (Windows Credential Manager или macOS Keychain). Они используются на вашем устройстве для подписи ордеров и <b>никогда не отправляются нам</b>.</li>
</ul>
<h3>Биржи</h3>
<p>Графики, стаканы и другие рыночные данные приложение загружает напрямую с бирж (в том числе Binance, Bybit, OKX, Gate, Hyperliquid, Aster и KuCoin). Эти запросы идут с вашего устройства, поэтому биржи видят ваш IP-адрес согласно своим политикам конфиденциальности. Ордера, которые вы ставите в десктопном приложении, идут с вашего устройства напрямую на биржу.</p>

<h2>2. Зачем мы их используем</h2>
<ul>
<li>чтобы предоставлять сервис, на который вы подписались: аккаунт, подписку, настройки, алерты и потоки данных;</li>
<li>чтобы принимать оплату и вести нужные для этого записи;</li>
<li>чтобы сервис был защищен и работал, и чтобы разбираться с проблемами;</li>
<li>чтобы понимать, как пользуются приложением, и улучшать его (аналитика, на основании нашего законного интереса; вы можете возразить, см. раздел 5).</li>
</ul>
<p>Мы не продаем ваши данные, не используем их для рекламы и не передаем никому, кроме провайдеров ниже.</p>

<h2>3. Кто обрабатывает данные для нас</h2>
<ul>
<li><b>Supabase</b>: аутентификация и база аккаунтов (email, подписка, настройки).</li>
<li><b>OVHcloud</b>: серверы потоков данных, алертов и ретранслятора аналитики (Сингапур).</li>
<li><b>PostHog</b>: аналитика продукта (Европейский союз).</li>
<li><b>NOWPayments</b>: оплата подписки.</li>
<li><b>Telegram</b>: сообщения с алертами, только если вы его подключили.</li>
</ul>
<p>Часть этих провайдеров хранит данные за пределами вашей страны. Каждый обрабатывает их только для того, чтобы предоставлять нам свой сервис.</p>

<h2>4. Сколько мы храним данные</h2>
<ul>
<li>Аккаунт, настройки и алерты: пока вы не удалите аккаунт или не попросите нас об этом.</li>
<li>Записи об оплате: столько, сколько нужно для учета и решения споров.</li>
<li>Логи серверов: 7 дней.</li>
<li>Аналитика: пока она полезна для улучшения продукта; по запросу удаляется вместе с аккаунтом.</li>
</ul>

<h2>5. Ваши права</h2>
<p>Вы можете попросить нас предоставить копию ваших данных, исправить их, удалить аккаунт вместе с данными или исключить вас из аналитики. Напишите в Telegram ${TG} с аккаунта, которым пользуетесь, или укажите email вашего аккаунта Sentaro, и мы ответим в течение 30 дней. В зависимости от страны проживания у вас также может быть право пожаловаться в орган по защите данных.</p>

<h2>6. Безопасность</h2>
<p>Соединения с нашими серверами шифруются (HTTPS и защищенные WebSocket), пароли хранятся в виде хеша, доступ к серверам ограничен. Ни одна система не защищена идеально, но мы принимаем разумные меры, чтобы защитить ваши данные.</p>

<h2>7. Дети</h2>
<p>Sentaro это инструмент для трейдинга для взрослых, и он не предназначен для лиц младше 18 лет.</p>

<h2>8. Изменения</h2>
<p>Когда мы меняем, что собираем или как это используем, мы обновляем эту страницу и ее дату. О существенных изменениях мы также сообщим в нашем Telegram-канале.</p>
`;

module.exports = { en, uk, ru };
