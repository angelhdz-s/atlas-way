import type { IconName } from '@/presentation/modules/icon/components/Icon';
import { Icon } from '@/presentation/modules/icon/components/Icon';

export function NavLinkIcon({ icon }: { icon: IconName }) {
  return <Icon icon={icon} variant={{ size: 'md', weight: 'moderate' }} />;
}
