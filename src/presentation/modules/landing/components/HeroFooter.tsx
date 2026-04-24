'use client';

import { twMerge } from 'tailwind-merge';
import { redirect } from 'next/navigation';
import { Button } from '@/presentation/modules/button/components/Button';
import { nextAuthLogin } from '@/modules/auth/infrastructure/next-auth/auth.next-auth.config';
import { IconArrowUp } from '@/presentation/globals/components/icons/outline/IconArrowUp';

type Props = {
  className?: string;
  logged: boolean;
};

export function HeroFooter({ className, logged }: Props) {
  const handleClick = () => {
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
        onClick={handleClick}
        variantConfig={{
          color: 'primary',
          size: 'lg',
        }}
        className="mx-auto inline-flex min-h-14 items-center gap-2 rounded-full"
      >
        Try AtlasWay
        <span className="material-icons">
          <IconArrowUp className="size-5 rotate-90" />
        </span>
      </Button>
    </footer>
  );
}
