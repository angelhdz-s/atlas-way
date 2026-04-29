type Props = {
  children: React.ReactNode;
};
export function TableHeader({ children }: Props) {
  return (
    <thead className="h-10 divide-y">
      <tr className="text-fg-subtle text-sm font-light md:text-base">{children}</tr>
    </thead>
  );
}
