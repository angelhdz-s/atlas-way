import { Icon } from '@/presentation/modules/icon/components/Icon';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  href: string;
  upcommingSession: {
    title: string;
    date: string;
  };
};

export function RestCard({ className, upcommingSession }: Props) {
  return (
    <div
      className={twMerge(
        'bg-sf-base-default border-bd-base-default hover:border-bd-base-subtle w-96 cursor-pointer rounded-[20px] border transition-colors',
        className
      )}
    >
      <header className="flex h-12 items-center gap-2 px-2">
        <div className="text-txt-base-body bg-sf-base-subtle grid aspect-square size-8 place-content-center rounded-lg">
          <Icon icon="bed" variant={{ size: 'lg' }} />
        </div>
        <h3 className="heading-6 text-txt-base-heading w-full flex-1">No activities</h3>
      </header>
      <div className="space-y-2 px-4">
        <header>
          <p className="text-txt-base-caption caption">Upcomming session</p>
        </header>
        <main className="flex w-full items-center gap-2">
          <aside className="bg-sf-base-subtle border-bd-base-default grid size-8 place-content-center rounded-lg border">
            <Icon
              icon="calendar-1"
              variant={{ weight: 'thin', size: 'md' }}
              className="text-ic-base-caption"
            />
          </aside>
          <main className="flex flex-1 items-center">
            <p className="body-medium text-txt-base-body flex-1">{upcommingSession.title}</p>
            <aside>
              <p className="body-small text-txt-base-caption">{upcommingSession.date}</p>
            </aside>
          </main>
        </main>
      </div>
    </div>
  );
}
