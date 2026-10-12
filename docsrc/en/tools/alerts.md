# Alerts

Alerts watches for two things at once and shows them in a single feed:

1. **Price deviation** — the same asset priced differently on different
   exchanges right now.
2. **New listings** — a token that just started trading on a monitored
   exchange.

<Screenshot src="alerts" alt="The Alerts window with two deviation cards, one dimmed, and the liquidation tape docked right" caption="The Alerts window — the second card is dimmed; the liquidation tape is docked right" />

## Reading the window

### Titlebar

The titlebar summarises the settings in force: the chart timeframe, the
**Decorrelation** threshold, **Max Age**, **Max Spread** (when set) and, when the
volume filter is on, **Min 24h Vol**.

### Order

Cards are ordered newest first, by **when the spread opened**. A card keeps its
position as its numbers update, so the feed does not reshuffle under you while
you're reading it.

### A deviation card

- **Symbol** — click to copy it to your clipboard; briefly reads `Copied!`.
- **Spread** — the live maximum price spread across exchanges, as a percentage.
- **Age** — how long the spread has been at or above your threshold, e.g. `12m`
  or `3h`.
- **Legend** — one entry per exchange holding the ticker: a colored dot matching
  its line on the chart, the exchange name, and its volume. Hovering an entry
  shows that exchange's exact price and volume.
- **Mini chart** — one price line per exchange, so you can see whether the gap
  is opening, closing, or holding.
