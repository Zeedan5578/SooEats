import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { MacroCard } from '@/components/nutrition/macro-card';
import { menuItems } from '@/lib/data/menu';

export const metadata = {
  title: 'Nutrition Information - Cafe4Good',
  description: 'Detailed nutritional information for all our dishes',
};

export default function NutritionPage() {
  return (
    <main>
      <SectionContainer>
        <PageHeader
          title="Nutrition Information"
          subtitle="Detailed macro breakdown for all our menu items"
        />

        {/* Macro Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <MacroCard key={item.id} item={item} />
          ))}
        </div>
      </SectionContainer>
    </main>
  );
}
