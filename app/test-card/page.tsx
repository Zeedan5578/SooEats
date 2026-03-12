import { Card } from '@/components/ui/card';

export default function TestCardPage() {
  return (
    <div className="min-h-screen bg-cafe-brown-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-cafe-brown-800">Card Component Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Card without hover */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-cafe-brown-700">Card without hover</h2>
          <p className="text-cafe-brown-600">
            This card has soft shadows and rounded corners but no hover animation.
          </p>
        </Card>

        {/* Card with hover */}
        <Card hover={true} className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-cafe-brown-700">Card with hover</h2>
          <p className="text-cafe-brown-600">
            Hover over this card to see the subtle scale animation effect.
          </p>
        </Card>

        {/* Card with custom content */}
        <Card hover={true} className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-cafe-orange rounded-full flex items-center justify-center text-white text-2xl">
              ?
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cafe-brown-700">Coming Soon</h3>
              <p className="text-sm text-cafe-brown-600">Meal plan card example</p>
            </div>
          </div>
        </Card>

        {/* Card with image-like content */}
        <Card hover={true} className="overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-cafe-brown-300 to-cafe-brown-500"></div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-cafe-brown-700">Product Card</h3>
            <p className="text-sm text-cafe-brown-600">
              Example of a card with image and content
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
