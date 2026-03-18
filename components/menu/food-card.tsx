import Image from 'next/image';
import { FoodItem } from '@/lib/data/menu';

interface FoodCardProps {
  item: FoodItem;
}

export function FoodCard({ item }: FoodCardProps) {
  return (
    <div className="bg-white rounded-[var(--radius-card)] overflow-hidden [box-shadow:var(--shadow-soft)] hover:[box-shadow:var(--shadow-card)] hover:-translate-y-1 transition-all duration-300 group">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {item.category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-xs font-semibold text-brown-700 capitalize">
            {item.category}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-bold text-lg text-brown-900">{item.name}</h3>
          <span className="font-bold text-orange-500 text-base">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-brown-500 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}
