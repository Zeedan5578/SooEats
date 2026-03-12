import Image from 'next/image';
import { FoodItem } from '@/lib/data/menu';

interface FoodCardProps {
  item: FoodItem;
}

export function FoodCard({ item }: FoodCardProps) {
  return (
    <div className="bg-white rounded-[var(--radius-card)] overflow-hidden [box-shadow:var(--shadow-soft)]">
      <div className="relative w-full h-64">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-cafe-brown-800">{item.name}</h3>
          <span className="text-lg font-bold text-cafe-orange">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-cafe-brown-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}
