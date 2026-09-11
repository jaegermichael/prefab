---
name: Prefab Zimbabwe
description: A builders' merchant price-board system for practical steel homes.
colors:
  ink: "#171916"
  ink-soft: "#4c514b"
  paper: "#f1f2ed"
  paper-raised: "#fafbf7"
  steel: "#d3d6d0"
  line: "#b8bcb5"
  accent: "#f15a24"
  accent-ink: "#171916"
  on-dark: "#f4f5ef"
  on-dark-soft: "#b8beb6"
  dark-panel: "#1d201d"
  system-dark-ink: "#f1f2ec"
  system-dark-ink-soft: "#b5bbb3"
  system-dark-paper: "#171916"
  system-dark-paper-raised: "#222520"
  system-dark-steel: "#30342f"
  system-dark-line: "#454a43"
  system-dark-panel: "#131512"
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
    backgroundColor: "{colors.ink}"
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

**Creative North Star: "The Builders' Price Board"**

Prefab Zimbabwe lives in the visual world of a trusted builders' merchant: charcoal-painted steel, galvanized panels, chalk-white labels, and a single safety-orange signal color. The system is practical, explicit, and tactile. It makes dimensions, inclusions, exclusions, and USD prices feel like stock information posted for immediate comparison rather than luxury property marketing hidden behind an enquiry form.

Large compressed headlines establish strength while disciplined Manrope text keeps dense commercial information readable. Photography is treated as material evidence, with steel-grey offsets, restrained saturation, and occasional orange blocks. The implementation is approved to ship; future work should preserve this direct, workmanlike confidence rather than polishing it into a generic villa aesthetic.

**Key Characteristics:**
- Builders' merchant price-board clarity
- Charcoal, galvanized grey, chalk, and safety orange
- Compressed uppercase display type with workhorse body text
- Broad, calm sections around dense price-comparison modules
- Tonal depth first, shadows only for lifted commercial signals
- Native system dark mode and decisive mobile collapse

## Colors

The palette resembles marked steel and printed trade signage: neutral construction materials carry the page while safety orange identifies prices, selection, and conversion.

### Primary
- **Safety Orange:** The sole high-attention color for primary actions, selected checks, price tickets, important icons, location markers, and text emphasis.

### Neutral
- **Charcoal Ink:** Primary light-mode text and the base for dark rails, price boards, CTAs, and structural sections.
- **Soft Charcoal:** Secondary light-mode copy that reduces contrast without becoming faint.
- **Chalk Paper:** The page canvas; warmer and more industrial than pure white.
- **Raised Chalk:** Elevated panels and the light half of split sections.
- **Galvanized Steel:** Selector beds, image offsets, and map-like utility surfaces.
- **Steel Line:** Hairline borders and separators.
- **On-Dark Chalk:** Primary copy placed over charcoal.
- **On-Dark Soft:** Secondary copy and notes placed over charcoal.
- **Dark Panel:** The deepest structural surface.
- **System Dark Neutrals:** Under `prefers-color-scheme: dark`, text becomes chalk, the page becomes charcoal, raised surfaces become dark steel, and dividers become visible grey. Safety orange does not change.

### Named Rules

**The One Safety Signal Rule.** Safety orange is the only accent; do not introduce competing brand colors or repurpose it as a large ambient background outside price, action, selection, and location moments.

**The Material Contrast Rule.** Build hierarchy with charcoal, chalk, galvanized grey, and borders before reaching for shadow.

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

The system is flat and tonal by default. Dark rails, galvanized selector beds, raised chalk panels, borders, image offsets, and split backgrounds establish most depth. Shadows are reserved for elements that behave like physically attached or lifted commercial markers.

### Shadow Vocabulary
- **Price Ticket:** `0 22px 50px rgba(79, 37, 19, .24)` gives the overlapping orange entry-price block a posted-sign presence.
- **Model Panel:** `0 24px 60px rgba(53, 60, 51, .09)` separates the complete selector from the page without making it glossy.
- **Selected Variant:** `0 9px 28px rgba(42, 49, 41, .12)` lifts only the active quote row.
- **Location Marker:** `0 18px 42px rgba(105, 52, 31, .25)` gives the Harare marker focus over the map field.
- **Mobile Enquiry:** `0 14px 40px rgba(52, 29, 20, .28)` keeps the fixed action legible over scrolling content.

### Named Rules

**The Structural Shadow Rule.** Do not shadow ordinary cards or text blocks. Apply shadow only to a current selection, overlapping price marker, map marker, or fixed conversion control.

## Shapes

The primary surface radius is a restrained 14px. Controls step down instead of inheriting the full surface curve: price tabs and variant rows use 10px, action buttons use 9px, compact brand and header controls use 8px, and checkbox-like selectors use 7px. Circular geometry is reserved for the delivery marker and map rings.

