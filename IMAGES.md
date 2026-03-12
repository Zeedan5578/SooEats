# Image Assets Guide

This document lists all required images for the Cafe4Good website.

## Required Image Directories

Create the following directories in the `public` folder:

```
public/
├── menu/          # Menu item images
└── products/      # Collaboration product images
```

## Menu Images

Place the following images in `public/menu/`:

1. `avocado-toast.jpg` - Fresh avocado on artisan sourdough
2. `acai-bowl.jpg` - Organic acai bowl with toppings
3. `chicken-wrap.jpg` - Grilled chicken wrap
4. `buddha-bowl.jpg` - Quinoa buddha bowl
5. `poke-bowl.jpg` - Salmon poke bowl
6. `cold-brew.jpg` - Cold brew coffee
7. `green-smoothie.jpg` - Green smoothie
8. `matcha-latte.jpg` - Matcha latte

## Product Images

Place the following images in `public/products/`:

1. `coffee-blend.jpg` - Organic coffee blend package
2. `granola.jpg` - Artisan granola package
3. `juice-pack.jpg` - Cold-pressed juice pack
4. `energy-balls.jpg` - Protein energy balls

## Image Specifications

### Recommended Dimensions

- **Menu Items**: 800x600px (4:3 ratio)
- **Products**: 600x600px (1:1 ratio)
- **Hero Background**: 1920x1080px (16:9 ratio)

### Format

- Use JPEG for photos
- Optimize images before uploading (use tools like TinyPNG, ImageOptim)
- Target file size: < 200KB per image

### Quality

- High resolution for retina displays
- Good lighting and composition
- Consistent style across all images

## Current Placeholder

The hero section currently uses `/logo.jpeg` as a placeholder background. Replace this with a proper hero image showing:
- Cafe interior or exterior
- Food presentation
- Warm, inviting atmosphere

## Next.js Image Optimization

All images are automatically optimized by Next.js:
- Converted to WebP/AVIF formats
- Lazy loaded below the fold
- Responsive sizes generated
- Proper caching headers

No manual optimization needed beyond initial file size reduction.

## Adding New Images

1. Place image in appropriate directory (`public/menu/` or `public/products/`)
2. Update `lib/data/menu.ts` with the image path
3. Ensure filename matches the path in the data file
4. Test locally to verify image loads correctly

## Stock Photo Resources

If you need placeholder images for development:

- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images

Search terms: "cafe food", "healthy meal", "coffee", "smoothie bowl", etc.

## Image Attribution

If using stock photos, ensure proper attribution according to the license terms.
