import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  title: string;
  children: React.ReactNode;
};

export function LateralPanelSection({ title, children, className }: Props) {
  return (
    <section className={twMerge('w-full space-y-2', className)}>
      <h2 className="heading-6 text-txt-base-heading">{title}</h2>
      <main>{children}</main>
    </section>
  );
}
