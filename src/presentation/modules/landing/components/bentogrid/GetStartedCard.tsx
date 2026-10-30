import { BentoCard } from '@/presentation/modules/landing/components/bentogrid/BentoCard';
import { Link } from '@/presentation/modules/button/components/Link';
import { Icon } from '@/presentation/modules/icon/components/Icon';

type Props = {
  className?: string;
};

export function GetStartedCard({ className }: Props) {
  return (
    <BentoCard className={`xs:grid hidden place-content-center md:row-span-2 ${className}`}>
      <Link
        href="/dashboard"
        variant={{
          size: 'lg',
        }}
        className="from-accent to-primary text-fg-strong-dark border-back outline-bd-default flex min-h-14 items-center gap-2 rounded-full border-4 bg-radial-[50%_50%_at_50%_0%] outline"
      >
        <Icon
          icon="rocket"
          className="-ml-2 size-7"
          variant={{ size: 'md', weight: 'moderate' }}
        />
        <span className="text-lg whitespace-nowrap">Start Now</span>
      </Link>
    </BentoCard>
  );
}
