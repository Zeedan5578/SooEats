import Image from 'next/image';
import { FoodItem } from '@/lib/data/menu';

interface MacroCardProps {
  item: FoodItem;
}

export function MacroCard({ item }: MacroCardProps) {
  return (
    <div className="bg-white rounded-card shadow-soft overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Food Image */}
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Food Name */}
        <h3 className="text-xl font-semibold text-cafe-brown-800 mb-4">
          {item.name}
        </h3>

        {/* Macro Information */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-cafe-brown-600 font-medium">Calories</span>
            <span className="text-cafe-brown-800 font-semibold">
              {item.macros.calories} kcal
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-cafe-brown-600 font-medium">Protein</span>
            <span className="text-cafe-brown-800 font-semibold">
              {item.macros.protein}g
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-cafe-brown-600 font-medium">Carbs</span>
            <span className="text-cafe-brown-800 font-semibold">
              {item.macros.carbs}g
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-cafe-brown-600 font-medium">Fats</span>
            <span className="text-cafe-brown-800 font-semibold">
              {item.macros.fats}g
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
