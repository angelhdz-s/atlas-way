import {
	ArrowsLeftRight,
	BellRinging,
	Barbell,
	CalendarWeek,
	Alarm,
	Edit,
	FaceHappy,
	Forward,
	Heart,
	DeviceDesktopAnalytics,
	Scale,
	TrendingUp,
	Trophy,
	Hammer,
} from '@/presentation/globals/components/Icons';
import { Border } from '@/presentation/globals/components/utils/Border';
import Link from 'next/link';
import { DaysSelection } from './bentogrid/DaysSelection';
import { IconsAnimation } from './bentogrid/IconsAnimation';
import { IconTypes } from '@/presentation/globals/types';

function IconBubble({ className = '', Icon }: { className?: string; Icon: IconTypes }) {
	return (
		<figure className={`border p-1 w-fit rounded-full ${className}`}>
			<Icon className="size-8" strokeWidth="1" />
		</figure>
	);
}

export function BentoGrid({ className = '' }: { className?: string }) {
	return (
		<section className={`w-full max-w-5xl mx-auto my-16 flex flex-col gap-8 ${className}`}>
			<h2 className="text-4xl font-bold ld-main-fg">Explore Our Features</h2>
			<main className="grid grid-cols-4 gap-6 *:relative *:rounded-lg *:min-h-32 *:shadow-2xl *:light:shadow-lg *:shadow-black/10 *:light:shadow-slate-400/20">
				<article className="relative row-span-2 p-4 bg-radial-[200%_100%_at_120%_-10%]  from-accent/30 to-sec-background from-[-50%] to-50% light:to-light-sec-background">
					<main className="relative z-3 flex flex-col gap-4 h-full">
						<header className="font-medium ld-main-fg text-2xl max-w-45 flex-1 leading-none">
							Start Your Journey Now
						</header>
						<footer className="text-base font-light leading-[1.2]">
							<p className="">Totally for free</p>
							<p className="ld-sec-fg text-sm">$0/month</p>
						</footer>
					</main>
					<Border
						className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50 light:mask-none light:bg-foreground/10"
						border={2}
					/>
				</article>

				<article className="relative col-span-2 row-span-3 bg-radial-[200%_100%_at_20%_-10%]  from-accent/30 to-sec-background from-[-50%] to-50% light:to-light-sec-background">
					<main className="relative z-3 grid place-content-center h-full">
						<span className="tracking-tighter text-white text-8xl font-extrabold font-funnel-display">
							<span className="ld-main-fg">Atlas</span>
							<span className="text-primary">Way</span>
						</span>
					</main>
					<Border
						className="bg-sec-foreground/50 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/30 light:mask-none light:bg-foreground/10"
						border={2}
					/>
				</article>

				<article className="relative bg-zinc-900 light:bg-accent row-span-2 flex flex-col gap-4 pt-3">
					<main className="relative ld-main-fg text-2xl z-3 px-4 leading-none text-right">
						Schedule Your Sessions
					</main>
					<footer className="relative flex-1 h-full rounded-b-lg overflow-hidden opacity-40">
						<figure className="absolute left-[50%] translate-x-[-50%] w-fit mx-auto top-2 mask-radial-at-top mask-radial-from-0 mask-radial-to-60% mask-radial-from-black mask-radial-to-black/10">
							<DaysSelection />
						</figure>
					</footer>
					<Border
						className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50"
						border={2}
					/>
				</article>

				<article className="relative bg-zinc-900 row-span-2">
					<main className="relative z-3 grid place-content-center h-full">
						<header className="max-w-45 text-2xl font-bold text-accent text-center leading-[1.1]">
							Create Your Own Routines
						</header>
					</main>
					<Border
						className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50"
						border={2}
					/>
				</article>

				<article className="relative bg-linear-to-br from-sec-background light:from-light-sec-background to-accent/30 from-50% to-150% row-span-2 p-4">
					<main className="relative z-3">
						<p className="text-xl text-main-foreground light:text-light-main-foreground">
							Flexible routines to fit your lifestyle.
						</p>
					</main>
					<div className="absolute z-0 inset-0 rounded-lg overflow-hidden">
						<figure className="absolute -bottom-21 right-10 bg-primary rounded-full w-fit h-32 p-2">
							<ArrowsLeftRight
								className="size-6 text-main-foreground"
								strokeWidth="1.5"
							/>
						</figure>
					</div>
					<Border
						className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50 light:mask-none light:bg-foreground/10"
						border={2}
					/>
				</article>

				<article className="relative ld-sec-bg row-span-3">
					<main className="relative z-3 flex flex-col h-full p-4 overflow-hidden">
						<header className="relative flex-1 grid place-content-center">
							<figure className="relative z-1 bg-primary rounded-full p-1.5 shadow-lg shadow-primary/50">
								<Heart
									className="size-10 text-main-foreground mask-b-from-0% mask-b-to-100% mask-b-from-black mask-b-to-black/40"
									strokeWidth="1"
								/>
							</figure>
						</header>
						<main className="text-center">
							<header className="text-xl ld-main-fg font-bold">Reminders</header>
							<p className="leading-[1.3] text-zinc-400">
								Timely reminders for your sessions.
							</p>
						</main>
						<div className="absolute inset-0 z-0 rounded-lg mask-radial-at-[50%_50%] mask-radial-from-0% mask-radial-to-80% opacity-20 light:opacity-100">
							<div className="grid grid-cols-[repeat(5,2.4rem)] w-fit mx-auto opacity-0">
								<span className="flex flex-col gap-0.5">
									<IconBubble
										Icon={Trophy}
										className="border-accent text-accent"
									/>
									<IconBubble
										Icon={Forward}
										className="border-foreground/50 text-foreground/50"
									/>
								</span>
								<span className="flex flex-col gap-0.5 translate-y-[-1.55rem]">
									<IconBubble
										Icon={FaceHappy}
										className="border-foreground/50 text-foreground/50"
									/>
									<IconBubble
										Icon={Alarm}
										className="border-foreground/50 text-foreground/50"
									/>
									<IconBubble
										Icon={BellRinging}
										className="border-accent text-accent"
									/>
								</span>
								<span>
									<IconBubble
										Icon={Barbell}
										className="border-accent text-accent"
									/>
								</span>
								<span className="flex flex-col gap-0.5 translate-y-[-1.55rem]">
									<IconBubble
										Icon={Scale}
										className="border-foreground/50 text-foreground/50"
									/>
									<IconBubble
										Icon={Hammer}
										className="border-accent text-accent"
									/>
									<IconBubble
										Icon={DeviceDesktopAnalytics}
										className="border-foreground/50 text-foreground/50"
									/>
								</span>
								<span className="flex flex-col gap-0.5">
									<IconBubble
										Icon={Edit}
										className="border-foreground/50 text-foreground/50"
									/>
									<IconBubble
										Icon={CalendarWeek}
										className="border-foreground/50 text-foreground/50"
									/>
								</span>
							</div>
						</div>
					</main>

					<Border
						className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50 light:mask-none light:bg-foreground/10"
						border={2}
					/>
				</article>

				<article className="ld-sec-bg row-span-3">
					<main className="relative z-3 flex flex-col h-full overflow-hidden p-4">
						<header className="relative flex-1 grid place-content-center">
							<figure className="relative z-1 bg-primary rounded-full p-1.5 shadow-lg shadow-primary/50">
								<TrendingUp
									className="size-10 text-main-foreground mask-b-from-0% mask-b-to-100% mask-b-from-black mask-b-to-black/40"
									strokeWidth="1"
								/>
							</figure>
						</header>

						<main className="relative z-1 text-center">
							<header className="text-xl ld-main-fg font-bold">Statistics</header>
							<p className="leading-[1.3] text-zinc-400">
								Track your progress and performance.
							</p>
						</main>
						<div className="absolute inset-0 z-0 rounded-lg mask-radial-at-[50%_50%] mask-radial-from-0% mask-radial-to-80% opacity-20 light:opacity-100">
							<div className="grid grid-cols-[repeat(5,2.4rem)] w-fit mx-auto opacity-0">
								<span className="flex flex-col gap-0.5">
									<IconBubble
										Icon={Alarm}
										className="border-foreground/50 text-foreground/50"
									/>
									<IconBubble
										Icon={Scale}
										className="border-accent text-accent"
									/>
								</span>
								<span className="flex flex-col gap-0.5 translate-y-[-1.55rem]">
									<IconBubble
										Icon={Edit}
										className="border-foreground/50 text-foreground/50"
									/>
									<IconBubble
										Icon={BellRinging}
										className="border-foreground/50 text-foreground/50"
									/>
									<IconBubble
										Icon={FaceHappy}
										className="border-foreground/50 text-foreground/50"
									/>
								</span>
								<span>
									<IconBubble
										Icon={Barbell}
										className="border-accent text-accent"
									/>
								</span>
								<span className="flex flex-col gap-0.5 translate-y-[-1.55rem]">
									<IconBubble
										Icon={Hammer}
										className="border-foreground/50 text-foreground/50"
									/>
									<IconBubble
										Icon={Forward}
										className="border-accent text-accent"
									/>
									<IconBubble
										Icon={CalendarWeek}
										className="border-accent text-accent"
									/>
								</span>
								<span className="flex flex-col gap-0.5">
									<IconBubble
										Icon={Trophy}
										className="border-foreground/50 text-foreground/50"
									/>
									<IconBubble
										Icon={DeviceDesktopAnalytics}
										className="border-foreground/50 text-foreground/50"
									/>
								</span>
							</div>
						</div>
					</main>
					<Border
						className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50 light:mask-none light:bg-foreground/10"
						border={2}
					/>
				</article>

				<article className="row-span-2 grid place-content-center bg-radial-[200%_200%_at_20%_110%]  from-accent/10 to-sec-background light:to-light-sec-background from-[-50%] to-50%">
					<Link
						href="/dashboard"
						className="relative btn-lg rounded-full flex items-center gap-2 border-4 border-background/20 light:border-light-background outline-1 outline-sec-foreground/30 light:outline-foreground/20 overflow-hidden text-main-foreground"
					>
						<ArrowsLeftRight className="relative size-6 -ml-1 z-1" />
						<span className="relative z-1 text-lg">Get Started</span>
						<div className="absolute inset-0 bg-primary">
							<span className="absolute bg-accent/50 inset-0 bottom-[50%] mask-radial-at-top mask-radial-from-0% mask-radial-to-75%"></span>
						</div>
					</Link>
					<Border
						className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50 light:mask-none light:bg-foreground/10"
						border={2}
					/>
				</article>

				<article className="relative ld-sec-bg row-span-2">
					<main className="flex flex-col items-center justify-center gap-3 h-full opacity-20 light:opacity-40">
						<IconsAnimation direction="left" />
						<IconsAnimation direction="right" />
						<IconsAnimation direction="left" />
					</main>
					<Border
						className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50 light:mask-none light:bg-foreground/10"
						border={2}
					/>
				</article>
			</main>
		</section>
	);
}
