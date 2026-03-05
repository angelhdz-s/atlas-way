import { IconsAnimation } from '../IconsAnimation';
import { BentoCard } from '../BentoCard';

type Props = {
  className?: string;
};

export function CarruselIcons({ className }: Props) {
  return (
    <BentoCard
      className={`hidden md:row-span-2 md:block ${className}`}
    >
      <main className="light:opacity-40 flex h-full flex-col items-center justify-center gap-3 opacity-20">
        <IconsAnimation direction="left" />
        <IconsAnimation direction="right" />
        <IconsAnimation direction="left" />
      </main>
    </BentoCard>
  );
}
