import { MiniCheckCircle } from "@/modules/globals/components/Icons";
import { CardTitle } from "./card/CardTitle";

export function LastSession({ className = "" }: { className?: string }) {
	return (
		<article
			className={`col-span-3 flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10 ${className}`}
		>
			<CardTitle title="Last Sessions" />
			<main className="flex flex-col gap-4">
				<header className="flex items-center">
					<h4 className="leading-[1] inline font-bold text-2xl text-green-600">
						Push Day
					</h4>
					<span className="px-3 py-1 bg-subtle/10 rounded-full ml-2 inline text-sm font-light text-foreground/70">
						Yesterday
					</span>
				</header>
				<main>
					<ul className="font-light">
						<li className="flex justify-between items-center gap-2">
							<main className="*:inline">
								<MiniCheckCircle className="size-6 text-green-600 mr-1" />
								<span className="leading-[1] text-lg">Push Ups</span>
							</main>
							<aside>
								<span className="text-sm font-light text-foreground/50">
									+1 Reps
								</span>
							</aside>
						</li>

						<li className="flex justify-between items-center gap-2">
							<main className="*:inline">
								<MiniCheckCircle className="size-6 text-green-600 mr-1" />
								<span className="leading-[1] text-lg">Lateral Raises</span>
							</main>
							<aside>
								<span className="text-sm font-light text-foreground/50">
									+1 Reps
								</span>
							</aside>
						</li>

						<li className="flex justify-between items-center gap-2">
							<main className="*:inline">
								<MiniCheckCircle className="size-6 text-green-600 mr-1" />
								<span className="leading-[1] text-lg">Abs</span>
							</main>
							<aside>
								<span className="text-sm font-light text-foreground/50">
									+1 Reps
								</span>
							</aside>
						</li>

						<li className="flex justify-between items-center gap-2">
							<main className="*:inline">
								<MiniCheckCircle className="size-6 text-green-600 mr-1" />
								<span className="leading-[1] text-lg">Dips</span>
							</main>
							<aside>
								<span className="text-sm font-light text-foreground/50">
									+1 Reps
								</span>
							</aside>
						</li>
					</ul>
				</main>
			</main>
		</article>
	);
}
