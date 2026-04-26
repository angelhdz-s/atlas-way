export function NotificationsCounter({ count }: { count: number }) {
  return (
    <div className="bg-info border-info grid size-4 place-items-center rounded-full border text-white">
      <span className="block w-fit text-xs font-medium">{count}</span>
    </div>
  );
}
