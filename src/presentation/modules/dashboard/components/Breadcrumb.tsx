'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/presentation/modules/icon/components/Icon';

function joinUrlParts(urls: string[], index: number): string {
  return urls.slice(0, index + 1).join('');
}

function ListBreadcrumbs({
  parts,
  pathname,
}: {
  parts: { name: string; url: string }[];
  pathname: string;
}) {
  return parts.map(({ name, url }, index) => {
    const part = name.charAt(0).toUpperCase() + name.slice(1);
    const completeUrl = joinUrlParts(
      parts.map((p) => p.url),
      index
    );
    if (completeUrl === pathname)
      return (
        <li key={`${name}-${url}`} className="flex items-center gap-1">
          {index > 0 && (
            <Icon
              icon="chevron-right"
              className="size-3"
              variant={{ size: 'sm', weight: 'medium' }}
            />
          )}
          <span className="p-2">{part}</span>
        </li>
      );

    return (
      <li key={`${name}-${url}`} className="flex items-center gap-1">
        {index > 0 && (
          <Icon
            icon="chevron-right"
            className="size-3"
            variant={{ size: 'sm', weight: 'medium' }}
          />
        )}
        <Link href={completeUrl} className="p-2 hover:text-current/50">
          {part}
        </Link>
      </li>
    );
  });
}

export function Breadcrumb({ className = '' }: { className?: string }) {
  const pathname = usePathname();
  const pathParts = pathname
    .split('/')
    .slice(1)
    .map((part, index) => {
      if (index === 0)
        return {
          name: 'home',
          url: `/${part}`,
        };
      return {
        name: part,
        url: `/${part}`,
      };
    });

  return (
    <nav className={`text-sm ${className}`}>
      <ol className="flex items-center gap-2">
        <ListBreadcrumbs parts={pathParts} pathname={pathname} />
      </ol>
    </nav>
  );
}
