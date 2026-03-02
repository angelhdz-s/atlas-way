type BoxProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Box({ className, children }: BoxProps) {
  return (
    <div
      className={`bg-back border-bd-muted w-full rounded-lg border p-2 ${className}`}
    >
      {children}
    </div>
  );
}
