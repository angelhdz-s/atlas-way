type CountersType = [string?, string?, string?];

export function CardSubHeader({
  description,
  counters,
}: {
  description: string;
  counters?: CountersType;
}) {
  return (
    <footer className="flex flex-col gap-1 text-lg font-light">
      {counters && counters.length > 0 && (
        <main className="fg-muted">
          <ul className="divide-bd-muted flex items-center justify-between gap-2 text-base">
            {counters.map((counter) => (
              <li key={counter}>{counter}</li>
            ))}
          </ul>
        </main>
      )}
      <p className="line-clamp-1">{description}</p>
    </footer>
  );
}