- **Expand button** — opens the card fullscreen; see [Fullscreen](#fullscreen).

#### Dimmed cards

A card turns **dimmed** when its live spread drops back below your
[minimum decorrelation](#minimum-decorrelation). The spread is not over yet — the
server keeps it open until it has stayed below the threshold for **10 minutes**.
If it widens again, the card lights back up and keeps its age. If not, it drops
out of the feed.

The alert sound plays once per new spread, not again when a dimmed card comes
back.

#### How the spread is calculated

The percentage is `(highest price − lowest price) ÷ lowest price × 100`, taken
across every exchange currently reporting that ticker.

This figure is **live**. It is recomputed continuously from the same exchange
websockets that feed the chart lines and refreshed about twice a second, so it
tracks the current gap rather than the gap at the moment the alert fired.

::: warning A spread is not a guaranteed profit
The number is a difference between two quoted prices. It says nothing about
whether you could actually trade it — order book depth, fees, funding, transfer
time and withdrawal availability are not part of the calculation, and a visible
gap can close before an order fills. Treat it as a signal to look, not a result.
:::

The chart is deliberately zoomed in with tight price margins, because the gap
between exchange lines is usually small relative to the price and would be
invisible at a normal scale.

### Fullscreen

The expand button opens a deviation card at full window size: the same price
lines per exchange, the legend, the live spread and its age. The timeframe picker
works like the fullscreen view in Knives and Monitor, and starred timeframes are
shared with them. Press <kbd>Esc</kbd> or the close button to exit.

### A new listing card

Listing cards look different from deviation cards: a **NEW** tag, the symbol
(also click-to-copy), and the listing time. They share the feed and the same
card limit as deviation alerts.

## Settings

Open the **Alerts** tab in the main window.

### Display

#### Max cards

How many cards the feed shows at once. Range **3 to 50**, default 9.

The limit is applied after deviation and listing alerts are merged and sorted,
so both types compete for the same slots.

#### Chart timeframe

The candle interval used for the price lines inside deviation cards. Options:
`1m`, `5m`, `15m`, `30m`, `1h`, `4h`, `1d`, `1w`. Default `1m`.

This only changes the chart. It does not change how the spread is calculated or
which alerts qualify.

### Alert settings

#### Minimum decorrelation

The spread a ticker must reach before it produces an alert. Range **1% to 10%**
in 0.5% steps, default 1%.

A spread that falls back below this value is [dimmed](#dimmed-cards), not
removed at once. It leaves the feed after 10 minutes below the threshold.

#### Max spread %

Hides spreads wider than this. Default **off** (empty). The − / + buttons step by
5%, or type any value.

A spread of hundreds of percent is almost never a real opportunity. Usually it
is two different coins listed under the same ticker on different exchanges.
**50%** is a good starting point.

#### Max spread age

Hides spreads that have been open longer than this. Steps: **Off**, 30m, 1h, 2h,
4h, 8h, 12h, 1d, 2d, 3d, 7d. Default Off.

A gap that has stayed open for days is usually structural — a suspended
withdrawal, a different token — rather than something that will close.

### Notifications

#### Alert sound

Plays a sound when a new deviation alert appears. On by default.

#### Listing alert sound

Plays a sound when a new token is listed. On by default.

The two are independent — you can have listings audible and deviations silent,
or the reverse.

### Volume filter

#### Enable volume filter

Filters deviation alerts by 24-hour trading volume. Off by default.

::: info It takes two
A deviation alert needs **at least two exchanges** above the minimum volume to
pass the filter. That is deliberate: a price gap is only meaningful if both
sides of it have real trading behind them.
:::

This filter applies to deviation alerts only. New listing alerts are not
filtered by volume — a token that just listed has no meaningful volume history.

#### Minimum 24h volume

The 24-hour volume, in USD, an exchange needs for its side of a deviation to
count. Type the amount; default **$1,000,000**.

Greyed out unless the volume filter is enabled.

::: info All of these filters run on the server
Threshold, max spread %, max age and the volume filter are all applied on the
server, so a hidden spread never reaches the app at all. Changing a value takes
effect within a second.
:::

## Liquidation tape

Alerts can also carry a live tape of **forced position closes** — a separate
feed from the deviation and listing cards, shown in its own strip alongside
them.


It is **on by default**. Liquidations come from **Binance** and **Bybit**
perpetuals — the venues that publish them.

### Reading the tape

The header shows `LIQUIDATIONS` and, when anything has arrived recently, a
running figure — the **total liquidated in the last 60 seconds**.

Each row is one event, newest at the top:

| Part | Meaning |
| --- | --- |
| Time | When it printed |
| Coloured dot | Which exchange, in that exchange's colour |
| Symbol | With the `USDT` / `USDC` suffix stripped |
| Amount | Notional value of that single liquidation |

The row's background bar scales with size, so big events are visible without
reading the number. **Click a row to copy its symbol.**

Hovering spells the event out — venue, `long liquidated → forced sell` or
`short liquidated → forced buy`, quantity and price.

::: warning Colour follows the pressure, not the word
A liquidated **long** is a forced **sell**; a liquidated **short** is a forced
**buy**. The tape colours by that resulting pressure, matching the liquidation
diamonds in the [majors overlay](/en/customize/majors#liquidations-—-diamonds).
:::

Before the first event arrives the tape reads `waiting…` rather than sitting
blank.

### Moving and resizing it

**Drag the `LIQUIDATIONS` header** to dock the tape to any edge — left, right,
top or bottom. Left and right give a column of rows; top and bottom give a
horizontal strip. Default is right.

Drag the gutter between the tape and the cards to resize it.

If you shrink the window far enough the tape hides itself rather than crowding
out the alert cards.

### Settings

Open the **Alerts** tab in the main window.

<Screenshot src="liquidations-settings" alt="The liquidation settings in the Alerts tab" caption="Alerts settings — liquidations" />

#### Enable liquidation tape

Shows forced position closes as they happen. **On by default.** Everything
below is inert while this is off.

#### Minimum size

The size of a single liquidation, in USD. Range **$5,000 to $1,000,000** in
$5,000 steps, default $50,000. It applies to every venue that does not have its
own size.

$5,000 is the server's own floor: nothing smaller is stored, so the minimum
setting already means "everything there is".

#### Per-venue settings

Below the minimum size there is one block each for **Binance** and **Bybit**:

- A switch to mute that venue entirely.
- **Size on this venue** — its own minimum size. At the far left it reads
  `global $50K` and follows the minimum size above.

$50K is routine on Binance but can be a large event elsewhere, so giving each
venue its own size keeps one venue from drowning out the other. If both venues are
muted, the app warns you that nothing can arrive.

#### Minimum 24h turnover

Hides thin tickers by their 24-hour turnover. Range **$0 to $50M** in $1M steps,
default 0 — shown as `off`, meaning no filtering.

::: warning A non-zero value also hides unknown tickers
Any symbol whose 24h turnover is not yet known is hidden too, not just the
genuinely thin ones. On a freshly opened window that can mean noticeably fewer
events until turnover figures are in.
:::

#### Blacklist

Symbols to never show. Type one and press <kbd>Enter</kbd> to add it; **Clear
all** empties the list.

Useful for the handful of tickers that liquidate constantly and would otherwise
dominate the tape.

#### Rows kept

How many events the tape holds before dropping the oldest. Range **20 to 300**
in steps of 20, default 100.

#### Liquidation sound

Plays a sound when a liquidation arrives. **Off by default.**

Note that this fires on *every* event that passes your filters — with a low
minimum size on a busy market that is a lot of sound. Raise **Minimum size**
first, then turn this on.

## Related

- [Knives](/en/tools/knives) — single-exchange price moves rather than
  cross-exchange gaps. Knives also shows a **NEW** badge for fresh listings on
  its ticker cards.
- [Monitor](/en/tools/monitor) — ranked market overview
