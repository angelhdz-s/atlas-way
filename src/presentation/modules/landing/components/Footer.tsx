export function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className={`bg-fill-base mt-16 flex h-48 w-full items-center ${className}`}>
      <main className="text-fg-strong mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 md:flex-row md:gap-16">
        <aside>
          <h5 className="text-2xl">
            <strong className="font-funnel-display">AtlasWay</strong> &copy;{' '}
            {new Date().getFullYear()}
          </h5>
        </aside>

        <main>
          <a href="https://www.github.com/angelhdz-s/atlas-way">GitHub Repository</a>
        </main>
      </main>
    </footer>
  );
}
