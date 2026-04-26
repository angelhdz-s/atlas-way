import { BentoCard } from '@/presentation/modules/landing/components/bentogrid/BentoCard';

type Props = {
  className?: string;
};

export function AtlasWayCard({ className }: Props) {
  return (
    <BentoCard className={`p-4 md:col-span-2 md:row-span-3 ${className}`}>
      <main className="grid h-full place-content-center p-4 md:p-0">
        <span className="xs:text-5xl font-funnel-display text-6xl font-extrabold tracking-tighter text-white sm:text-7xl lg:text-8xl">
          <span className="text-strong">Atlas</span>
          <span className="text-primary">Way</span>
        </span>
      </main>
    </BentoCard>
  );
}
