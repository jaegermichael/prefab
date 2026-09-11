---
name: Prefab Zimbabwe
description: A solar-blue builders' price-board system for practical steel homes.
colors:
  ink: "#073b73"
  ink-soft: "#465d73"
  paper: "#f3f7f4"
  paper-raised: "#ffffff"
  steel: "#dce8e0"
  line: "#b8c9bf"
  accent: "#147a3d"
  accent-bright: "#80bd3a"
  accent-ink: "#ffffff"
  on-dark: "#f7fbff"
  on-dark-soft: "#bed0df"
  dark-panel: "#052d59"
  system-dark-ink: "#eef6ff"
  system-dark-ink-soft: "#bed0df"
  system-dark-paper: "#061a2f"
  system-dark-paper-raised: "#0b2745"
  system-dark-steel: "#12385a"
  system-dark-line: "#315b78"
  system-dark-panel: "#041f3d"
typography:
  display:
    fontFamily: "Archivo Black, Impact, sans-serif"
    fontSize: "clamp(54px, 6.2vw, 96px)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo Black, Impact, sans-serif"
    fontSize: "clamp(42px, 5.6vw, 80px)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  price:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "42px"
    fontWeight: 400
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 800
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 800
    letterSpacing: "0.1em"
rounded:
  check: "7px"
  compact: "8px"
  button: "9px"
  control: "10px"
  surface: "14px"
  round: "50%"
spacing:
  micro: "4px"
  tight: "8px"
  control-gap: "10px"
  gutter-mobile: "14px"
  base: "20px"
  comfortable: "28px"
  panel: "40px"
  section-heading: "54px"
  section-mobile: "90px"
  section-wide: "150px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.dark-panel}"
    textColor: "{colors.on-dark}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "50px"
  model-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "16px 14px"
    width: "145px"
  model-tab-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
  variant-row:
    backgroundColor: "rgba(255,255,255,.55)"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "17px"
  enquiry-ticket:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    padding: "40px"
---

# Design System: Prefab Zimbabwe

## Overview

**Creative North Star: "The Solar-Powered Builders' Price Board"**

Prefab Zimbabwe lives in the visual world of a trusted Zimbabwean builders' merchant: deep solar-panel blue structures, cool white labels, galvanized green-grey panels, Zimbabwe green actions, and restrained lime highlights. The system is practical, explicit, and tactile. It makes dimensions, inclusions, exclusions, and USD prices feel like stock information posted for immediate comparison rather than luxury property marketing hidden behind an enquiry form.

Large compressed headlines establish strength while disciplined Manrope text keeps dense commercial information readable. Photography is treated as material evidence, with galvanized offsets, restrained saturation, and purposeful green or lime signals. The implementation is approved to ship after its two-tone focus fix; future work should preserve this direct, locally grounded confidence rather than reverting to the discarded charcoal-and-safety-orange identity or polishing it into a generic villa aesthetic.

**Key Characteristics:**
- Builders' merchant price-board clarity
- Deep solar-panel blue, cool white, galvanized green-grey, Zimbabwe green, and lime
- Compressed uppercase display type with workhorse body text
- Broad, calm sections around dense price-comparison modules
- Tonal depth first, blue-cast shadows only for lifted commercial signals
- Native system dark mode, two-tone accessible focus, and decisive mobile collapse

## Colors

The binding Movable Homes Zimbabwe palette pairs structural solar-panel blues with cool construction neutrals, Zimbabwe green conversion signals, and sparing lime highlights.

### Primary
- **Zimbabwe Green:** Primary actions, selected checks, price and enquiry tickets, important icons, location markers, hero emphasis, selection color, and the focus outline.

### Secondary
- **Deep Solar-Panel Blue:** Primary light-mode ink and the base for dark rails, price boards, CTAs, brand marks, and structural sections.
- **Dark-Panel Blue:** The deepest light-mode structural surface and the primary button hover color.

### Tertiary
- **Lime Highlight:** Restrained identity highlight for image offsets, benefit icons, price-board group labels, build-point indices, and the brand wordmark accent.

