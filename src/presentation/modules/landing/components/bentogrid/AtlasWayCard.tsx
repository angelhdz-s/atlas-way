import { BentoCard } from './BentoCard';

type Props = {
  className?: string;
};

export function AtlasWayCard({ className }: Props) {
  return (
    <BentoCard className={`p-4 md:col-span-2 md:row-span-3 ${className}`}>
      <main className="grid h-full place-content-center p-4 md:p-0">
        <span className="fg-white xs:text-5xl font-funnel-display text-6xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl">
          <span className="fg-strong">Atlas</span>
          <span className="fg-primary">Way</span>
        </span>
      </main>
    </BentoCard>
  );
}
