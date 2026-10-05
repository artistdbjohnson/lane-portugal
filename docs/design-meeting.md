# Lane Exclusive Real Estate (Lane Portugal) — design meeting (chassis freeze)
Date: 2026-10-05 · Studio lead freeze (Doug standing order: autocomplete, no mid-gate waits)
Path A pitch · **PT geo day** (rotation: Axis USA 10-02 → today PT) · source https://www.laneportugal.pt/ (EN twin https://www.laneportugal.pt/en-gb)
Cascais independent luxury agency, founded 2008 by Martin Lawrenz and Manuel Neto. Not a national chain. On Cascais PT shortlist (#6) from researcher report; not yet showcased.

## Domain line
```
Domain: UI/UX — factory transplant (pitch).
Craft shelf: Motionsites seed: skyelite-hero remapped to Cascais luxury real estate (+ Axiom twist: key-aperture open + off-market brief dock + Riviera buyer's-guide ledger).
Resource search: motion-primitives (MIT, free repo) InView/TextEffect pattern for restrained section reveals — USE, rebuilt in-house with notice. vantaui reference only (shipping needs paid plan). dev.cards rejected (Commons Clause). great-ui / easyui / paceui looked at: nothing beat motion-primitives for this register.
Color search: colorable.jxnblk.com contrast check — navy #002844 on limestone #F4F1EC and brass #9A7B4F on limestone (large type only); ramps.studio looked at for a greige ramp, CSS written ourselves from Lane's #B4ADA3 / #857B6C.
Tool pass: Motionsites skyelite-hero (free seed) = chassis; footer.design looked at for a ledger footer with licence line (rebuilt, not copied); Mobbin property-search filter flow looked at, look only, nothing shipped.
Inspiration vote: visualjournal.it (seat map: Reed/Nia/Lux/Prism) — branding/editorial features; taken: wide-margin serif pacing and caption-led image rhythm. Look only, nothing copied.
Expensive: material = Cascais limestone (lioz/calçada paper) + aged brass key. Cost carried by a high-contrast serif display at large sizes with generous leading, wide gutters and long vertical rests, and Lane's own published property photography at full bleed in real coastal light. Restraint: one accent (brass), navy ink, no glass card grids.
Locks: PT default + EN twin · dark|light.
Stack: React + Tailwind + Next.js + GitHub + Vercel.
```

## Brand lock (from live laneportugal.pt)
- Name: **Lane Exclusive Real Estate** · site brand **Lane Portugal** · legal: LANE Mediação Imobiliária, Lda / AMI 8486 (footer). Note: Quem Somos page prints placeholder "AMI: 123456789" — pitch point; site uses footer AMI 8486.
- Hero line (exact): PT **A chave para o seu refúgio exclusivo** · EN **The key to your exclusive hideaway** · CTA Pesquise agora / Search now
- Address: Rua Afonso Sanches, 25B, 2750-282 Cascais (contactos page) · Phone (+351) 210 170 425 · info@laneportugal.com · recrutamento@laneportugal.com
- Social: Instagram https://www.instagram.com/lane_exclusive_real_estate/ · Facebook https://www.facebook.com/laneimobiliaria/ · LinkedIn http://www.linkedin.com/in/lane-exclusive-real-estate-83456ba9/ · Google Maps link from footer
- Stats (exact): Desde 2008 no mercado imobiliário · +2000 Imóveis de luxo vendidos · +350 Imóveis em portfólio
- Locations (exact): Cascais, Lisboa, Setúbal, Porto, Sintra, Lapa, Parque das Nações, Penha de França, Príncipe Real, Santa Maria Maior, Campolide
- Colors (live CSS): navy ink `#002844` (primary), greige `#B4ADA3`, taupe `#857B6C`, white, black; minor link blue `#119DFF` (drop — reads cheap). Path A adds limestone paper `#F4F1EC` and brass `#9A7B4F` as material accents derived from greige/taupe. Dark theme: navy-black `#0B1620` field, limestone type.
- Fonts on source: Lora (serif), Poppins, Open Sans → Path A: **Cormorant Garamond** or **Lora** display (keep Lora lineage acceptable) + **Manrope**/Open Sans body. One serif, one sans.
- Logo: published Lane mark `media.egorealestate.com/ORIGINAL/19238bf4-5e53-4b1e-abd9-cb0bbffe6ca1.png` — keep.
- Attribution: built by dglxss only. Not affiliated. Design study.

## Craft shelf VOTE — LOCKED
**Winner: Motionsites `skyelite-hero`** (premium private-jet hero: light full-bleed media, gray-900 nav type, quiet confident spacing) remapped to Riviera luxury property.
- Steal: light, unshouted luxury hero; nav weight and air; restrained CTA pairing; mobile dropdown discipline.
- Remap: jet charter → Cascais/Estoril villas, off-market search, buyer's guide.
- Reject: `vortex-studio-hero` (Axis, last USA ship) · `surgical-prestige` (Oralvide/Franklin) · `neo-museum` (City Skin) · `wanderful-hero` (Quinta) · `mythic-naturecore` (Forsyth) · `prosthetics-hero` · `equilibrium` (glass lineage) · `aetheris-voyage-hero`/`velorah-hero` (liquid-glass heavy) · Framer real-estate templates (all read as template listing grids).

## Opening VOTE — LOCKED
Must differ from: Farmington still-poster · Boho Ken Burns · BRA splash video · LP crest micro-loader · Batley quiet open · Franklin letterhead stamp · Quinta cinematic poster · Adamthwaite scroll-reveal · Forsyth verandah curtain · Oralvide smile stamp · City Skin twin-badge · Axis Growth Practice stamp.

| Option | Vote | Why |
| --- | --- | --- |
| Splash video (Grok Imagine) | Reject | BRA owns it; Lane's own photography is stronger than generated coast footage. |
| Still poster fade | Reject | Farmington/Quinta family. |
| Scroll-revealed hero | Reject | Adamthwaite. |
| Quiet type open | Reject | Batley. |
| Micro-loader crest | Reject | LP Cascais. |
| Curtain / stamp opens | Reject | Forsyth / Franklin / Oralvide / Axis. |
| **Axiom key-aperture open** | **WIN** | A keyhole-shaped mask in limestone paper, centred on the Lane mark, widens (≈1.4s, eased, no bounce) to reveal the full-bleed hero property plate as the line "A chave para o seu refúgio exclusivo" sets in serif. The brand's own sentence becomes the motion. Session once; skip on hash deep-link and prefers-reduced-motion (static hero). |

## Axiom twists — LOCKED (Reed taste-gate passed)
1. PRIMARY — key-aperture open.
2. **Off-market brief dock** — exact copy "Não encontrou o que procura? / Nem sempre o melhor imóvel está visível…" turned into a quiet concierge form (zona, tipologia T0–T6+, orçamento, obrigatório) that composes a mailto to info@laneportugal.com. No fake backend.
3. **Riviera buyer's ledger** — the exact 6-step Guia do Comprador (NIF → Documentação → CPCV → Custos e Impostos → Escritura → Seguros) as nested collapsibles (Doug's loved pattern), plus Golden Visa and RNH as ledger entries with their published "A INFORMAÇÃO DISPONIBILIZADA NÃO DISPENSA A CONSULTA DA LEGISLAÇÃO APLICÁVEL" line kept verbatim.

