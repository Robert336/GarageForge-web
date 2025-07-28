# GarageForge Image Assets

This directory contains all image assets for the GarageForge website. Images are organized by usage and optimized for web performance.

## Directory Structure

```
assets/images/
├── hero/           # Hero section background images
├── portfolio/      # Project portfolio photos
├── about/          # About page images (team, workspace, etc.)
├── favicon/        # Favicon files (multiple sizes)
└── logo/           # Logo variations (SVG, PNG)
```

## Image Requirements

### General Guidelines
- **Format**: Use WebP for photos, SVG for logos/icons, PNG for transparency
- **Size**: Maximum 200KB per image (as per AGENTS.md requirements)
- **Optimization**: Compress all images before adding
- **Naming**: Use descriptive, kebab-case names (e.g., `3d-printer-action.webp`)

### Specific Requirements

#### Portfolio Images (`portfolio/`)
- **Size**: 800x600px recommended
- **Format**: WebP preferred, JPG fallback
- **Content**: High-quality photos of completed 3D prints
- **Naming**: `project-name-description.webp`

#### Hero Images (`hero/`)
- **Size**: 1920x1080px for full-width backgrounds
- **Format**: WebP with JPG fallback
- **Content**: 3D printing in action, workspace shots
- **Naming**: `hero-page-name.webp`

#### About Images (`about/`)
- **Size**: Various (optimize for context)
- **Content**: Workspace photos, team photos, process shots
- **Naming**: `about-description.webp`

#### Logo Files (`logo/`)
- **Formats**: SVG (primary), PNG (fallback)
- **Variations**: 
  - `logo.svg` - Full logo
  - `logo-icon.svg` - Icon only
  - `logo-white.svg` - White version for dark backgrounds
  - `logo-horizontal.svg` - Horizontal layout

#### Favicon Files (`favicon/`)
- **Sizes**: 16x16, 32x32, 48x48, 180x180, 192x192, 512x512
- **Format**: ICO for legacy, PNG for modern
- **Files**:
  - `favicon.ico`
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon.png` (180x180)
  - `android-chrome-192x192.png`
  - `android-chrome-512x512.png`

## Implementation Notes

### CSS Background Images
```css
/* Use CSS custom properties for easy updates */
:root {
  --hero-bg: url('../assets/images/hero/hero-home.webp');
  --about-image: url('../assets/images/about/workspace.webp');
}

.hero {
  background-image: var(--hero-bg);
}
```

### HTML Images
```html
<!-- Use semantic alt text and loading attributes -->
<img src="../assets/images/portfolio/iot-device-housing.webp" 
     alt="Custom IoT device housing prototype in white PLA" 
     loading="lazy"
     width="800" 
     height="600">
```

### Responsive Images
```html
<!-- Provide multiple sizes for different screen densities -->
<picture>
  <source srcset="../assets/images/hero/hero-home.webp" type="image/webp">
  <img src="../assets/images/hero/hero-home.jpg" 
       alt="3D printer creating custom prototype">
</picture>
```

## Asset Replacement Workflow

1. **Add new images** to appropriate subdirectory
2. **Update CSS custom properties** in `src/css/base.css`
3. **Update HTML src attributes** as needed
4. **Test all pages** to ensure images load correctly
5. **Run Lighthouse audit** to verify performance impact

## Brand Consistency

All images should align with GarageForge brand values:
- **Innovation**: Show cutting-edge 3D printing technology
- **Quality**: High-resolution, professional photography
- **Local**: Include elements that suggest local/personal service
- **Accessible**: Ensure good contrast and readability

## Placeholder Images

Until real assets are available, the website uses CSS-generated placeholders with descriptive text. These are styled to match the final layout and can be easily replaced by updating the image paths.