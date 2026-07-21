import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * FeatureCard — card discreto: ícone, título e texto curto.
 * Sombra leve, borda mínima, hover sutil. Sem exageros.
 */
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group h-full rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-card',
        className
      )}
    >
      <span className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-accent/60 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
