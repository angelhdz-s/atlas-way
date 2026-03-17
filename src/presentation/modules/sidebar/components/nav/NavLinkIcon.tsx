import type { IconTypes } from '@/presentation/globals/types';

export function NavLinkIcon({ Icon }: { Icon: IconTypes }) {
  return <Icon className="size-5" strokeWidth="1.6" />;
}
