import { FoodCard } from '@/components/menu/food-card';
import { menuItems } from '@/lib/data/menu';

export default function TestFoodCardPage() {
  return (
    <div className="min-h-screen bg-cafe-brown-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-cafe-brown-800 mb-8">Food Card Component Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.slice(0, 6).map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
