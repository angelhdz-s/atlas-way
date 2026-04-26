'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import {
  type SidebarNavLinkVariant,
  sidebarNavLinkVariants,
} from '@/presentation/modules/sidebar/config/sidebar.nav-link.variants';

export function NavLink({
  href,
  label,
  children,
  className = '',
  variant,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  variant?: SidebarNavLinkVariant;
}) {
  const url = usePathname();
  const active = url === href || (url.startsWith(href) && href !== '/' && href !== '/dashboard');
  const navLinkVariant = sidebarNavLinkVariants({ ...variant, active });
  return (
    <Link href={href} className={twMerge(navLinkVariant, className)}>
      {children}
      <span
        className={twMerge(
          'bg-fill-base border-bd-default light:shadow-black/5 shadow-back/50 shadow-lg',
          'absolute inset-y-0 left-14 my-auto hidden h-fit w-fit rounded-lg border px-3 py-1.5 transition-colors',
          'group-hover:text-strong group-hover:block',
          active
            ? 'bg-primary group-hover:text-strong-dark text-strong-dark'
            : 'lg:group-hover:text-default',
          'lg:static lg:inset-auto lg:left-auto lg:inline lg:h-fit lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none'
        )}
      >
        {label}
      </span>
    </Link>
  );
}
