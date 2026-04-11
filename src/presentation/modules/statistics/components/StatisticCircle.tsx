import { IconCircle } from '@/presentation/globals/components/icons/outline/IconCircle';

export function StatisticCircle({
  title,
  porcentage,
  value,
}: {
  title: string;
  porcentage: number;
  value: string;
}) {
  return (
    <div className="relative grid size-28 place-content-center text-center">
      <header className="fg-muted relative z-1 text-sm leading-[1.2]">{title}</header>
      <main className="fg-strong font-funnel-display relative z-1 text-xl leading-[1.2]">
        {value}
      </main>
      <div className="fg-primary absolute inset-0 rounded-full">
        <IconCircle
          className="size-28 -rotate-90"
          strokeWidth="0.5"
          porcentage={porcentage}
          animation
        />
      </div>
      <div className="border-bd-default absolute top-[50%] left-[50%] size-26 translate-[-50%] rounded-full border"></div>
    </div>
  );
}
