import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function LastTargets({ className }: Props) {
  return (
    <div
      className={twMerge(
        'border-bd-muted from-fill-back to-fill-base rounded-[20px] border bg-linear-315 from-[-25%] to-125%',
        className
      )}
    >
      <header className="text-fg-strong font-funnel-display border-bd-muted flex h-16 w-full items-center border-b p-4 px-8 text-2xl tracking-tight">
        Last targets
      </header>
      <main className="p-4">
        <header>Push ups</header>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </main>
    </div>
  );
}