## Identity / photography lock
- Live site publishes **no staff portraits** (founders named only). Do NOT invent faces for Martin Lawrenz / Manuel Neto or consultants. If the build agent finds published portraits on laneportugal.pt itself, identity-preserve those only.
- Photography = Lane's own published listing and hero photography (eGO media CDN), full bleed, real light. Every major section gets a real property plate (hero, collections, Cascais living, off-market, investing/Riviera, about, contact). Gentle grade only (warm, lifted shadows); no generated people, no CGI interiors.
- Property cards: harvest real listings (title, location, price, typology, area, photo, listing URL) from the live site (listings are client-rendered from eGO websiteapi — use a headless browser). Link each card to its live Lane listing.

## IA (Path A)
Key-aperture open → Hero (search Comprar|Arrendar|Luxo|Off-Market) · Property of the week / featured listings · Zonas de eleição (locations) · Viver em Cascais (exact copy) · Off-market brief dock · Investir em Portugal — A Riviera Portuguesa (exact copy) · Buyer's ledger (6 steps + Golden Visa + RNH) · Quem somos (mission, vision, stats) · Recrutamento teaser · Newsletter · Contactos.
Nav: Propriedades · Premium · Empreendimentos · Investir em Portugal · Empresa · Contactos (+ PT|EN, theme, CTA Pesquise agora).

## Hard locks before merge
1. Opening vote recorded (this file). 2. Nav spacing triple-check desktop + phone. 3. Scroll targets land under sticky nav (scroll-margin-top). 4. Real photography every major section. 5. Craft ≥ BRA floor; opening distinct. 6. PT default + EN, dark|light, persisted. 7. vercel.json `{ "cleanUrls": true, "trailingSlash": false }`. 8. Git author via env only: Douglxss Johnson <artistdbjohnson@gmail.com>. 9. Studio lead alone merges main. 10. Exact published copy, not a rebrand; Not affiliated footer. 11. Expensive gate (Ash fails cheap).
