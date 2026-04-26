import Link from 'next/link';
import { IconTrash } from '@/presentation/globals/components/icons/outline/IconTrash';
import { Button } from '@/presentation/modules/button/components/Button';
import type { NotificationType } from '@/presentation/globals/mocks/notifications';

export function Notification({
  className = '',
  data,
}: {
  className?: string;
  data: NotificationType;
}) {
  const { title, description, date, notSeen, url } = data;

  const notificationClass = notSeen ? 'bg-fill-base' : '';

  return (
    <article
      className={`border-bd-default hover:border-bd-strong flex w-full items-center gap-4 rounded-lg border px-4 py-1 ${notificationClass} ${className}`}
    >
      <div className="my-auto grid place-content-center">
        <input type="checkbox" className="size-5 cursor-pointer" />
      </div>
      <main className="w-full">
        <header className="relative w-fit">
          <Link href={url || '/dashboard/notifications'} className="flex w-fit items-center gap-2">
            <h3
              className={`line-clamp-1 w-fit text-base ${notSeen ? 'text-strong font-medium' : ''}`}
            >
              {title}
            </h3>
          </Link>
          {notSeen && (
            <span className="bg-unread absolute inset-y-0 left-full my-auto ml-2 block size-2 rounded-full"></span>
          )}
        </header>
        <footer>
          <p className={`text-sm font-light ${notSeen ? '' : 'text-default/60'}`}>
            <span className="line-clamp-1">{description}</span>
          </p>
        </footer>
      </main>
      <aside className="text-default/50 w-fit text-center text-sm whitespace-nowrap">{date}</aside>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variantConfig={{
            type: 'square',
            color: 'subtle',
            size: 'sm',
          }}
          className="text-red-800/80"
        >
          <IconTrash className="size-4" strokeWidth="2" />
        </Button>
      </div>
    </article>
  );
}
