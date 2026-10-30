import type { LucideIcon } from 'lucide-react';
import { Ban } from 'lucide-react';
import { mappedIcons } from '@/presentation/modules/icon/config/icon.config.icons';

export function getMappedIcon(icon: string): LucideIcon {
  const mappedIcon = mappedIcons[icon];
  if (mappedIcon === undefined) return Ban;
  return mappedIcon;
}
