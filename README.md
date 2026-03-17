# 🏔️ The Darby Field Inn - Project Documentation

This project features a luxury digital experience for **The Darby Field Inn**, featuring a custom-built modular design system and a suite of expanded pages for the estate, its history, and special events.

## 🏗️ Project Architecture

The project is structured to be "design-system first," ensuring that styles are reusable and consistent across all pages.

```text
/
├── index.html                # Main landing page (Home)
├── Estate page/              
│   └── the-estate.html      # The Inn / Estate details
├── History page/             
│   └── history.html         # The storied past of the Inn
├── Events page/              
│   └── events.html          # NEW: Dedicated Events & Gatherings page
├── assets/                   
│   └── images/              # Consolidated project visuals & brand assets
└── design-system/            
    ├── README.md             # Developer guide for the design system
    └── css/
        ├── index.css         # Main entry point
        ├── tokens.css        # Colors, spacing, shadows (VARIABLES)
        ├── typography.css    # Font families and global type styles
        ├── layout.css        # Grid, flexbox, and container utilities
        └── components.css    # Reusable UI elements (Buttons, Cards)
```

---

## 🌟 Key Features & Improvements

### 1. New "Events" Page
- **Purpose**: A dedicated landing page for private gatherings, weddings, and corporate retreats.
- **Design**: Features an immersive hero section showcasing the property's 2 acres of mountain wilderness and 8,400 sq ft homestead.

### 2. Synchronized Hero Sections
All major pages (Home, Inn, History, Events) now share a unified Hero design language:
- Immersive high-resolution imagery.
- Consistent gradient overlays for optimal text contrast.
- Standardized vertical padding and font scaling for a premium feel.

### 3. Unified Branding & UI
- **Brand Icon**: Replaced inconsistent logos with a unified Material Design "Castle" icon across the entire site.
- **Footers**: Standardized centered footer layouts with consistent social and capacity information.
- **Navigation**: Synchronized headers with live, cross-page links for seamless exploration.

---

## 🎨 Visual Identity (from `tokens.css`)

- **Primary Brown** (`--color-primary`): `#8B4513` - Primary action color.
- **Estate Gold** (`--color-estate-gold`): `#A68966` - Signature brand accent.
- **Estate Dark** (`--color-estate-brown`): `#2D2926` - Main heading color.
- **Typography**: `Playfair Display` (Serif) for headings and `Inter` (Sans-Serif) for readability.

---

## 🛠️ Usage & Development

### Adding Content
The site uses a custom utility system. To maintain consistency, use predefined tokens in `design-system/css/tokens.css`.

### Structural Updates
When adding new pages, ensure the fixed header `padding-top: 5rem` is maintained in the Hero section to account for the sticky navigation bar.

---

## ✅ Quality & Optimization
- **Asset Migration**: All loose images and visuals have been compartmentalized into `/assets/images/` for a cleaner repository.
- **SEO**: Semantic HTML5 structure and optimized meta tags implemented on every page.

**Developed by Antigravity**
