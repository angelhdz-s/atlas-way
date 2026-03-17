type Props = {
  children: React.ReactNode;
};
export function TableHeader({ children }: Props) {
  return (
    <thead className="h-10 divide-y">
      <tr className="fg-muted font-light">{children}</tr>
    </thead>
  );
}
