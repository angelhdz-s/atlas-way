import {
  pageContainerVariant,
  type PageContainerVariantProps,
} from '@/presentation/modules/dashboard/config/page-container.config.varaints';
import { twMerge } from 'tailwind-merge';

type Props = PageContainerVariantProps & {
  className?: string;
  children: React.ReactNode;
};

export function PageContainer({ className, children, ...variantProps }: Props) {
  const variantClassName = pageContainerVariant(variantProps);
  return (
    <main className="flex-1 p-2 md:p-8">
      <div className={twMerge(variantClassName, className)}>{children}</div>
    </main>
  );
}
