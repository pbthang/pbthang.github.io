---
name: "Thang Pham Portfolio"
description: "A recruiter-facing portfolio rendered as a populated matte-navy PCB."
colors:
  soldermask: "#0E1420"
  soldermask-raised: "#141C2B"
  silkscreen: "#F2F4F7"
  silkscreen-muted: "#A3AEBE"
  steel-reference: "#848E9D"
  enig-gold: "#C9A24A"
  bright-gold: "#E3C46E"
  copper-trace: "#7A5E2A"
  board-void: "#070A12"
  error-copper: "#E0785A"
  error-copper-light: "#F0A58C"
typography:
  display:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "clamp(1.5rem, 2.6vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.04em"
  title:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  field: "2px"
  passive: "3px"
  component: "4px"
  board: "6px"
  media: "12px"
  round: "9999px"
spacing:
  board-margin: "clamp(0.5rem, 1.5vw, 1.25rem)"
  page-x: "clamp(1rem, 4vw, 4rem)"
  title-block-y: "0.85rem"
  section-y: "clamp(3.5rem, 8vw, 7rem)"
  component-pad: "1.75rem clamp(1.25rem, 3vw, 2.25rem)"
  card-pad: "1.25rem"
components:
  board-shell:
    backgroundColor: "{colors.soldermask}"
    textColor: "{colors.silkscreen}"
    rounded: "{rounded.board}"
  component-card:
    backgroundColor: "{colors.soldermask-raised}"
    textColor: "{colors.silkscreen}"
    rounded: "{rounded.component}"
    padding: "{spacing.component-pad}"
  card-edge-resume:
    backgroundColor: "{colors.soldermask-raised}"
    textColor: "{colors.bright-gold}"
    rounded: "0"
    padding: "0.55rem 0.9rem 0.65rem"
    typography: "{typography.label}"
  testpoint-link:
    backgroundColor: "transparent"
    textColor: "{colors.silkscreen}"
    rounded: "{rounded.round}"
    typography: "{typography.label}"
  send-button:
    backgroundColor: "{colors.enig-gold}"
    textColor: "{colors.soldermask}"
    rounded: "{rounded.field}"
    padding: "0.85rem 1.4rem 1.05rem"
    typography: "{typography.label}"
  field-input:
    backgroundColor: "{colors.soldermask}"
    textColor: "{colors.silkscreen}"
    rounded: "{rounded.field}"
    padding: "0.7rem 0.85rem"
    typography: "{typography.body}"
  skill-pin:
    backgroundColor: "{colors.soldermask}"
    textColor: "{colors.silkscreen}"
    rounded: "{rounded.field}"
    padding: "0.45rem 0.8rem 0.45rem 0.6rem"
    typography: "{typography.label}"
---

# Design System: Thang Pham Portfolio

## Overview

**Creative North Star: "Silkscreen PCB"**

The portfolio is a populated circuit board: the page is one continuous matte navy soldermask, sections are placed components, links are test points, measurable proof is exposed gold plating, and the navigation doubles as routed netlist. The built world is top-down and technical without becoming a schematic; it keeps recruiter content legible while making the interface feel manufactured, inspected, and ready for service.

The system uses a small material vocabulary and repeats it strictly. White silkscreen prints identity, labels, section headers, and outlines. ENIG gold is scarce and reserved for live state, resume affordances, proof metrics, pads, form submission, and active progress. Copper traces connect regions with 45-degree bends and via rings, while tonal soldermask layers and fine borders carry most depth.

**Key Characteristics:**
- Continuous board shell with mounting holes, fiducials, a sticky title block, and a left bus.
- White silkscreen typography over matte navy soldermask; gold appears as conductive material, not decoration.
- Component cards use chip outlines, pin-1 markers, reference designators, pads, traces, and test points.
- One authored entrance motion: pick-and-place descent for components as they enter view.

## Colors

The palette is a restrained PCB material set: two dark soldermask surfaces, white silkscreen, muted inspection gray, copper routing, and one gold accent.

### Primary
- **Matte Navy Soldermask**: the board, page background, input fill, and negative space. It is the default environment for every surface.
- **ENIG Gold**: the only accent material. It marks resume connectors, active navigation, form submission, selected vias, hover halos, square pads, and numeric proof.

