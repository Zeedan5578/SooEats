import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  accent?: boolean; // show orange underline accent
}

export function PageHeader({ title, subtitle, className, accent = true }: PageHeaderProps) {
  return (
    <div className={cn('mb-12 text-center', className)}>
      <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-brown-900 leading-tight">
        {title}
      </h1>
      {accent && (
        <div className="mt-4 mx-auto w-16 h-1 rounded-full gradient-orange" />
      )}
      {subtitle && (
        <p className="mt-5 text-lg text-brown-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
