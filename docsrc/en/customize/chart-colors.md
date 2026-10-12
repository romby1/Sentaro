# Charts & drawing

These settings live in the **Home** tab of the main window, under the **Charts**
section. They are global: every chart in every tool — Knives, Alerts, Analyzer,
Monitor, Ticks, Terminal — uses them.

<Screenshot src="charts-colors" alt="The Charts settings section in the Home tab" caption="Home → Charts" />

## The color picker

Every color in Sentaro — here, in Monitor's metric colors, and in Terminal's
appearance — opens the same picker:

- A **saturation / value** square, with a **hue** slider under it.
- An **opacity** slider. Every color in the app can be made translucent.
- A **hex field** accepting 3, 4, 6 or 8 digits (`#f00`, `#f00a`, `#ff0000`,
  `#ff0000aa`), and a percentage readout of the current opacity.

The swatch that opens the picker is drawn over a checkerboard, so a translucent
color is obvious without opening it.

::: info Where the opacity is stored
In most places — candle colors, the drawing color, and every Monitor metric
color — **opacity is part of the hex value**. At full opacity you get a normal
6-digit hex; drop below 100% and it becomes 8-digit `#rrggbbaa`.

Terminal's grouped appearance colors are the exception: there the color and its
opacity are stored as two separate values, which is why that panel shows a
percentage next to each entry.
:::

## Candle colors

| Setting | What it does | Default |
| --- | --- | --- |
| **Bullish candle** | Color of candles that closed up | `#9D9D9D`, fully opaque |
| **Bearish candle** | Color of candles that closed down | `#4A4A4A`, fully opaque |

Both open a color picker. The change applies to every chart in the app at once,
so a candle scheme you pick here follows you from a Knives thumbnail to a
fullscreen Analyzer panel.

The defaults are deliberately neutral greys rather than green/red — the intent is
that color in the interface means "something crossed a threshold" rather than
"price went up". If you'd rather have conventional green/red candles, set them
here.

## Volume histogram

Every candlestick chart can show a **volume histogram**: one bar per candle along the bottom
of the chart, coloured by the candle's direction. Hover a bar to read its value.
Volume is shown in the unit the exchange reports (coins or contracts), not in USD.

| Setting | What it does | Default |
| --- | --- | --- |
| **Volume up color** | Bar colour for candles that closed up | `#5eaf82` at 50% opacity |
| **Volume down color** | Bar colour for candles that closed down | `#d47c7c` at 50% opacity |
| **Volume histogram key** | Toggles the histogram | <kbd>V</kbd> |

It is **on by default** everywhere. There are two kinds of switch:

- **Per tool** — the **Vol Ind** button in the titlebar of Knives, Monitor, Ticks
  and Terminal, and **Vol** in Analyzer. It turns the histogram on or off for
  every chart in that window.
- **Fullscreen** — one shared switch for every fullscreen chart, in every tool.

The <kbd>V</kbd> key flips whichever applies: the window's own switch normally,
or the fullscreen switch while a fullscreen chart is open.

## Chart grid

**Chart grid** turns the background grid lines — horizontal and vertical — on or
off on every chart. On by default.

## Drawing color

| Setting | What it does | Default |
| --- | --- | --- |
| **Drawing color** | Color used by all five drawing tools | Falls back to your accent color |

One color covers every drawing tool. If you have never changed it, it follows
the accent color you picked in the Home tab; once you set it explicitly it stops
tracking the accent and stays where you put it.

## Drawing tools

Charts in the [Analyzer](/en/tools/analyzer) and in fullscreen chart views
support five drawing tools. Each is bound to a single key, and each binding is
editable here.

| Tool | What it draws | Default key |
| --- | --- | --- |
| **Horizontal ray key** | A horizontal ray at a chosen price | <kbd>H</kbd> |
| **Trend line key** | A two-point trend line | <kbd>T</kbd> |
| **Rectangle key** | A rectangle / box region | <kbd>B</kbd> |
| **Pencil key** | Freehand drawing | <kbd>P</kbd> |
| **Dissolving pencil key** | Freehand drawing that fades away on its own | <kbd>F</kbd> |
| **Majors overlay key** | Shows/hides the [majors overlay](/en/customize/majors) on the chart under the pointer | <kbd>M</kbd> |
| **Volume histogram key** | Shows/hides the [volume histogram](#volume-histogram) | <kbd>V</kbd> |

To rebind one, click the key button next to it — it switches to `Press a key…` —
then press the key you want. Press <kbd>Esc</kbd> to cancel without changing it.

A few rules the capture enforces:

- Only letters and digits are accepted for the five drawing tools.
- Modifier combinations are rejected — pressing <kbd>Ctrl</kbd>+<kbd>H</kbd>
  does nothing, the binding must be a bare key.
- Bindings must be unique. If you pick a key that is already assigned to another
  tool, the capture is dismissed and nothing changes.

Bindings are stored as physical key positions rather than characters, so they
keep working if you switch keyboard layout or type in another language.

Drawings are saved per symbol *and* per exchange, so switching a chart from
Bybit to Binance for the same ticker shows a different set of drawings.

## Magnet

Magnet snaps the point you are drawing to the nearest candle high or low, so
rays and trend lines land exactly on a wick instead of near it.

| Setting | What it does | Default |
| --- | --- | --- |
| **Magnet** mode | `Hold` or `Toggle` | `Hold` |
| **Magnet** key | Key that activates it | <kbd>Ctrl</kbd> (left) |

The two modes:

- **Hold** — magnet is active only while the key is held down. Momentary.
- **Toggle** — pressing the key switches magnet on, pressing it again switches
  it off. The on/off state persists across restarts.

Unlike the drawing tools, the magnet key **may** be a bare modifier —
<kbd>Ctrl</kbd>, <kbd>Shift</kbd>, <kbd>Alt</kbd> or <kbd>Meta</kbd> — as well
as a letter or digit. The default is left <kbd>Ctrl</kbd>. The same
no-duplicates rule applies against the five drawing keys.

## What is *not* here

Colors that indicate a metric crossing a threshold are configured per tool, not
globally, because the thresholds themselves are per tool:

- Monitor's NATR and % change level colors, outlines and background fills →
  [Monitor → Metric colors](/en/tools/monitor#metric-colors)
- Terminal's ladder, depth-bar and position colors →
  [Terminal → Appearance](/en/tools/terminal#appearance)