### Secondary
- **Copper Trace**: routing lines, pin leads, via outlines, borders around plated controls, and non-active conductive paths. Copper stays structural and subdued.

### Neutral
- **Raised Soldermask**: component bodies, sticky title-block backing, console chrome, and cards that need to sit above the board plane.
- **White Silkscreen**: primary text, section names, labels, outlines, pin-1 dots, and printed legends.
- **Muted Silkscreen**: secondary copy, organization names, descriptions, metadata, and inactive navigation text.
- **Steel Reference Gray**: reference designators, via labels, optional-copy notes, and subdued production marks.
- **Board Void**: image wells, laptop screen background, dark holes, and deep cut-ins.
- **Error Copper**: invalid field borders and error messages; it is the only non-system warning color in the build.

### Named Rules

**The One Accent Metal Rule.** Gold is the only bright accent; do not introduce colored highlights for categories, cards, or sections.

**The Conductive Color Rule.** Gold and copper must behave like material: use them for pads, traces, connectors, live state, and proof, not for arbitrary decoration.

## Typography

**Display Font:** Schibsted Grotesk with system sans fallback  
**Body Font:** Schibsted Grotesk with system sans fallback  
**Label/Mono Font:** Azeret Mono with ui-monospace fallback

**Character:** Schibsted Grotesk carries human-readable recruiter content with dense but approachable engineering clarity. Azeret Mono is the silkscreen layer: reference designators, net names, dates, labels, console lines, role text, chips, and actions.

### Hierarchy
- **Display** (700, responsive from large mobile to oversized desktop, tight line-height): the hero name only.
- **Headline** (600, responsive, uppercase mono): section headers and major board labels.
- **Title** (600, compact sans): chip, module, card, and form titles.
- **Body** (400, 1.0625rem, 1.6 line-height): main explanatory copy, with `.measure` constrained to roughly 68 characters.
- **Dense Body** (400, 0.9375rem to 1rem): card descriptions, organization labels, passive details, and supporting text.
- **Label** (500-600, 0.625rem to 0.8125rem, tracked uppercase mono): refdes marks, nav nets, form labels, status text, dates, and connector actions.

### Named Rules

**The Two-Layer Type Rule.** Use Schibsted Grotesk for human prose and Azeret Mono for printed board information; do not add a third family.

**The Printed Label Rule.** Labels, navigation, reference designators, dates, and controls should feel printed or etched: small, uppercase where appropriate, tracked, and precise.

## Layout

The page is one board inside a narrow viewport margin, with a 6px rectangular outline and four plated mounting holes. Content aligns to a shared 78rem maximum width and uses responsive horizontal padding. Sections stack vertically with generous top padding, each announced by a silkscreen heading line that receives a routed copper trace from the left edge.

The sticky title block is a three-column grid: board identity, net navigation, and the resume card-edge connector. On small screens it becomes a two-row header with horizontally scrollable nav. On desktop, a fixed left bus appears beside the board; its gold fill tracks scroll progress and its vias map to the section anchors. Below 1100px, progress shifts to the gold trace under the sticky title block.

Hero layout is asymmetric: intro and console stack in the left column while the laptop footprint occupies the right column; under 900px it becomes intro, laptop, console. Project modules use a 12-column board grid where the first two modules span six columns and later modules span three; under 900px modules become halves, then full width under 600px. Contact is a two-column test-point/form grid that collapses to one column under 900px.

## Elevation & Depth

The system is mostly flat and manufactured. Depth comes from soldermask tonal layering, hairline silkscreen borders, dashed footprints, conductive glows, plated rings, clipped traces, and a restrained component shadow. The only recurring shadow vocabulary is functional: component mass, active conductive glow, and focus/hover halos.

### Shadow Vocabulary
- **Component Mass** (`0 10px 30px -18px rgba(0, 0, 0, 0.9)`): the default shadow for placed components.
- **Gold Net Glow** (`0 0 10px rgba(201, 162, 74, 0.55)` to `0 0 24px rgba(201, 162, 74, 0.55)`): active progress, live vias, hover pads, and the send button.
- **Focus Ring** (`0 0 0 3px rgba(201, 162, 74, 0.2)`): form field focus after the default outline is intentionally removed.
- **Pin Isolation** (`0 0 0 3px var(--board)`): image-card pin markers that must remain legible over media.

