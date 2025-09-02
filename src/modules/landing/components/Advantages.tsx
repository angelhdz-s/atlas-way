import {
	BellRinging,
	DeviceDesktop,
	DeviceDesktopAnalytics,
	Hammer,
} from "@/modules/globals/components/Icons";

import { IconTypes } from "@/modules/globals/types.d";

function AdvantageFigure({ Icon }: { Icon: IconTypes }) {
	return (
		<figure className="relative size-20 rounded-full">
			<main className="relative z-2 h-full grid place-content-center">
				<Icon className="size-10 text-zinc-950" strokeWidth="1" />
			</main>
			<div
				className="absolute inset-0 m-auto size-16 aspect-square p-3 animate-spin animate-duration-50000 border-2 bg-accent border-accent rotate-45"
				style={{ animationDelay: `-${Math.floor(Math.random() * 10)}s` }}
			></div>
		</figure>
	);
}

function Advantage({
	tile,
	description,
	children,
}: {
	tile: string;
	description: string;
	children: React.ReactNode;
}) {
	return (
		<li className="flex items-center gap-2 list-disc">
			<header className="flex flex-col gap-2 flex-1">
				<h3 className="ld-main-fg text-xl font-medium">{tile}</h3>
				<p>{description}</p>
			</header>
			{children}
		</li>
	);
}

export function Advantages({ className = "" }: { className?: string }) {
	return (
		<section className={`max-w-5xl w-full mx-auto my-16 ${className}`}>
			<header>
				<h2 className="text-4xl font-bold ld-main-fg">Why AtlasWay?</h2>
			</header>

			<main>
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
					<Advantage
						tile="Highly Customizable"
						description="Tailor your workout routines and exercises plans to fit your unique needs."
					>
						<AdvantageFigure Icon={Hammer} />
					</Advantage>

					<Advantage
						tile="Easy to Use"
						description="Designed with user-friendliness in mind, making it accessible for everyone."
					>
						<AdvantageFigure Icon={DeviceDesktop} />
					</Advantage>

					<Advantage
						tile="Comprehensive Tracking"
						description="Monitor your progress with detailed analytics and insights."
					>
						<AdvantageFigure Icon={DeviceDesktopAnalytics} />
					</Advantage>

					<Advantage
						tile="Notifications and Alerts"
						description="Get reminders and alerts to keep you on track with your fitness goals."
					>
						<AdvantageFigure Icon={BellRinging} />
					</Advantage>
				</ul>
			</main>
		</section>
	);
}
