import {
  pageLateralPanelVariant,
  type PageLateralPanelVariantProps,
} from '@/presentation/modules/dashboard/config/page-lateral-panel.config.variants';
import { twMerge } from 'tailwind-merge';

type Props = PageLateralPanelVariantProps & {
  className?: string;
  children: React.ReactNode;
};

export function PageLateralPanel({ className, children, ...variantProps }: Props) {
  const variantClassName = pageLateralPanelVariant(variantProps);

  return <aside className={twMerge(variantClassName, className)}>{children}</aside>;
}
