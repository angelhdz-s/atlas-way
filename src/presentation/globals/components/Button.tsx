export type ButtonElementProps =
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  ...props
}: ButtonElementProps) {
  return <button {...props}>{children}</button>;
}
