export type AnchorElementProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  children,
  ...props
}: AnchorElementProps) {
  return <a {...props}>{children}</a>;
}
