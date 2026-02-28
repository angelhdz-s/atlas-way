import { Card } from '../../card/components/Card';
import { CardTitle } from '../../card/components/CardTitle';

function NotificationListItem({
  className = '',
  notification,
  date,
  notseen,
}: {
  className?: string;
  notification: string;
  date: string;
  notseen?: boolean;
}) {
  const notSeenClassName = notseen
    ? 'font-medium bg-subtle/10 fg-strong'
    : '';
  return (
    <li
      className={`outline-subtle/10 flex items-center justify-between gap-2 px-3 py-2 outline-1 ${notSeenClassName} ${className}`}
    >
      <main>{notification}</main>
      <aside
        className={`${notseen ? 'text-default/80' : 'text-default/50'}`}
      >
        {date}
      </aside>
    </li>
  );
}

function Notifications({
  className = '',
}: {
  className?: string;
}) {
  return (
    <ul
      className={`flex flex-col gap-0 overflow-hidden rounded font-light ${className}`}
    >
      <NotificationListItem
        notification="Don't lose your progress!"
        date="1 min"
        notseen
      />
      <NotificationListItem
        notification="You have reached 120 sessions done"
        date="5 mins"
        notseen
      />
      <NotificationListItem
        notification="New follower: Jane Doe"
        date="10 mins"
        notseen
      />
      <NotificationListItem
        notification="Your routine has been updated"
        date="30 mins"
      />
    </ul>
  );
}

export function NotificationsList({
  className = '',
}: {
  className?: string;
}) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      <header>
        <CardTitle title="Notifications" />
      </header>
      <main className="text-sm">
        <Notifications />
      </main>
    </Card>
  );
}
