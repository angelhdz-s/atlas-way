export function NotificationsCounter({ count }: { count: number }) {
  return (
    <div className="bg-unread fg-white border-unread grid size-6 place-items-center rounded-full border">
      <span className="block w-fit text-sm font-medium">{count}</span>
    </div>
  );
}
