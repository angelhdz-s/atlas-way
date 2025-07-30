"use client";

import Image from "next/image";
import { Shape01, Shape02, Shape03 } from "@/modules/globals/components/Shapes";
import styles from "@/modules/landing/components/Hero.module.css";

function HeroImage() {
	return (
		<figure className="relative size-90 rounded-full grid place-content-center">
			<div
				className={`absolute right-24 bottom-0 top-15 my-auto z-3 size-10 ${styles.moving_up}`}
			>
				<Shape01 className="size-10 animate-delay-300 animate-fade-up text-primary drop-shadow-lg drop-shadow-black/20" />
			</div>

			<div
				className={`absolute right-0 bottom-0 top-25 my-auto z-3 size-10 ${styles.moving_up_2}`}
			>
				<span className="block absolute inset-0 w-fit animate-fade-up animate-delay-250">
					<Shape02 className="size-10 text-primary drop-shadow-lg drop-shadow-black/20 rotate-45" />
				</span>
			</div>

			<div className="absolute inset-0 m-auto z-0 size-88 animate-fade-up">
				<Shape03 className="rotate-270 size-88 text-primary" />
			</div>

			<div className="absolute inset-0 m-auto -translate-x-10 size-100 mask-b-from-80% mask-b-to-95% animate-duration-1000 animate-fade z-2">
				<Image
					width={1467}
					height={1439}
					src="/images/model.avif"
					alt="Model"
					className="object-cover mask-b-from-85% mask-b-to-100% animate-fade-up animate-delay-100"
					priority
				/>
			</div>
		</figure>
	);
}

export function Hero({ className = "" }: { className?: string }) {
	return (
		<section
			className={`relative grid place-items-center h-200 py-16 mb-16 ${className}`}
		>
			<main className="relative z-1 max-w-360 w-full mx-auto flex items-center justify-between gap-4 ">
				<header className="flex-1 flex flex-col gap-4">
					<h1 className="text-7xl max-w-5xl font-bold ld-main-fg text-pretty animate-fade-right">
						Manage your training to{" "}
						<span className="bg-gradient-to-b from-50% to-100% from-accent to-tertiary text-transparent bg-clip-text light:from-0% light:to-80%">
							achieve your goals
						</span>
						: routines, sessions and exercises
					</h1>
					<p className="max-w-xl text-lg animate-fade animate-delay-300">
						{`
                AtlasWay is your go-to platform for tracking workouts, exercises,
                and progressions.
              `}
					</p>
				</header>
				<aside className="">
					<HeroImage />
				</aside>
			</main>
			<div className="absolute inset-0 [background:url('/backgrounds/grid.svg')_repeat_50px/50px] z-0 opacity-5 mask-x-from-50% mask-x-to-120% light:invert light:opacity-10"></div>
		</section>
	);
}