### Neutral
- **Soft Blue-Grey:** Secondary light-mode copy that reduces contrast without becoming faint.
- **Cool White:** The light-mode page canvas.
- **Raised White:** Elevated panels and the light half of split sections.
- **Galvanized Green-Grey:** Selector beds, delivery fields, and material-like utility surfaces.
- **Galvanized Line:** Hairline borders and separators.
- **White Accent Ink:** Text placed on Zimbabwe-green actions and tickets.
- **On-Dark Cool White:** Primary copy placed over deep blue structures and the outer halo in the two-tone focus treatment.
- **On-Dark Soft Blue:** Secondary copy and notes placed over deep blue structures.
- **System Dark Neutrals:** Under `prefers-color-scheme: dark`, ink becomes `#eef6ff`, soft ink remains `#bed0df`, the canvas becomes `#061a2f`, raised surfaces become `#0b2745`, steel becomes `#12385a`, lines become `#315b78`, and the deepest panel becomes `#041f3d`. Zimbabwe green, lime, white accent ink, and on-dark text remain unchanged; major dark structural sections are explicitly held at `#052d59`.

### Named Rules

**The Movable Homes Palette Rule.** Deep solar-panel blue owns structure, Zimbabwe green owns action and selection, and lime is a restrained highlight; do not revive charcoal, safety orange, or competing brand accents.

**The Material Contrast Rule.** Build hierarchy with solar blue, cool white, galvanized green-grey, and borders before reaching for shadow.

**The Two-Tone Focus Rule.** Every keyboard-focusable element uses a 3px Zimbabwe-green outline at a 3px offset, backed by a 6px on-dark cool-white halo so focus remains visible on both light and dark surfaces.

## Typography

**Display Font:** Archivo Black (with Impact and sans-serif fallbacks)  
**Body Font:** Manrope (with system-ui and sans-serif fallbacks)

**Character:** Archivo Black supplies the compressed weight of yard signage and steel stencils. Manrope acts as the clean workhorse for navigation, descriptions, controls, and pricing detail.

### Hierarchy
- **Display** (400, fluid 54–96px, 0.96 line-height): Hero statements, uppercase with tight negative tracking; mobile resets to a fluid 48–66px range.
- **Headline** (400, fluid 42–80px, 0.96 line-height): Major section statements, uppercase and tightly tracked; mobile collapses to 38–54px.
- **Price** (400, 42px): The selected quote uses Archivo Black; compact price contexts step down to 30px, 18px, and 15px.
- **Title** (700–800, 20–26px): Model names, price-group labels, and panel headings in Manrope unless the title is itself a price-board heading.
- **Lead** (400, 18px, 1.65 line-height): Section introductions, generally capped near 58 characters; mobile uses 16px.
- **Body** (400–700, 12–14px, 1.5–1.65 line-height): Product descriptions, inclusions, notes, and supporting information.
- **Label** (800, 11–12px, 0.08–0.12em tracking): Uppercase price qualifiers and utility labels.
- **Button** (800, 14px): Short, direct action copy with no decorative letter spacing.

### Named Rules

**The Signboard Hierarchy Rule.** Use Archivo Black only where a builders' sign would use its loudest ink: major statements, board headings, and prices. Keep explanatory copy in Manrope.

**The Short Headline Rule.** Preserve compact line breaks and tight measures; display copy should read as stacked signage, not wrap into a paragraph.

## Layout

The main container is capped at 1400px with 20px desktop side gutters and 14px mobile gutters. Desktop sections alternate between broad two-column editorial compositions and dense commercial modules. The hero fills the viewport beneath the 72px header, using a roughly 44/56 split and a fluid 36–100px gap. Major light sections use a 140–150px vertical rhythm; mobile sections collapse to roughly 90px.

Spacing is intentionally bimodal: expansive section separation around compact 8–28px control rhythms. Panels generally use 28–40px internal padding, with 54px between a section heading and its working content. The price selector uses a horizontal scrolling tab rail rather than wrapping labels. Its working panel is a three-column intro/list/ticket composition, changes to two columns plus a full-width ticket at 1050px, and becomes one stacked column below 768px.

