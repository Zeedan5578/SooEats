import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { ComingSoonCard } from '@/components/cards/coming-soon-card';

export const metadata = {
  title: 'Meal Plans - Cafe4Good',
  description: 'Convenient meal plans tailored to your lifestyle - Coming Soon',
};

export default function MealPlanPage() {
  return (
    <main>
      <SectionContainer>
        <PageHeader
          title="Meal Plans"
          subtitle="Convenient meal plans tailored to your lifestyle"
        />

        {/* 2x2 Grid of Coming Soon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ComingSoonCard />
          <ComingSoonCard />
          <ComingSoonCard />
          <ComingSoonCard />
        </div>
      </SectionContainer>
    </main>
  );
}
