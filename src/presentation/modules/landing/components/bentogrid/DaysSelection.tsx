function Day({
  children,
  unselected = false,
}: {
  children: React.ReactNode;
  unselected?: boolean;
}) {
  const className = !unselected
    ? 'border-accent fg-accent light:border-black light:text-black'
    : 'fg-default border-strong opacity-50 light:opacity-100 light:border-black/40 light:text-black';
  return (
    <li className={`rounded-full border px-2 py-1 text-xs font-light ${className}`}>{children}</li>
  );
}

export function DaysSelection() {
  return (
    <div className="pointer-events-none flex scale-100 flex-col gap-1 select-none">
      <ul className="flex gap-1">
        <Day unselected>Saturday</Day>
        <Day unselected>Sunday</Day>
        <Day>Monday</Day>
        <Day>Tuesday</Day>
      </ul>
      <ul className="-ml-10 flex gap-1">
        <Day>Wednesday</Day>
        <Day>Thursday</Day>
        <Day>Friday</Day>
        <Day unselected>Saturday</Day>
      </ul>
      <ul className="-ml-10 flex gap-1">
        <Day unselected>Sunday</Day>
        <Day>Monday</Day>
        <Day>Tuesday</Day>
        <Day>Wednesday</Day>
      </ul>
    </div>
  );
}