Borders are thin and utilitarian. Large imagery is clipped to the 14px surface radius and may receive a square-edged or softly rounded material offset. Avoid pills, bubbly containers, nested rounded cards, and excessive corner variety.

**The Chamfered, Not Cushioned Rule.** Corners may soften a steel form, but they must never make the interface feel playful or inflated.

## Components

### Buttons
- **Shape:** Compact softly chamfered control (9px radius), at least 50px high, with 20px horizontal padding and a 10px icon gap.
- **Primary:** Safety-orange fill with charcoal text. On hover it becomes near-black with chalk text and lifts 2px.
- **Dark:** Charcoal fill with chalk text. On hover it becomes raised chalk with charcoal text and lifts 2px.
- **Header Action:** A smaller 8px-radius dark control with 11px vertical and 16px horizontal padding; it changes to safety orange on hover.
- **Active:** Pressed actions move down 1px.
- **Focus:** Every interactive element receives a 3px safety-orange outline with a 4px offset.
- **Motion:** State transitions run for 250ms using the system's expressive ease. Under reduced motion, transitions are effectively removed.

### Links
- **Text Action:** Heavy Manrope text with a thin charcoal underline and at least 44px target height.
- **Inline Action:** Heavy text paired with a small directional icon; no container unless it is a primary conversion action.
- **Navigation:** 14px bold Manrope with a 30px desktop gap; links turn safety orange on hover and disappear below 768px.

### Price Selector
- **Tabs:** A horizontally scrollable row of 145px-minimum controls separated by 8px. The selected tab inverts to charcoal with chalk text; dark mode reverses the selected tab to chalk with charcoal text.
- **Panel:** One 14px-radius clipped assembly joining a descriptive intro, galvanized variant list, and orange enquiry ticket. Treat it as one complete quoting instrument, not three unrelated cards.
- **Variant Rows:** Soft translucent light rows with a 10px radius. Hover shifts 4px to the right and increases opacity. Selection changes the row to raised chalk, adds a restrained shadow, and fills the 26px check control orange.
- **Ticket:** The selected model name, exact price, VAT and transport note, and model-specific WhatsApp action must update together.

### Complete Price Board
- **Container:** Charcoal, chalk text, 14px radius, and fluid 28–54px padding.
- **Structure:** Two flowing columns on wide screens and one on mobile. Groups are separated by subdued steel lines; orange group names and right-aligned Archivo prices are the scan anchors.
- **Behavior:** Group headings return the selector to that layout. On mobile, the secondary “Customize this layout” label hides, but names, notes, and prices remain visible.

### Media and Proof Panels
- **Photography:** Full-bleed within its allocated panel, cover-cropped, and restrained rather than glossy. Construction imagery may be grayscale with increased contrast.
- **Offsets:** Galvanized grey or safety-orange blocks may sit 14–24px behind images to imply stacked sheet material.
- **Map Field:** Abstract industrial geometry uses steel tones, road-like bars, concentric rings, and one orange Harare marker.

### System Preferences
- **Dark Mode:** Follow `prefers-color-scheme: dark`; remap neutral tokens, do not alter content hierarchy or replace safety orange. Dark variants use deeper charcoal surfaces and faint white overlays for selector rows.
- **Reduced Motion:** Follow `prefers-reduced-motion: reduce`; disable smooth scrolling and reduce all animation and transition durations to 0.01ms with a single iteration.
- **Entry Motion:** The only authored entrance is the orange hero price ticket: 900ms from 24px below with slight rotation and opacity, using the expressive ease `cubic-bezier(.16, 1, .3, 1)`.

## Do's and Don'ts

### Do:
- **Do** make exact USD pricing, VAT exclusion, and transport terms visible at the point of comparison.
- **Do** use safety orange for price, selection, location, and primary action moments.
- **Do** pair broad section spacing with compact 8–28px rhythms inside commercial controls.
- **Do** keep primary surfaces at 14px and step controls down through 10px, 9px, 8px, and 7px.
- **Do** preserve model-specific WhatsApp context when a selection changes.
- **Do** honor system dark mode and reduced-motion preferences without removing information.
- **Do** collapse multi-column compositions into deliberate single-column mobile flows below 768px.

### Don't:
- **Don't** hide prices behind forms, modals, or enquiry-only calls to action.
- **Don't** introduce luxury-villa styling, polished gold accents, gradients, glassmorphism, or unsupported lifestyle claims.
- **Don't** add competing accent colors, rounded pills, bubbly cards, or deep nested containers.
- **Don't** use Archivo Black for explanatory paragraphs or long labels.
- **Don't** shadow every panel; reserve lift for selected, overlapping, mapped, or fixed elements.
- **Don't** let mobile collapse remove prices, exclusions, variant notes, or the direct enquiry path.