The complete price board uses two newspaper-like columns on wide screens and one column on mobile. Split image-and-copy sections, the delivery panel, final CTA, and footer all collapse to one column below 768px. Navigation links disappear, the header action becomes icon-only, benefits become a 2×2 rail, and a fixed 52px-high enquiry action appears 14px from the bottom-right edge.

**The Wide Air, Dense Board Rule.** Keep generous space between sections, but let selectors and price lists remain compact enough for fast commercial scanning.

**The Mobile Collapse Rule.** Recompose into one column; do not merely shrink desktop grids. Preserve prices, exclusions, and a model-specific WhatsApp action in the primary reading path.

## Elevation & Depth

The system is flat and tonal by default. Deep blue rails, galvanized selector beds, raised white panels, borders, lime image offsets, and split backgrounds establish most depth. Shadows are reserved for elements that behave like physically attached or lifted commercial markers, and every shadow is cast in translucent deep solar-panel blue.

### Shadow Vocabulary
- **Price Ticket:** `0 22px 50px rgba(7, 59, 115, .24)` gives the overlapping green entry-price block a posted-sign presence.
- **Model Panel:** `0 24px 60px rgba(7, 59, 115, .1)` separates the complete selector from the page without making it glossy.
- **Selected Variant:** `0 9px 28px rgba(7, 59, 115, .13)` lifts only the active quote row.
- **Location Marker:** `0 18px 42px rgba(7, 59, 115, .24)` gives the green Harare marker focus over the map field.
- **Mobile Enquiry:** `0 14px 40px rgba(7, 59, 115, .3)` keeps the fixed green action legible over scrolling content.

### Named Rules

**The Structural Shadow Rule.** Do not shadow ordinary cards or text blocks. Apply shadow only to a current selection, overlapping price marker, map marker, or fixed conversion control.

## Shapes

The primary surface radius is a restrained 14px. Controls step down instead of inheriting the full surface curve: price tabs and variant rows use 10px, action buttons use 9px, compact brand and header controls use 8px, and checkbox-like selectors use 7px. Circular geometry is reserved for the delivery marker and map rings.

Borders are thin and utilitarian. Large imagery is clipped to the 14px surface radius and may receive a square-edged or softly rounded material offset. Avoid pills, bubbly containers, nested rounded cards, and excessive corner variety.

**The Chamfered, Not Cushioned Rule.** Corners may soften a steel form, but they must never make the interface feel playful or inflated.

## Components

### Buttons
- **Shape:** Compact softly chamfered control (9px radius), at least 50px high, with 20px horizontal padding and a 10px icon gap.
- **Primary:** Zimbabwe-green fill with white accent ink. On hover it becomes dark-panel blue with on-dark cool-white text and lifts 2px.
- **Dark:** Deep solar-panel-blue fill with on-dark cool-white text. On hover it becomes raised white with solar-panel-blue text and lifts 2px.
- **Header Action:** A smaller 8px-radius solar-panel-blue control with 11px vertical and 16px horizontal padding; it changes to Zimbabwe green with white accent ink on hover.
- **Active:** Pressed actions move down 1px.
- **Focus:** Every interactive element receives the global two-tone treatment: a 3px Zimbabwe-green outline, 3px outline offset, and `0 0 0 6px` on-dark cool-white halo.
- **Motion:** State transitions run for 250ms using the system's expressive ease. Under reduced motion, transitions are effectively removed.

### Links
- **Text Action:** Heavy Manrope text with a thin solar-panel-blue underline and at least 44px target height.
- **Inline Action:** Heavy text paired with a small directional icon; no container unless it is a primary conversion action.
- **Navigation:** 14px bold Manrope with a 30px desktop gap; links turn Zimbabwe green on hover and disappear below 768px.

