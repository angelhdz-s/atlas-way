import Link from 'next/link';
import { ArrowUp } from '@/presentation/globals/components/Icons';

export function Hero() {
	return (
		<section className="relative grid place-items-center md:min-h-160 xl:min-h-180 py-16">
			<main className="relative z-1 max-w-360 w-full mx-auto flex justify-center ">
				<header className="flex flex-col items-center gap-4 md:gap-8 text-center md:max-w-5xl xl:max-w-7xl">
					<h1 className="tracking-tight font-funnel-display text-5xl md:text-7xl xl:text-8xl leading-none font-bold ld-main-fg text-pretty animate-fade">
						Manage your training to{' '}
						<span className="bg-linear-to-b from-50% to-100% from-accent to-tertiary text-transparent bg-clip-text light:from-0% light:to-80%">
							achieve your goals
						</span>
						: routines, sessions and exercises
					</h1>

					<p className="text-lg md:text-xl xl:text-2xl font-normal animate-fade-down animate-delay-100 animate-ease-out max-w-4xl">
						AtlasWay is a free and open-source web application to manage your training
						routines, sessions and exercises. It is designed to help you stay organized
						and focused on your fitness journey.
					</p>

					<footer className="flex items-center gap-4 animate-fade-down animate-delay-200 animate-ease-out">
						<Link
							href="/dashboard"
							className="inline-flex items-center gap-2 rounded-full btn-lg btn-primary mx-auto"
						>
							Try AtlasWay
							<span className="material-icons">
								<ArrowUp className="size-5 rotate-90" />
							</span>
						</Link>
					</footer>
				</header>
			</main>
			<div
				className="
					absolute inset-0 z-0 opacity-50 transition-colors bg-white/10 light:bg-white
					mask-radial-[50%_50%] mask-radial-at-[50%_45%] 
					mask-radial-from-0% mask-radial-to-50% light:mask-radial-from-10%
				"
			></div>
			<div
				className="
					absolute inset-0 z-0 opacity-50 transition-colors bg-primary/50 light:bg-white
					mask-radial-[50%_50%] mask-radial-at-[50%_45%] 
					mask-radial-from-0 mask-radial-to-100% light:mask-radial-from-50%
				"
			></div>
			<div className="absolute inset-0 [background:url('/backgrounds/grid.svg')_repeat_50px/50px] z-0 opacity-5 mask-x-from-50% mask-x-to-120% light:invert light:opacity-10"></div>
		</section>
	);
}
