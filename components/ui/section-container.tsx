import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <section className={cn('mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8', className)}>
      {children}
    </section>
  );
}
