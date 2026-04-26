import { DaysSelection } from '@/presentation/modules/landing/components/bentogrid/DaysSelection';
import { BentoCard } from '@/presentation/modules/landing/components/bentogrid/BentoCard';

type Props = {
  className?: string;
};

export function ScheduleYourSessions({ className }: Props) {
  return (
    <BentoCard
      className={`relative flex h-full flex-col gap-4 p-4 md:row-span-2 md:px-0 ${className}`}
    >
      <main className="font-funnel-display text-strong z-3 px-4 py-4 text-center text-2xl leading-none md:py-0 md:text-right">
        Schedule Your Sessions
      </main>
      <div className="absolute inset-0 h-full flex-1 overflow-hidden rounded-b-lg opacity-40">
        <figure className="absolute top-2 left-[50%] mx-auto w-fit translate-x-[-50%] mask-radial-from-black mask-radial-from-0 mask-radial-to-black/10 mask-radial-to-60% mask-radial-at-top">
          <DaysSelection />
        </figure>
      </div>
    </BentoCard>
  );
}