### Named Rules

**The Flat Board Rule.** Do not use generic app-card elevation stacks; surfaces sit on the board and prove hierarchy through material contrast, borders, traces, and rare glows.

## Shapes

The form language is machined and nearly rectangular. The board shell uses a small 6px radius; cards, chip packages, laptop footprint, console, playlist jack, and form containers use 4px; passive subcomponents use 3px; fields, skill pins, and the submit connector use 2px. Circles are reserved for vias, plated holes, fiducials, social icon buttons, and test-point rings.

Traces should use straight lines, hard turns, and 45-degree chamfers. Connectors use clipped or fingered edges: nav traces are skewed strips, resume and submit controls expose repeating gold or negative fingers, and component borders use pin-1 dots. Rounded pill language is not part of the board except where physics demands a drilled circle.

## Components

### Buttons
- **Shape:** connector-like, nearly square corners (2px), with a flat top and fingered bottom edge for the primary submit action.
- **Primary:** gold fill on soldermask text, mono uppercase label, compact tracked lettering, copper/gold outline glow, and finger bars cut into the bottom edge.
- **Hover / Focus:** brighten to the lighter gold, increase conductive glow, move the arrow icon 3px right, and retain the gold focus ring.
- **Secondary / Ghost:** use test-point links instead of conventional ghost buttons: ring pad plus label, transparent background, gold on hover.

### Chips
- **Style:** skill chips are soldermask cells with 1px silkscreen borders, 2px radius, a square gold pad, mono label, and compact internal padding.
- **State:** hover shifts only border and a faint gold wash; chips do not become colored pills.

### Cards / Containers
- **Corner Style:** component cards use sharp softened corners (4px).
- **Background:** raised soldermask on matte board.
- **Shadow Strategy:** use Component Mass plus borders, not app-card elevation.
- **Border:** 1px silkscreen line; important/current items may upgrade border or pin marker to gold.
- **Internal Padding:** major chips and forms use the component padding scale; project module bodies use smaller 1.25rem padding.

### Inputs / Fields
- **Style:** dark soldermask fill, 1px silkscreen border, white text, 2px radius, and inherited body type.
- **Focus:** remove default field outline, turn border gold, add a subtle gold ring.
- **Error / Disabled:** invalid fields use error copper; disabled submit falls back to steel background with white text.

### Navigation
- **Style:** sticky title block with blurred soldermask backing, uppercase mono net labels, copper line under each net, and gold current state.
- **Progress:** desktop uses the fixed left bus and vias; smaller screens use a gold title-block trace.
- **Mobile:** nav remains horizontal and scrollable, not a hamburger.

### PCB Board Shell

The board wrapper is a visible artifact: 6px shell, line border, four plated mounting holes, global soldermask weave, and clipped overflow. The footer completes the board edge with fiducials, icon pads, section nets, and revision stamp.

### Terminal / Laptop

The hero laptop footprint is `U1`; the 3D laptop renders inside a dashed footprint with bottom pins and a console mirrored into the laptop screen. If WebGL fails, the footprint remains and the DOM console carries the bio. The console uses mono text, gold command lines, white output lines, and a blinking caret.

## Do's and Don'ts

### Do:
- **Do** keep every new section anchored to the board metaphor with a reference designator, a trace/via relationship, or a printed legend.
- **Do** reserve gold for active state, proof metrics, connectors, pads, and primary action.
- **Do** use Azeret Mono for metadata, dates, controls, section labels, and board markings.
- **Do** maintain generous section spacing and the shared 78rem content rail.
- **Do** honor reduced motion by collapsing authored entrance and typing effects to static content.

### Don't:
- **Don't** add a second accent color for project categories, skill groups, or status states.
- **Don't** turn chips or links into rounded SaaS pills; the built language is pads, pins, traces, and connectors.
- **Don't** use soft glassmorphism, gradient blobs, neumorphism, or generic portfolio cards.
- **Don't** animate multiple decorative systems at once; pick-and-place descent is the authored component motion.
- **Don't** publish visual guidance that contradicts the shipped PCB devices: vias, traces, fiducials, holes, and connector fingers are native to the world.
