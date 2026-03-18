import Image from 'next/image';
import { FoodItem } from '@/lib/data/menu';

interface MacroCardProps {
  item: FoodItem;
}

const macros = (item: FoodItem) => [
  { label: 'Calories', value: `${item.macros.calories} kcal`, color: 'bg-orange-50 text-orange-600' },
  { label: 'Protein',  value: `${item.macros.protein}g`,      color: 'bg-green-50 text-green-600' },
  { label: 'Carbs',    value: `${item.macros.carbs}g`,         color: 'bg-brown-100 text-brown-600' },
  { label: 'Fats',     value: `${item.macros.fats}g`,          color: 'bg-orange-50 text-orange-500' },
];

export function MacroCard({ item }: MacroCardProps) {
  return (
    <div className="bg-white rounded-[var(--radius-card)] overflow-hidden [box-shadow:var(--shadow-soft)] hover:[box-shadow:var(--shadow-card)] hover:-translate-y-1 transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 to-transparent" />
        {item.category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-xs font-semibold text-brown-700 capitalize">
            {item.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-brown-900 mb-4">
          {item.name}
        </h3>

        {/* Macro grid */}
        <div className="space-y-3">
          {macros(item).map(({ label, value, color }) => (
            <div key={label} className="flex justify-between items-center">
              <span className="text-brown-500 text-sm font-medium">{label}</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${color}`}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
