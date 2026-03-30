type Props = {
  children: React.ReactNode;
};

export function TableBodyRow({ children }: Props) {
  return <tr className="first:border-bd-default h-12 first:border-t">{children}</tr>;
}
