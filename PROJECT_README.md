# 🏔️ The Darby Estate - Project Documentation

This project contains a high-end, luxury landing page for **The Darby Estate**, built with a custom, modular design system.

## 🏗️ Project Architecture

The project is structured to be "design-system first," ensuring that styles are reusable, maintainable, and easily updatable.

```text
/stitch_the_darby_estate_landing_page/
├── index.html                # Main landing page (production-ready)
├── screen.png                # Original reference design image
├── code.html                 # legacy/reference code
└── design-system/            # Core brand assets and styles
    ├── README.md             # Developer guide for the design system
    └── css/
        ├── index.css         # Main entry point (imports all modules)
        ├── tokens.css        # Colors, spacing, shadows, and radii (VARIABLES)
        ├── typography.css    # Font families, sizes, and global type styles
        ├── layout.css        # Grid, flexbox, and container utilities
        └── components.css    # Reusable UI elements (Buttons, Cards, Badges)
```

---

## 🎨 Visual Identity & Elements

### 1. Color Palette (found in `tokens.css`)
- **Primary Brown** (`--color-primary`): `#8B4513` - Used for main action buttons.
- **Estate Gold** (`--color-estate-gold`): `#A68966` - Signature accent for icons and badges.
- **Estate Cream** (`--color-estate-cream`): `#F9F7F2` - Warm background for content sections.
- **Estate Dark** (`--color-estate-brown`): `#2D2926` - Deep text color for headings.

### 2. Typography (found in `typography.css`)
- **Display Font**: `Playfair Display` (Serif) - Used for elegant, high-impact headings.
- **Body Font**: `Inter` (Sans-Serif) - Used for clean, modern readability.
- **Signature Style**: `.serif-italic` - A specific brand style for italicized serif accents.

### 3. Key Layout Components
- **Overlapping Grid**: Located in the "Concept" section of `index.html`. It uses a 12x12 CSS grid system for the premium layering effect.
- **Capacity Badge**: A floating circular element in the footer built with backdrop filters for a "glass" effect.
- **Floating Navigation**: A fixed header with a subtle blur effect for modern aesthetics.

---

## 🛠️ Usage Instructions

### Adding New Sections
To create a new section that follows the brand, use the utility classes provided:
```html
<section class="py-24 bg-cream">
  <div class="container text-center">
    <h2 class="serif-italic">New Experience</h2>
    <button class="button">See More</button>
  </div>
</section>
```

### Making Global Branding Changes
Update the variables in `design-system/css/tokens.css`. Changes to `--color-primary` or `--font-family-display` will automatically ripple through the entire site.

---

## ✅ Quality Assurance
- **Tested with**: Automated browser agents for layout integrity.
- **Performance**: Zero external dependencies (except for Google Fonts and Material Icons).
- **SEO**: Implemented semantic HTML headers and descriptive meta tags.

**Developed by Antigravity**
