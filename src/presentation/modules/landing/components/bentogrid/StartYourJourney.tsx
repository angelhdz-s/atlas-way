import { BentoCard } from './BentoCard';

type Props = {
  className?: string;
};

export function StartYourJourney({ className }: Props) {
  return (
    <BentoCard className={`p-4 md:row-span-2 ${className}`}>
      <main className="flex h-full flex-col gap-2 p-2 md:gap-4 md:p-0">
        <header className="font-funnel-display fg-strong flex-1 text-center text-2xl leading-none font-medium md:max-w-45 md:text-left">
          Start Your Journey Now
        </header>
        <footer className="text-center text-base leading-[1.2] font-light md:text-left">
          <p>Totally for free</p>
          <p className="fg-default text-sm">$0/month</p>
        </footer>
      </main>
    </BentoCard>
  );
}
