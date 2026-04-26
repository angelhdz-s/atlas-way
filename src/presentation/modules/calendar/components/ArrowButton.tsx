export function ArrowButton({
  className = '',
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-bd-default hover:text-strong hover:border-subtle/80 grid aspect-square h-full cursor-pointer place-content-center border transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
