export function CardFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <footer className="flex items-center gap-2 text-sm">
      {children}
    </footer>
  );
}
