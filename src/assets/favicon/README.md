# Favicon Assets

This directory will contain all favicon and app icon files for GarageForge.

## Required Files

When the logo is ready, generate these files:

### Standard Favicons
- `favicon.ico` (16x16, 32x32, 48x48 multi-size ICO)
- `favicon-16x16.png`
- `favicon-32x32.png`

### Apple Touch Icons
- `apple-touch-icon.png` (180x180)

### Android Chrome Icons
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

### Web App Manifest
- `site.webmanifest` (already created)

## HTML Implementation

Add to `<head>` section of all pages:

```html
<!-- Favicons -->
<link rel="icon" type="image/x-icon" href="../assets/favicon/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="../assets/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../assets/favicon/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="../assets/favicon/apple-touch-icon.png">
<link rel="manifest" href="../assets/favicon/site.webmanifest">
<meta name="theme-color" content="#3A0CA3">
```

## Generation Tools

Recommended tools for generating favicons from logo:
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Favicon.io](https://favicon.io/)

Use the GarageForge logo with the "G+F gear/filament" concept when available.