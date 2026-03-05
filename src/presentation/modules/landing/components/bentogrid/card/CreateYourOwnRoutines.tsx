import { BentoCard } from '../BentoCard';

type Props = {
  className?: string;
};

export function CreateYourOwnRoutines({
  className,
}: Props) {
  return (
    <BentoCard
      className={`p-2 md:row-span-2 md:p-0 ${className}`}
    >
      <main className="grid h-full place-content-center p-4 md:p-0">
        <header className="font-funnel-display fg-accent max-w-45 text-center text-2xl leading-[1.1] font-bold">
          Create Your Own Routines
        </header>
      </main>
    </BentoCard>
  );
}
