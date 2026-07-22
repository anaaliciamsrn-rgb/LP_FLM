import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * FeatureCard — card discreto: ícone, título e texto curto.
 * Sombra leve, borda mínima, hover sutil. Sem exageros.
 *
 * `accent` controla a cor do hover (borda/glow/ícone): 'primary' (azul,
 * padrão) ou 'danger' (vermelho). Mantém compatibilidade com os usos
 * existentes — quem não passar `accent` continua com o visual azul de antes.
 */
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  accent?: 'primary' | 'danger';
}

const ACCENT_STYLES = {
  primary: {
    hover:
      'hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(15,42,74,0.25),0_16px_32px_-12px_rgba(15,42,74,0.35)]',
    icon: 'group-hover:bg-primary group-hover:text-primary-foreground',
  },
  danger: {
    hover:
      'hover:border-danger/60 hover:shadow-[0_0_0_1px_rgba(220,38,38,0.35),0_16px_32px_-12px_rgba(220,38,38,0.35)]',
    icon: 'group-hover:bg-danger group-hover:text-danger-foreground',
  },
} as const;

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  accent = 'primary',
}: FeatureCardProps) {
  const styles = ACCENT_STYLES[accent];
  return (
    <div
      className={cn(
        'group h-full rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1',
        styles.hover,
        className
      )}
    >
      <span
        className={cn(
          'mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-accent/60 text-primary transition-colors',
          styles.icon
        )}
      >
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
