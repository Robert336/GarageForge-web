# GarageForge CSS Architecture

This document outlines the CSS architecture and conventions used in the GarageForge website.

## File Structure

```
src/css/
├── base.css              # CSS reset, design tokens, utility classes
├── layout.css            # Header, navigation, container utilities
├── pages/
│   └── home.css         # Page-specific imports and styles
└── components/
    ├── hero.css         # Hero section with video background
    ├── section-transition.css  # SVG section transitions
    ├── projects.css     # Project gallery and cards
    └── services.css     # Services grid and how-it-works steps
```

## Design Token System

All design tokens are centralized in `base.css` under the `:root` selector:

### Colors
- **Primary**: `--color-primary-orange` (#FF9500)
- **Secondary**: `--color-secondary-blue` (#3A72FF)  
- **Text**: `--color-dark-text` (#000000)
- **Muted**: `--color-text-muted` (#6c757d)

### Typography Scale
- `--text-xs` (0.75rem) to `--text-5xl` (3rem)
- Font weights: `--font-weight-normal` to `--font-weight-bold`
- Line heights: `--line-height-tight`, `--line-height-normal`, `--line-height-relaxed`

### Spacing Scale
- `--spacing-xs` (0.25rem) to `--spacing-4xl` (6rem)
- Semantic spacing: `--container-padding`, `--section-padding`, `--card-padding`

### Component Dimensions
- `--header-height`, `--logo-height`, `--corner-decoration-size`
- Mobile variants with `-mobile` suffix

## Naming Conventions

### BEM Methodology
We follow strict BEM (Block Element Modifier) naming:

```css
/* Block */
.hero { }

/* Element */
.hero__content { }
.hero__title { }

/* Modifier */
.hero__cta--primary { }
.hero__cta--secondary { }
```

### Utility Classes
Utility classes follow a consistent pattern:

```css
/* Spacing */
.p-md { padding: var(--spacing-md); }
.px-lg { padding-left/right: var(--spacing-lg); }
.mb-xl { margin-bottom: var(--spacing-xl); }

/* Display */
.flex { display: flex; }
.grid { display: grid; }
.hidden { display: none; }

/* Responsive variants */
.md\:hidden { } /* Hidden on medium screens and up */
.lg\:flex { }   /* Flex on large screens and up */
```

## Component Architecture

### Self-Contained Components
Each component file is self-contained with:
1. Component styles
2. Responsive breakpoints
3. Related sub-components
4. Documentation comments

### Mobile-First Approach
All responsive design follows mobile-first principles:

```css
/* Mobile styles (base) */
.component { }

/* Tablet and up */
@media (min-width: 768px) { }

/* Desktop and up */
@media (min-width: 1024px) { }
```

## Performance Optimizations

### CSS Custom Properties
Repeated values are stored as CSS custom properties to:
- Reduce bundle size
- Enable easy theming
- Maintain consistency

### Consolidated Media Queries
Media queries are consolidated within each component to:
- Reduce duplicate code
- Improve maintainability
- Better organization

### Utility-First Patterns
Common patterns are extracted to utility classes to:
- Reduce CSS bloat
- Speed up development
- Ensure consistency

## Breakpoint System

```css
--breakpoint-sm: 480px;   /* Small mobile */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1200px;  /* Large desktop */
```

## Best Practices

### 1. Use Design Tokens
Always use CSS custom properties instead of hardcoded values:

```css
/* ✅ Good */
padding: var(--spacing-lg);
color: var(--color-primary-orange);

/* ❌ Bad */
padding: 24px;
color: #FF9500;
```

### 2. Follow BEM Naming
Maintain consistent BEM naming throughout:

```css
/* ✅ Good */
.project-card__title { }
.project-card__description { }
.project-card--featured { }

/* ❌ Bad */
.project-title { }
.projectDescription { }
.featured-card { }
```

### 3. Mobile-First Media Queries
Write styles mobile-first, then enhance for larger screens:

```css
/* ✅ Good */
.component {
  font-size: var(--text-base);
}

@media (min-width: 768px) {
  .component {
    font-size: var(--text-lg);
  }
}

/* ❌ Bad */
.component {
  font-size: var(--text-lg);
}

@media (max-width: 767px) {
  .component {
    font-size: var(--text-base);
  }
}
```

### 4. Use Utility Classes for Common Patterns
Leverage utility classes for frequently used patterns:

```css
/* ✅ Good in HTML */
<div class="flex items-center justify-between p-lg">

/* ❌ Bad - creating custom CSS for common patterns */
.custom-flex-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
}
```

## Maintenance Guidelines

### Adding New Components
1. Create new file in `/components/` directory
2. Follow existing component structure
3. Use design tokens from `base.css`
4. Include responsive breakpoints
5. Add to page imports as needed

### Modifying Existing Styles
1. Check if change should be a design token
2. Update component file, not page file
3. Test across all breakpoints
4. Update documentation if needed

### Performance Considerations
1. Use CSS custom properties for repeated values
2. Consolidate media queries within components
3. Prefer utility classes over custom CSS
4. Minimize selector specificity
5. Remove unused CSS regularly

## Browser Support

The CSS architecture supports:
- Modern browsers with CSS custom properties support
- Mobile-first responsive design
- Progressive enhancement patterns
- Graceful degradation for older browsers