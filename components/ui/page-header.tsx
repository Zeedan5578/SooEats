import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <div className={cn('mb-8 text-center', className)}>
      <h1 className="text-4xl font-bold tracking-tight text-cafe-brown-800 sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-cafe-brown-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