### Price Selector
- **Tabs:** A horizontally scrollable row of 145px-minimum controls separated by 8px. The selected tab inverts to deep solar-panel blue with on-dark cool-white text; dark mode reverses the selected tab to `#eef6ff` with `#073b73` text.
- **Panel:** One 14px-radius clipped assembly joining a descriptive intro, galvanized green-grey variant list, and Zimbabwe-green enquiry ticket. Treat it as one complete quoting instrument, not three unrelated cards.
- **Variant Rows:** Soft translucent white rows with a 10px radius. Hover shifts 4px to the right and increases opacity. Selection changes the row to raised white, adds a restrained blue-cast shadow, and fills the 26px check control Zimbabwe green. In dark mode, the active row becomes `#12385a`.
- **Ticket:** The selected model name, exact price, VAT and transport note, and model-specific WhatsApp action must update together.

### Complete Price Board
- **Container:** Deep solar-panel blue, on-dark cool-white text, 14px radius, and fluid 28–54px padding; dark mode explicitly retains dark-panel blue (`#052d59`).
- **Structure:** Two flowing columns on wide screens and one on mobile. Groups are separated by subdued blue lines; lime group names and right-aligned Archivo prices are the scan anchors.
- **Behavior:** Group headings return the selector to that layout. On mobile, the secondary “Customize this layout” label hides, but names, notes, and prices remain visible.

### Media and Proof Panels
- **Photography:** Full-bleed within its allocated panel, cover-cropped, and restrained rather than glossy. Construction imagery may be grayscale with increased contrast.
- **Offsets:** Lime blocks sit 14–24px behind key images to tie material proof to the supplied identity.
- **Map Field:** Abstract industrial geometry uses galvanized tones, faint solar-blue road bars, concentric rings, and one Zimbabwe-green Harare marker.

### System Preferences
- **Dark Mode:** Follow `prefers-color-scheme: dark`; remap the documented neutral tokens while retaining Zimbabwe green and lime. Major structural sections use explicit `#052d59`, selected model tabs invert to `#eef6ff` with `#073b73` text, selector rows use faint white overlays, active rows use `#12385a`, and the delivery map uses `#12385a`.
- **Reduced Motion:** Follow `prefers-reduced-motion: reduce`; disable smooth scrolling and reduce all animation and transition durations to 0.01ms with a single iteration.
- **Entry Motion:** The only authored entrance is the green hero price ticket: 900ms from 24px below with slight rotation and opacity, using the expressive ease `cubic-bezier(.16, 1, .3, 1)`.

## Do's and Don'ts

### Do:
- **Do** make exact USD pricing, VAT exclusion, and transport terms visible at the point of comparison.
- **Do** use Zimbabwe green for primary action, price, selection, location, and focus moments; reserve lime for restrained identity highlights.
- **Do** use deep solar-panel blue for structural ink and dark sections, with cool white and galvanized green-grey as the material field.
- **Do** apply the exact two-tone keyboard focus treatment: 3px green outline, 3px offset, and a 6px on-dark cool-white halo.
- **Do** pair broad section spacing with compact 8–28px rhythms inside commercial controls.
- **Do** keep primary surfaces at 14px and step controls down through 10px, 9px, 8px, and 7px.
- **Do** preserve model-specific WhatsApp context when a selection changes.
- **Do** honor system dark mode and reduced-motion preferences without removing information.
- **Do** collapse multi-column compositions into deliberate single-column mobile flows below 768px.

### Don't:
- **Don't** hide prices behind forms, modals, or enquiry-only calls to action.
- **Don't** revive the old charcoal-and-safety-orange system or introduce competing accent colors.
- **Don't** introduce luxury-villa styling, polished gold accents, gradients, glassmorphism, or unsupported lifestyle claims.
- **Don't** add rounded pills, bubbly cards, or deep nested containers.
- **Don't** use Archivo Black for explanatory paragraphs or long labels.
- **Don't** shadow every panel; reserve blue-cast lift for selected, overlapping, mapped, or fixed elements.
- **Don't** simplify focus to a single-color ring; both the green outline and cool-white halo are required.
- **Don't** let mobile collapse remove prices, exclusions, variant notes, or the direct enquiry path.
