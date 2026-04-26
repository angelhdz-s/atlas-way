export function NavLinkBody({ title }: { title: React.ReactNode }) {
  return (
    <div
      className="bg-base absolute top-0 left-16 z-50 hidden h-full place-content-center rounded group-hover:grid"
      style={{
        clipPath:
          "path('M 10,0 A 5,5 0,0,0 5,5 L 5,16 A 5,5 0,0,1 0,21 A 5,5 0,0,1 5,26 L 5,36 A 5,5 0,0,0 10,40 L 500,40 L 500,0 Z')",
      }}
    >
      <span className="flex items-center gap-2 pr-4 pl-4.5 whitespace-nowrap">{title}</span>
    </div>
  );
}
