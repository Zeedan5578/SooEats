import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { Carousel } from '@/components/menu/carousel';
import { menuItems } from '@/lib/data/menu';

export const metadata = {
  title: 'Menu - Cafe4Good',
  description: 'Explore our delicious selection of fresh, healthy meals',
};

export default function MenuPage() {
  return (
    <main>
      <SectionContainer>
        <PageHeader
          title="Our Menu"
          subtitle="Discover our selection of fresh, healthy, and delicious meals"
        />
        <Carousel items={menuItems} />
      </SectionContainer>
    </main>
  );
}
