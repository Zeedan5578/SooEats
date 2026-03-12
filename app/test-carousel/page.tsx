import { Carousel } from '@/components/menu/carousel';
import { menuItems } from '@/lib/data/menu';

export default function TestCarouselPage() {
  return (
    <div className="min-h-screen bg-cafe-cream p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-cafe-brown-800 mb-8 text-center">
          Carousel Component Test
        </h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-cafe-brown-700 mb-4">
            Full Carousel with All Menu Items
          </h2>
          <Carousel items={menuItems} autoplayInterval={3000} />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-cafe-brown-700 mb-4">
            Fast Autoplay (1 second)
          </h2>
          <Carousel items={menuItems.slice(0, 3)} autoplayInterval={1000} />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-cafe-brown-700 mb-4">
            Single Item (No Autoplay)
          </h2>
          <Carousel items={[menuItems[0]]} />
        </div>

        <div className="bg-white rounded-lg p-6 [box-shadow:var(--shadow-soft)]">
          <h2 className="text-xl font-semibold text-cafe-brown-800 mb-4">
            Test Instructions
          </h2>
          <ul className="space-y-2 text-cafe-brown-600">
            <li>✓ Carousel should autoplay through items</li>
            <li>✓ Hover over carousel to pause autoplay</li>
            <li>✓ Click navigation arrows to manually navigate</li>
            <li>✓ Click dots to jump to specific slides</li>
            <li>✓ On mobile, swipe left/right to navigate</li>
            <li>✓ Manual navigation should pause autoplay</li>
            <li>✓ Smooth transitions between slides</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
