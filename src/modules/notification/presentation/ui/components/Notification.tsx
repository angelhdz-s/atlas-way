import Link from 'next/link';
import type { NotificationType } from '@/presentation/globals/mocks/notifications';
import { IconTrash } from '@/presentation/globals/components/Icons';

export function Notification({
  className = '',
  data,
}: {
  className?: string;
  data: NotificationType;
}) {
  const { title, description, date, notSeen, url } = data;

  const notificationClass = notSeen ? 'bg-middle' : '';

  return (
    <article
      className={`border-bd-default hover:border-bd-strong cursor-pointer rounded border px-4 py-1 ${notificationClass} ${className}`}
    >
      <Link
        href={url || '/dashboard/notifications'}
        className="flex items-center gap-4"
      >
        <div className="my-auto grid place-content-center">
          <input type="checkbox" className="size-5" />
        </div>
        <main className="flex flex-1 flex-col gap-0">
          <header className="flex items-center gap-4">
            <h3
              className={`text-base ${notSeen ? 'fg-strong font-bold' : ''}`}
            >
              {title}
            </h3>
            {notSeen && (
              <span className="bg-unread block size-2.5 rounded-full"></span>
            )}
          </header>
          <footer>
            <p
              className={`text-sm ${notSeen ? '' : 'text-default/60'}`}
            >
              {description}
            </p>
          </footer>
        </main>
        <aside className="text-default/50 w-12 text-center text-sm">
          {date}
        </aside>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="bg-front cursor-pointer rounded p-2 text-sm text-red-800/80"
          >
            <IconTrash className="size-4" strokeWidth="2" />
          </button>
        </div>
      </Link>
    </article>
  );
}
