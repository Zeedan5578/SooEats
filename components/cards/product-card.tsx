import Image from 'next/image';
import { Product } from '@/lib/data/menu';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-[var(--radius-card)] overflow-hidden [box-shadow:var(--shadow-soft)] hover:[box-shadow:var(--shadow-card)] hover:-translate-y-1 transition-all duration-300 group">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/30 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-brown-900 mb-2">{product.name}</h3>
        <p className="text-brown-500 text-sm leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
}
