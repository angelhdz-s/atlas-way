export function NotificationsCounter({ count }: { count: number }) {
  return (
    <div className="bg-unread fg-white border-unread grid size-4 place-items-center rounded-full border">
      <span className="block w-fit text-xs font-medium">{count}</span>
    </div>
  );
}
