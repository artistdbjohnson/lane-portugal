# Lane Portugal — motion table
Date: 2026-10-06 · Motion pass on the locked Path A pitch (docs/design-meeting.md). Chassis, type, colors, copy, and the Axiom key-aperture stay. This pass adds motion only.

Look: https://www.prompt-motion.com/ — attitude and timing only. Nothing rehosted. No prompt text copied.

The motion-table-pass skill file was not installed in this environment. The ballot below is the seat record the brief named (Vale, Reed, Glyph, Ash, Axiom), in the same locked-table shape as the opening vote in docs/design-meeting.md.

## What already ships
Axiom key-aperture: limestone mask, keyhole on the Lane mark, 1.4s, spline `0.22 1 0.36 1`, no bounce. Once per session (`lane-aperture-seen`). Skipped on hash deep-link and `prefers-reduced-motion`. Hero line still sets in serif after the mask. InView rises and the existing photo hover scale stay. This pass does not retune that open and does not add a second one.

## Look notes (prompt-motion.com)
Gallery attitude is showreel maximalism: kinetic type, abstract reels, launch films. That register is refused. Lane is limestone and aged brass, not a kinetic template.

Timing taken from the gallery chrome only (the page's own fades, not the films): short ease-out, then still; `prefers-reduced-motion` removes the transition. Poster crossfades sit around half a second. Lane's inlay is 0.85s on the same ease already used by the in-view rise (`cubic-bezier(0.22, 1, 0.36, 1)`), a little heavier than a video-poster fade because the material is brass, not type.

Not taken: blur entrances, slam cuts, kinetic type, extra hero opens, any video.

## Seats
| Seat | Gate |
| --- | --- |
| Vale | Restraint. One idea, once, then still. |
| Reed | Taste. Must sit in the skyelite-hero air already locked. |
| Glyph | The mark. Motion may not restyle type or the Lane wordmark. |
| Ash | Expensive. Fails cheap: bounce, blur, stagger grids, spinner ticks. |
| Axiom | Optional. The key-aperture is already the twist. No second open. |

## Ballot
Each seat: **ship** / **amend** / **kill**. Quorum is Vale, Reed, Glyph, Ash. Axiom cannot outvote Ash. Winner is the option Ash did not kill that the quorum ships. Two placements of one material count as one winner.

| Option | Vale | Reed | Glyph | Ash | Axiom | Call |
| --- | --- | --- | --- | --- | --- | --- |
| Kinetic type / showreel open in the prompt-motion register | kill | kill | kill | kill | kill | Kill. Loud, and it fights the locked open. |
| Second hero: Ken Burns, parallax, curtain, stamp | kill | kill | kill | kill | kill | Kill. Farmington / Adamthwaite / Forsyth families, and a second open. |
| Retune the key-aperture (hold, then scale) | kill | amend | kill | kill | amend | Kill. The 1.4s open is already locked and readable. A retune is a second pass on the intro. |
| Card-image parallax or a new hover on the plates | kill | kill | kill | kill | kill | Kill. The 700ms plate scale on hover already exists. |
| **Brass inlay** — 1px `#9A7B4F` rule, ease-out 0.85s, no bounce, no blur. (1) Under each listing price, including the week plate, drawn once when that price enters. Width matches the price. (2) Under a ledger row title, a 2.25rem tick, only while that row is open. | **ship** | **ship** | **ship** | **ship** | **ship** | **WIN** |

## Winner — LOCKED
**Brass inlay**, two placements, one material.

1. Listing prices (week plate, coast, premium). The rule is the width of the price, drawn once on first intersection (`threshold: 0.85`), then left still. It does not replay.
2. Buyer's ledger. The same brass, as a short left tick under the row title, draws when the row opens and withdraws when it closes. Nested rows use the same tick. The existing grid collapse is unchanged.

The key-aperture is not modified.

## Reduced motion and session
- `prefers-reduced-motion: reduce`: the inlay stays at `scaleX(0)` with no transition. Prices and ledger look as they did before this pass. The aperture skip is unchanged.
- Session once still belongs to the aperture only. The price rule is once per page view (intersection), not a second intro. The ledger tick is a response to the click, not an intro.

## Refused this pass
Fonts, brand colors, layout chrome, copy, logos, nav, theme, locale. No new dependency. No generated footage. No stacked open.
