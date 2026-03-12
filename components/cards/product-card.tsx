import Image from 'next/image';
import { Product } from '@/lib/data/menu';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-card shadow-soft overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-56 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-xl font-semibold text-cafe-brown-800 mb-3">
          {product.name}
        </h3>

        {/* Product Description */}
        <p className="text-cafe-brown-600 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
}
