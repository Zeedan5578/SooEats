import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { ProductCard } from '@/components/cards/product-card';
import { collaborationProducts } from '@/lib/data/menu';

export const metadata = {
  title: 'SooEats x Cafe4Good - Collaboration',
  description: 'Discover our exclusive partnership products with SooEats',
};

export default function SooEatsPage() {
  return (
    <main>
      <SectionContainer>
        {/* Collaboration Banner */}
        <div className="bg-cafe-orange text-white rounded-card p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">SooEats x Cafe4Good</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We're excited to partner with SooEats to bring you exclusive, 
            high-quality products that align with our commitment to fresh, 
            healthy, and sustainable food.
          </p>
        </div>

        <PageHeader
          title="Our Collaboration Products"
          subtitle="Available now at Cafe4Good stores"
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborationProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </SectionContainer>
    </main>
  );
}
