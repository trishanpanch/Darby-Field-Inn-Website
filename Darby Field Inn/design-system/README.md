# Darby Estate Design System

A premium design system built for the Darby Estate landing page.

## Structure
- `css/tokens.css`: Core design tokens (colors, spacing, shadows, radius).
- `css/typography.css`: Font families, sizes, weights, and base typography styles.
- `css/layout.css`: Layout utilities (container, grid, flex) and spacing classes.
- `css/components.css`: Reusable UI components (buttons, cards, inputs).
- `css/index.css`: Main entry point that imports all other files.

## Font Families
- **Display**: `'Playfair Display'`, serif
- **Sans-serif**: `'Inter'`, sans-serif

## Colors
- **Primary**: `#8B4513` (Saddle Brown)
- **Estate Gold**: `#A68966`
- **Estate Cream**: `#F9F7F2`
- **Estate Brown**: `#2D2926`
- **White**: `#FFFFFF`
- **Black/Dark**: `#1A1A1A`

## Design Tokens
The system uses CSS Custom Properties (Variables) for all tokens, making it easy to maintain and theme.

Example usage:
```css
.my-element {
  background-color: var(--color-primary);
  padding: var(--spacing-6);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
}
```
