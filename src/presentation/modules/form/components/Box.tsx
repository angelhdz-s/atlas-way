type BoxProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Box({ className, children }: BoxProps) {
  return (
    <div
      className={`bg-back hover:outline-bd-default w-full rounded-lg p-2 hover:outline-1 ${className}`}
    >
      {children}
    </div>
  );
}
