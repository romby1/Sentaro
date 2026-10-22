# Getting started

Sentaro is a crypto monitoring workspace. It reads publicly available market
data from Bybit, Binance, Gate.io, OKX and Hyperliquid (plus Kraken spot in
[Ticks](/en/tools/ticks)) and presents it through a set of purpose-built tools.

You can use it two ways, with the same account and the same tools:

| | Web app | Windows app |
| --- | --- | --- |
| Where | [app.sentaro.trade](https://app.sentaro.trade/) in any browser | Downloaded from [sentaro.trade](https://sentaro.trade/) |
| Systems | Windows, macOS, Linux | Windows only |
| Install | Nothing to install | One installer, updates itself |
| Layout | One tool on screen at a time, switched from the top bar | Each tool in its own window, arranged freely |
| [Terminal](/en/tools/terminal) | Not available | Available (experimental) |

You can use either, or both at once. Your settings are kept separately by each:
the web app stores them in your browser, the Windows app on your computer.

## Account

Sentaro uses an email and password account. Signing up sends a 6-digit
verification code to your email; enter it to confirm the address, then sign in.
You'll also need to accept the Terms of Service during sign-up.

Access is free for everyone while Sentaro is in beta. Your status reads
**Beta test**: in the web app's account menu (the round button at the top
right), and in the Windows app's **Home** tab, along with your email and the
installed app version. In the Windows app your email is masked by default —
click the eye icon next to it to reveal it.

::: tip Sentaro never touches your exchange accounts
Every monitoring tool reads public market data only. Sentaro does not ask for
exchange API keys, does not connect to your exchange account, and cannot place
trades on any of the exchanges it monitors.

The one exception is the experimental [Terminal](/en/tools/terminal) in the
Windows app, a separate opt-in tool that connects to Hyperliquid, Binance or
Bybit with credentials you provide. It does nothing unless you deliberately set
it up.
:::

## The web app

<Screenshot src="web-monitor" alt="The Sentaro web app showing Monitor" caption="The web app — Monitor open, the tool's toolbar under the top bar" />

