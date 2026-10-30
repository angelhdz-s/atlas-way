'use client';

import { twMerge } from 'tailwind-merge';
import { redirect } from 'next/navigation';
import { Button } from '@/presentation/modules/button/components/Button';
import { nextAuthLogin } from '@/modules/auth/infrastructure/next-auth/auth.next-auth.config';
import { Icon } from '@/presentation/modules/icon/components/Icon';

type Props = {
  className?: string;
  logged: boolean;
};

export function HeroFooter({ className, logged }: Props) {
  const goToDashboard = () => {
    if (logged) return redirect('/dashboard');
    return nextAuthLogin(true);
  };
  return (
    <footer
      className={twMerge(
        'animate-fade-down animate-delay-200 animate-ease-out flex items-center gap-4',
        className
      )}
    >
      <Button
        onClick={goToDashboard}
        variant={{
          color: 'primary',
          size: 'lg',
        }}
        className="mx-auto inline-flex min-h-14 items-center gap-2 rounded-full"
      >
        Try AtlasWay
        <span className="material-icons">
          <Icon
            icon="arrow-up"
            className="rotate-90"
            variant={{ size: 'md', weight: 'moderate' }}
          />
        </span>
      </Button>
    </footer>
  );
}
