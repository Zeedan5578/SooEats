import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'About Us - Cafe4Good',
  description: 'Learn about our mission, vision, and story',
};

export default function AboutPage() {
  const sections = [
    {
      title: 'Our Mission',
      description: 'Discover what drives us to serve fresh, healthy food every day',
      href: '/about/mission',
      icon: '🎯',
    },
    {
      title: 'Our Vision',
      description: 'Learn about our goals for the future of healthy eating',
      href: '/about/vision',
      icon: '🔭',
    },
    {
      title: 'Our Story',
      description: 'Find out how Cafe4Good came to be',
      href: '/about/story',
      icon: '📖',
    },
  ];

  return (
    <main>
      <SectionContainer>
        <PageHeader
          title="About Cafe4Good"
          subtitle="Learn more about who we are and what we stand for"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link key={section.href} href={section.href}>
              <Card hover className="h-full cursor-pointer">
                <div className="p-8 text-center">
                  <div className="text-5xl mb-4">{section.icon}</div>
                  <h2 className="text-2xl font-semibold text-cafe-brown-800 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-cafe-brown-600">{section.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </main>
  );
}
