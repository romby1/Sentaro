# Alerts

Alerts watches for two things at once and shows them in a single feed:

1. **Price deviation** — the same asset priced differently on different
   exchanges right now.
2. **New listings** — a token that just started trading on a monitored
   exchange.

<Screenshot src="alerts" alt="The Alerts window showing deviation cards and a new listing card" caption="The Alerts window" />

## Reading the window

Cards are ordered newest first, by when they first appeared. A card keeps its
position as its numbers update, so the feed does not reshuffle under you while
you're reading it.

### A deviation card

- **Symbol** — click to copy it to your clipboard; briefly reads `Copied!`.
- **Spread** — the live maximum price spread across exchanges, as a percentage.
- **Legend** — one entry per exchange holding the ticker: a colored dot matching
  its line on the chart, the exchange name, and its volume. Hovering an entry
  shows that exchange's exact price and volume.
- **Mini chart** — one price line per exchange, so you can see whether the gap
  is opening, closing, or holding.

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

::: info Alerts don't disappear when the gap closes
Once a ticker passes the threshold it stays in the feed and keeps updating, even
if its live spread later drops back below the minimum. The threshold controls
what gets *in*, not what stays.
:::

### Notifications

#### Alert sound

Plays a sound when a new deviation alert appears. On by default.

#### Listing alert sound

Plays a sound when a new token is listed. On by default.

The two are independent — you can have listings audible and deviations silent,
or the reverse.

### Volume filter

#### Enable volume filter

Filters deviation alerts by trading volume. Off by default.

::: info It takes two
A deviation alert needs **at least two exchanges** above the minimum volume to
pass the filter. That is deliberate: a price gap is only meaningful if both
sides of it have real trading behind them.
:::

This filter applies to deviation alerts only. New listing alerts are not
filtered by volume — a token that just listed has no meaningful volume history.

#### Minimum volume

The 5-minute volume, in USD, an exchange needs for its side of a deviation to
count. Range **$10K to $1M** in $10K steps, default $10K.

Greyed out unless the volume filter is enabled.

## Related

- [Knives](/en/tools/knives) — single-exchange price moves rather than
  cross-exchange gaps. Knives also shows a **NEW** badge for fresh listings on
  its ticker cards.
- [Monitor](/en/tools/monitor) — ranked market overview