Open [app.sentaro.trade](https://app.sentaro.trade/) and sign in.

### Top bar

- **Tools** — Knives, Spreads, Analyzer, Monitor and Ticks. Click one to switch.
  The web app remembers the last tool you had open.
- **Search** (<kbd>Ctrl</kbd> <kbd>K</kbd>) — open a tool, a tool's settings, the
  general settings or this manual by typing its name.
- **Settings** (the sliders icon) — the general settings: language, accent
  color, charts, drawing, and [new-listing pop-ups](#new-listing-pop-ups).
- **Help** — links to this manual.
- **Account** — your email, your beta status, and **Sign out**.

### Tool toolbar

Under the top bar each tool has its own toolbar. The chips in it are **quick
filters**: each shows a setting in force (for example `Spread ≥ 1%` or `1m chart`)
and opens a small popover to change it in place. The icon at the right end opens
that tool's full settings in a side panel. Changes apply at once.

### One tab per tool

Each tool streams from Sentaro's servers, and one account can have each tool
open in one place at a time. If you open the same tool in another browser tab or
on another device, the first one says the tool *was opened in another tab or on
another device*, with a **Use here** button to take it back.

### Drawing in fullscreen

The fullscreen chart in Knives, Monitor and Spreads has the drawing tools:
horizontal ray, trend line, rectangle, pencil and dissolving pencil, plus the
magnet. They use the same shortcuts as the Windows app (see
[Charts & drawing](/en/customize/chart-colors)). Drawings are saved in your
browser, per coin and exchange, and show on that coin's card charts too.

## The Windows app

### Install

1. Download the installer with the **Download for Windows** button on
   [sentaro.trade](https://sentaro.trade/).
2. Run the `.exe`.

#### The SmartScreen warning

On first download and run, **Windows Defender SmartScreen may warn that the app
is unrecognized**. This is expected and is not a virus detection.

SmartScreen flags any new application that has not yet built up a reputation
with Microsoft — it simply means not enough people have downloaded the file yet
for it to be trusted automatically. Every new indie app goes through this, and
the warning disappears on its own as the download count grows.

To get past it:

1. Click **More info** on the SmartScreen popup.
2. Click **Run anyway**.
3. This only happens once — later launches won't show the warning.

### First run

On launch Sentaro checks for updates before anything else, then asks you to sign
in.

### The workspace

<Screenshot src="workspace" alt="The full Sentaro workspace with several tool windows open" caption="A Sentaro workspace — several tool windows arranged around the main window" />

The Windows app is built around one small **main window** plus one window per
tool.

The main window's left edge is a vertical tab bar:

| Tab | What it holds |
| --- | --- |
| Home | Account, language, accent color, chart and drawing settings, new-listing pop-ups |
| Knives | [Knives](/en/tools/knives) settings + its **Open Window** button |
| Spreads | [Spreads](/en/tools/spreads) settings + its **Open Window** button |
| Analyzer | [Analyzer](/en/tools/analyzer) notices + its **Open Window** button |
| Monitor | [Monitor](/en/tools/monitor) settings + its **Open Window** button |
| Terminal | [Terminal](/en/tools/terminal) settings + its **Open Window** button |
| Ticks | [Ticks](/en/tools/ticks) settings + its **Open Window** button |

Every tool works the same way: **its settings live in the main window, and the
tool itself opens as a separate window.** Click **Open Window** in a tool's tab
to launch it. While that window is open the button reads **Already Open** and is
inert — each tool is limited to one window at a time.

Because each tool is an independent window, you can size and position them
freely to build the layout you want, and leave the main window tucked away.

Changes to settings apply live — the open tool window picks them up without a
restart. Settings are written to disk automatically as you change them.

#### Titlebar

Tool windows use Sentaro's own titlebar rather than the Windows one. It shows
`SENTARO` and the active tool name on the left, and minimize / maximize / close
on the right. Drag anywhere on the empty part of the bar to move the window.

### Updates

The Windows app updates itself. On every launch it checks for a new version
before showing the sign-in screen; if one exists it downloads, installs and
restarts automatically. You'll see `Checking for updates...` and then
`Updating to v<version>...` on the loading screen while this happens.

There is nothing to do manually. The installed version is shown in the **Home**
tab as **App Version**. The web app is always the latest version.

## New-listing pop-ups

When a coin starts trading on one of the monitored exchanges, a pop-up appears
with the exchange and the symbol, whichever tool you have open:

- **Web app** — in the bottom-right corner of the page, while the Sentaro tab
  is the one on screen. A listing that arrives while the tab is in the
  background is not shown later.
- **Windows app** — in the bottom-right corner of your screen, above other
  windows, even when Sentaro is in the background.

**Copy** puts the symbol on your clipboard. A pop-up stays for 20 seconds, and
for as long as your pointer is on it; **×** closes it. Up to four show at once —
a fifth replaces the oldest.

A coin is announced once per exchange per day, so a symbol an exchange briefly
drops and relists does not come back as new. Pop-ups are live only: there is no
history of past listings.

Settings, under **New listings** in the general settings (web) or the **Home**
tab (Windows):

- **Listing alert sound** — plays a sound with each pop-up. On by default.
- **Test pop-up** — **Send test** shows a sample pop-up for SOLUSDT on Bybit,
  sent through the server, so you can check that pop-ups and sound work.

## Sounds

Every alert has its own sound, so you can tell what happened without looking:

| Sound | Plays when |
| --- | --- |
| Rise | [Knives](/en/tools/knives): a coin passes your % threshold |
| Chime | Knives: a coin passes the high threshold |
| Duo pluck | [Monitor](/en/tools/monitor): NATR or % change threshold met; [Spreads](/en/tools/spreads): a new spread opens |
| Blip | [Ticks](/en/tools/ticks): a big trade |
| Fall | Ticks: a liquidation |
| Ding-dong | A [new-listing pop-up](#new-listing-pop-ups) |

Each one is switched on or off in its tool's settings. A browser plays sound
only after you have clicked somewhere on the page once.

## Language

Sentaro's interface is available in English, Українська and Русский. Switch it
in the general settings (web) or the **Home** tab (Windows), at the top. This
setting is independent of the language you're reading this manual in.

## Accent color

In the general settings (web) or the **Home** tab (Windows), the row of color
swatches sets the app-wide accent color: Amber (the default), Green, Blue,
Purple, Red, Teal, Pink and White. It applies across every tool.

This is separate from candle and metric colors — see
[Charts & drawing](/en/customize/chart-colors) for those.

## Error messages

When something goes wrong — a feed disconnects, a window fails to open, saved
settings can't be loaded — a short message appears in the bottom-right corner.
It disappears on its own after a few seconds, or click **×** to dismiss it. The
same message is not repeated more than once every 15 seconds, so a connection
that keeps retrying won't flood the screen.

If an error keeps coming back, report it in the
[Telegram group](https://t.me/sentaro_trade) with the exact text.

## Getting help

Bug reports and feature requests go to the
[Telegram group](https://t.me/sentaro_trade) — it's the fastest way to get a
direct response.
