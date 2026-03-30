type Props = {
  children: React.ReactNode;
};

export function TableBody({ children }: Props) {
  return <tbody className="divide-bd-default divide-y">{children}</tbody>;
}
