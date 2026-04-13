# Design System Document: High-Tech AI Portfolio

## 1. Overview & Creative North Star
**Creative North Star: "The Neural Architect"**

This design system is built to convey a sense of hyper-intelligence and structural precision. Moving away from the generic "tech template," it adopts an editorial, high-contrast aesthetic that mimics the focused interface of an advanced AI system.

The system breaks standard web patterns by using **intentional asymmetry** and **tonal layering** to create depth. By leveraging large-scale typography and a restrictive, high-energy palette, we create a "Neural" environment where content feels curated and authoritative. We avoid the "boxed-in" feel of traditional grids, opting instead for overlapping elements and "ghost" containers that suggest an expansive, fluid digital workspace.

---

## 2. Colors & Surface Logic

The color strategy is rooted in "Deep Dark" immersion. We use a monolithic background accented by a high-frequency lime green to guide the user’s cognitive flow.

### The Palette
*   **Background (`#0e0e0e`):** The absolute foundation. It is not just "dark mode"; it is a void that makes content pop.
*   **Primary (`#f3ffca`) / Primary Container (`#cafd00`):** Our signature high-tech lime. Use this sparingly for maximum impact—CTAs, critical highlights, and active states.
*   **Neutral Tiers:** `surface-container-low` (`#131313`) through `highest` (`#262626`).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or structural division. Separation must be achieved through:
1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Vertical Breathing Room:** Utilizing the Spacing Scale to let white space (or "dark space") act as the divider.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent layers. 
*   **The Nesting Principle:** A `surface-container-highest` card should sit inside a `surface-container-low` section. This creates a natural "lift" without the need for dated drop shadows.
*   **The Glass & Gradient Rule:** For hero sections or primary CTAs, use a subtle linear gradient from `primary` to `primary-container` (at 15% opacity) to provide a "glow" that feels like light emitting from the screen.

---

## 3. Typography: The Editorial Voice

We utilize a dual-font system to balance technical precision with bold impact.

*   **Display & Headlines (Space Grotesk):** This is our "Architect" voice. It is wide, geometric, and uncompromising. Use `display-lg` (3.5rem) for hero statements to demand attention.
*   **Body & Labels (Inter):** Our "Operator" voice. Inter provides high legibility at small scales. Use `label-md` for technical metadata and `body-lg` for narrative descriptions.

**Hierarchy as Identity:** Use `on_surface_variant` (muted gray) for secondary body text to ensure that when `primary` lime green text is used, it acts as a "laser pointer" for the eye.

---

## 4. Elevation & Depth

We move beyond Material Design’s standard shadows in favor of **Tonal Layering** and **Atmospheric Glass.**

*   **The Layering Principle:** Depth is cumulative. 
    *   Level 0: `surface` (The Floor)
    *   Level 1: `surface-container-low` (Content Blocks)
    *   Level 2: `surface-container-high` (Interactive Cards)
*   **Ambient Shadows:** If a floating element (like a Modal or Tooltip) requires a shadow, use a large 40px blur with only 6% opacity. The shadow color must be the `background` color (`#0e0e0e`), creating a "soft occlusion" effect rather than a harsh drop-shadow.
*   **The "Ghost Border" Fallback:** If a container requires definition against an identical background, use the `outline-variant` token at **15% opacity**. This creates a "glimmer" edge rather than a box.
*   **Glassmorphism:** Apply `backdrop-filter: blur(12px)` to `surface-container-highest` elements with 80% opacity to create a "frosted tech" feel that integrates the background into the foreground.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary_container` (#cafd00) with `on_primary_container` text. Roundedness: `md`. 
*   **Secondary (Ghost):** `outline-variant` border (at 20% opacity) with `primary` text. No fill.
*   **Interaction:** On hover, Primary buttons should emit a soft glow using a spread shadow of the Primary color at 20% opacity.

### Glassmorphic Cards
*   **Style:** `surface-container-low` background with a 15% opacity `outline-variant` "Ghost Border."
*   **Layout:** Forbid divider lines. Use `title-md` for headings and `label-sm` for tags, separated by 1.5rem of vertical space.

### Tech Badges (Tags)
*   **Style:** Pill-shaped (`full` roundedness).
*   **Color:** `surface-container-highest` background with `primary` text. These should look like "lit indicators" on a control panel.

### Inputs & Fields
*   **Style:** Underline-only or subtle "low-profile" containers (`surface-container-low`). 
*   **Focus State:** The border transitions from muted `outline-variant` to high-contrast `primary` lime.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme scale. Pair a 3.5rem headline with 0.75rem metadata for a sophisticated editorial look.
*   **Do** use "Optical Centering." AI portfolios should feel precise; ensure icons and text are visually balanced, not just mathematically centered.
*   **Do** lean into asymmetry. Let images or cards bleed off the edge of the grid to suggest a larger technical world.

### Don't:
*   **Don't** use 100% white text. Use `on_surface` (a very slightly off-white) to prevent "halo" eye strain on deep black backgrounds.
*   **Don't** use traditional "Card Shadows." If a card needs to stand out, make the background one step lighter on the surface-container scale.
*   **Don't** use icons without purpose. Every visual element must feel like a functional part of an AI interface.