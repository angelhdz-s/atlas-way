import { ArrowUp } from '@/presentation/globals/components/Icons';
import { VariantLink } from '../../button/components/VariantLink';

export function Hero() {
  return (
    <section className="relative grid place-items-center py-16 md:min-h-160 xl:min-h-180">
      <main className="relative z-1 mx-auto flex w-full max-w-360 justify-center">
        <header className="flex flex-col items-center gap-4 text-center md:max-w-5xl md:gap-8 xl:max-w-7xl">
          <h1 className="font-funnel-display fg-strong animate-fade text-5xl leading-none font-bold tracking-tight text-pretty md:text-7xl xl:text-8xl">
            Manage your training to{' '}
            <span className="from-accent to-tertiary light:from-0% light:to-80% bg-linear-to-b from-50% to-100% bg-clip-text text-transparent">
              achieve your goals
            </span>
            : routines, sessions and exercises
          </h1>

          <p className="animate-fade-down animate-delay-100 animate-ease-out max-w-4xl text-lg font-normal md:text-xl xl:text-2xl">
            AtlasWay is a free and open-source web
            application to manage your training routines,
            sessions and exercises. It is designed to help
            you stay organized and focused on your fitness
            journey.
          </p>

          <footer className="animate-fade-down animate-delay-200 animate-ease-out flex items-center gap-4">
            <VariantLink
              size="lg"
              rounded="full"
              href="/dashboard"
              color="primary"
              className="mx-auto inline-flex items-center gap-2"
            >
              Try AtlasWay
              <span className="material-icons">
                <ArrowUp className="size-5 rotate-90" />
              </span>
            </VariantLink>
          </footer>
        </header>
      </main>
      <div className="light:bg-white light:mask-radial-from-10% absolute inset-0 z-0 bg-white/10 mask-radial-[50%_50%] mask-radial-from-0% mask-radial-to-50% mask-radial-at-[50%_45%] opacity-50 transition-colors"></div>
      <div className="bg-primary/50 light:bg-white light:mask-radial-from-50% absolute inset-0 z-0 mask-radial-[50%_50%] mask-radial-from-0 mask-radial-to-100% mask-radial-at-[50%_45%] opacity-50 transition-colors"></div>
      <div className="light:invert light:opacity-10 absolute inset-0 z-0 mask-x-from-50% mask-x-to-120% opacity-5 [background:url('/backgrounds/grid.svg')_repeat_50px/50px]"></div>
    </section>
  );
}
