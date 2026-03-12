# Cafe4Good Website

A modern, production-ready cafe website built with Next.js 16, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🎨 Warm cafe-themed design with custom color palette
- 🖼️ Interactive menu carousel with autoplay and swipe support
- 💬 Chat-style catering inquiry interface
- 📊 Nutrition information display with macro cards
- 📱 Fully responsive design
- ♿ Accessibility-focused with WCAG AA compliance
- 🚀 Optimized performance with Next.js App Router
- ✅ Comprehensive testing with Vitest and property-based tests
- 🎭 Smooth animations with Framer Motion
- 📝 Contact form with validation

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5+ (strict mode)
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Testing**: Vitest with React Testing Library and @fast-check/vitest
- **Utilities**: clsx, tailwind-merge

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Run tests once
npm run test:run
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Pages

- **Home** (`/`) - Hero section with navigation cards
- **Menu** (`/menu`) - Interactive carousel of food items
- **Catering** (`/catering`) - Chat interface for catering inquiries
- **Meal Plan** (`/meal-plan`) - Coming soon cards
- **SooEats** (`/soo-eats`) - Collaboration products
- **Nutrition** (`/nutrition`) - Detailed macro information
- **About** (`/about`) - Mission, Vision, and Story
- **Contact** (`/contact`) - Contact form and information

## Project Structure

```
cafe-website/
├── app/                    # Next.js App Router pages
│   ├── menu/              # Menu page with carousel
│   ├── catering/          # Catering page with chat
│   ├── meal-plan/         # Meal plan page
│   ├── soo-eats/          # Collaboration page
│   ├── nutrition/         # Nutrition information
│   ├── about/             # About pages
│   ├── contact/           # Contact page with form
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with cafe theme
├── components/
│   ├── ui/                # Core UI components (Button, Card, etc.)
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── menu/              # Menu-specific components (Carousel, Food Card)
│   ├── nutrition/         # Nutrition components (Macro Card)
│   ├── chat/              # Chat components (Chat Bubble)
│   └── cards/             # Card components (Coming Soon, Product)
├── lib/
│   ├── data/              # Centralized data (menu items, products)
│   └── utils.ts           # Utility functions
├── hooks/                 # Custom React hooks
├── public/                # Static assets (images, logo)
└── vitest.config.ts       # Vitest configuration
```

## Cafe Theme Colors

The project uses a warm, inviting cafe-themed color palette:

- **Brown Shades**: From light cream (#faf8f5) to dark coffee (#1a140d)
- **Accent Colors**: Warm orange (#d97706) for CTAs and highlights
- **Neutral Tones**: Cream (#f5f0e8) and beige (#e8dcc8)

Access colors in Tailwind: `bg-cafe-brown-500`, `text-cafe-orange`, etc.

## Testing

The project uses a dual testing approach:

- **Unit Tests**: Specific examples and edge cases
- **Property-Based Tests**: Universal properties across all inputs using @fast-check/vitest

```bash
# Run all tests
npm test

# Run tests once (CI mode)
npm run test:run

# Run tests with UI
npm run test:ui
```

All components have comprehensive test coverage including:
- Button, Card, Section Container, Page Header
- Navbar, Footer
- Food Card, Carousel
- Macro Card
- Chat Bubble
- Coming Soon Card, Product Card

## Data Management

Food data is centralized in `/lib/data/menu.ts` to ensure consistency across Menu and Nutrition pages.

```typescript
interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  macros: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
  category?: string;
}
```

## Performance

- Server Components by default
- Client Components only for interactive features (carousel, chat, animations)
- Next.js Image optimization with AVIF and WebP formats
- Lazy loading for below-the-fold content
- Code splitting and tree shaking
- Target: Lighthouse score 90+ on desktop

## Accessibility

- Semantic HTML throughout
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- WCAG AA color contrast (4.5:1 minimum)
- Form labels and validation
- Focus indicators on interactive elements

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## License

Private project for Cafe4Good.
