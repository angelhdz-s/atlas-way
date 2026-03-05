export function ImageBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-full-black border-bd-default absolute top-20 right-0 bottom-0 left-0 mx-auto w-[calc(100%-calc(var(--spacing)*16))] overflow-hidden rounded-lg border mask-b-from-20% p-8 select-none">
      <div className="mask-b-from-50% mask-b-to-100%">
        {children}
      </div>
    </div>
  );
}
