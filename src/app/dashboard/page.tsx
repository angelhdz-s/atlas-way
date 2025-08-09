import { EXERCISES, MUSCLES } from "@/constants/db";
import { FirstRoutine } from "@/modules/dashboard/components/home/FirstRoutine";
import { FirstSession } from "@/modules/dashboard/components/home/FirstSession";
import { MainCard } from "@/modules/dashboard/components/home/MainCard";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import {
	Bolt,
	CircleCheck,
	Clock,
	MiniCheckCircle,
} from "@/modules/globals/components/Icons";

function ExerciseRow({ row }: { row: { key: number; name: string } }) {
	return (
		<>
			<li className="text-current/80 border-t border-foreground/10">
				{row.key + 1}
			</li>
			<li className="border-t border-foreground/10">{row.name}</li>
		</>
	);
}

function Table({
	header,
	values,
}: {
	header: { key: string; name: string };
	values: { key: number; name: string }[];
}) {
	return (
		<ul className="grid grid-cols-[1.5rem_1fr] *:py-0.5 font-light">
			<li className="ld-main-fg font-medium">{header.key}</li>
			<li className="ld-main-fg font-medium">{header.name}</li>
			{values.map((value) => (
				<ExerciseRow key={value.key} row={value} />
			))}
		</ul>
	);
}

export default function Dashboard() {
	const exerciseKeys = Object.keys(EXERCISES)
		.slice(0, 5)
		.map((key, index) => ({
			key: index,
			name: EXERCISES[key].name,
		}));

	const muscleKeys = Object.keys(MUSCLES)
		.slice(0, 5)
		.map((key, index) => ({
			key: index,
			name: MUSCLES[key].name,
		}));
	return (
		<PageContainer>
			<PageHeader
				title="Welcome to Atlas"
				description="Your personal fitness dashboard"
			/>
			<PageContent className="grid grid-cols-12 gap-4 *:rounded-3xl">
				<MainCard className="col-span-4" />

				<FirstRoutine className="col-span-3" />

				<FirstSession className="col-span-3" />

				<div className="flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10 col-span-2">
					<h3 className="text-4xl ld-main-fg-gradient">Exercises</h3>
					<main>
						<Table
							header={{ key: "#", name: "Exercise" }}
							values={exerciseKeys}
						/>
					</main>
				</div>

				<div className="col-span-3 flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10">
					<h3 className="text-4xl ld-main-fg-gradient">Last Session</h3>
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
				</div>

				<div className="col-span-3 flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10">
					<h3 className="text-4xl ld-main-fg-gradient">Next Session</h3>
					<main className="flex flex-col gap-4">
						<header className="flex items-center">
							<h4 className="leading-[1] inline font-bold text-2xl text-accent">
								Push Day
							</h4>
							<span className="inline-flex items-center gap-1 outline-1 outline-accent/50 text-accent px-3 py-1 bg-subtle/10 rounded-full ml-2 text-sm font-light">
								<Clock className="size-5 -ml-1" strokeWidth="1.5" />
								Today
							</span>
						</header>
						<main>
							<ul className="font-light leading-[1]">
								<li className="flex justify-between items-center gap-2">
									<main className="text-lg flex items-center gap-2">
										<CircleCheck
											className="size-5.5 text-foreground/30 mr-1"
											strokeWidth="1.5"
										/>
										<span className="">Bulgarians</span>
									</main>
									<aside className="flex items-center gap-2">
										<span className="bg-subtle/10 rounded-full py-0 px-3 text-sm font-light text-foreground/50">
											3 x 16
										</span>
										<span className="text-sm font-light text-foreground/50">
											+1 Reps
										</span>
									</aside>
								</li>
								<li className="flex justify-between items-center gap-2">
									<main className="text-lg flex items-center gap-2">
										<CircleCheck
											className="size-5.5 text-foreground/30 mr-1"
											strokeWidth="1.5"
										/>
										<span className="">Steps</span>
									</main>
									<aside className="flex items-center gap-2">
										<span className="bg-subtle/10 rounded-full py-0 px-3 text-sm font-light text-foreground/50">
											3 x 16
										</span>
										<span className="text-sm font-light text-foreground/50">
											+1 Reps
										</span>
									</aside>
								</li>
								<li className="flex justify-between items-center gap-2">
									<main className="text-lg flex items-center gap-2">
										<CircleCheck
											className="size-5.5 text-foreground/30 mr-1"
											strokeWidth="1.5"
										/>
										<span className="">Squats</span>
									</main>
									<aside className="flex items-center gap-2">
										<span className="bg-subtle/10 rounded-full py-0 px-3 text-sm font-light text-foreground/50">
											3 x 16
										</span>
										<span className="text-sm font-light text-foreground/50">
											+1 Reps
										</span>
									</aside>
								</li>
								<li className="flex justify-between items-center gap-2">
									<main className="text-lg flex items-center gap-2">
										<CircleCheck
											className="size-5.5 text-foreground/30 mr-1"
											strokeWidth="1.5"
										/>
										<span className="">Roman Deadlift</span>
									</main>
									<aside className="flex items-center gap-2">
										<span className="bg-subtle/10 rounded-full py-0 px-3 text-sm font-light text-foreground/50">
											3 x 16
										</span>
										<span className="text-sm font-light text-foreground/50">
											+1 Reps
										</span>
									</aside>
								</li>
							</ul>
						</main>
					</main>
				</div>

				<div className="flex flex-col gap-0 p-8 bg-background light:bg-light-sec-background border border-foreground/10 col-span-2">
					<h3 className="leading-[1] text-center w-fit mx-auto text-2xl ld-main-fg">
						Session Streak
					</h3>
					<main className="flex-1 flex flex-col items-center justify-center gap-0">
						<span className="leading-[1] tracking-tighter text-9xl font-medium font-funnel-display text-accent">
							7
						</span>
						<span className="leading-[1] text-base font-light text-foreground/50">
							Days
						</span>
					</main>
				</div>

				<div className="flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10 col-span-2">
					<h3 className="text-4xl ld-main-fg-gradient">Routines</h3>
					<main>
						<ul className="flex flex-col gap-4">
							<li className="flex flex-col gap-1">
								<header className="">
									<h4 className="text-xl ld-main-fg">1. Push, Pull, Legs</h4>
								</header>
								<ul className="*:leading-[1] text-foreground/70 text-lg flex flex-col gap-1">
									<li className="flex gap-2 items-center">
										<Clock className="size-5" />
										<span className="font-light">3 Sessions</span>
									</li>
									<li className="flex gap-2 items-center">
										<Bolt className="size-5" />
										<span className="font-light">16 Exercises</span>
									</li>
								</ul>
							</li>
							<li className="flex flex-col gap-1">
								<header className="">
									<h4 className="text-xl ld-main-fg">2. Full Body</h4>
								</header>
								<ul className="*:leading-[1] text-foreground/70 text-lg flex flex-col gap-1">
									<li className="flex gap-2 items-center">
										<Clock className="size-5" />
										<span className="font-light">1 Session</span>
									</li>
									<li className="flex gap-2 items-center">
										<Bolt className="size-5" />
										<span className="font-light">8 Exercises</span>
									</li>
								</ul>
							</li>
						</ul>
					</main>
				</div>

				<div className="flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10 col-span-2">
					<h3 className="text-4xl ld-main-fg-gradient">Muscles</h3>
					<main>
						<Table header={{ key: "#", name: "Muscle" }} values={muscleKeys} />
					</main>
				</div>

				<div className="flex flex-col gap-0 p-8 bg-background light:bg-light-sec-background border border-foreground/10 col-span-2">
					<h3 className="leading-[1] text-center w-fit mx-auto text-2xl ld-main-fg-gradient">
						Total Sessions Done
					</h3>
					<main className="flex-1 flex flex-col items-center justify-center gap-0">
						<span className="tracking-tighter text-8xl font-medium font-funnel-display text-accent">
							120
						</span>
						<span className="leading-[1] text-base font-light text-foreground/50">
							Sessions
						</span>
					</main>
				</div>

				<div className="col-span-5 flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10">
					<h3 className="text-4xl ld-main-fg-gradient">Best Exercises</h3>
					<main>
						<table className="w-full text-left">
							<thead>
								<tr className="*:px-1 ld-main-fg">
									<th>Top</th>
									<th>Exercise</th>
									<th>Sets</th>
									<th>Reps</th>
									<th>Weight</th>
									<th>Progress</th>
								</tr>
							</thead>
							<tbody>
								<tr className="*:py-0.5 *:leading-[1] *:px-1 font-light">
									<td>1</td>
									<td>Biceps Curl</td>
									<td>6</td>
									<td>16</td>
									<td>25 lbs</td>
									<td className="text-accent">10% improvement</td>
								</tr>
								<tr className="*:py-0.5 *:leading-[1] *:px-1 font-light">
									<td>2</td>
									<td>Bulgarians</td>
									<td>3</td>
									<td>12</td>
									<td>25 lbs</td>
									<td className="text-accent">7% improvement</td>
								</tr>
								<tr className="*:py-0.5 *:leading-[1] *:px-1 font-light">
									<td>3</td>
									<td>Dips</td>
									<td>3</td>
									<td>9</td>
									<td>0</td>
									<td className="text-accent">5% improvement</td>
								</tr>
								<tr className="*:py-0.5 *:leading-[1] *:px-1 font-light">
									<td>4</td>
									<td>Pull Ups</td>
									<td>3</td>
									<td>8</td>
									<td>0</td>
									<td className="text-accent">2% improvement</td>
								</tr>
							</tbody>
						</table>
					</main>
				</div>

				<div className="flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10 col-span-2">
					<h3 className="text-4xl ld-main-fg-gradient">Most Reps Exercises</h3>
				</div>
				<div className="flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10 col-span-3">
					<h3 className="text-4xl ld-main-fg-gradient">
						Best Muscle Last Month
					</h3>
				</div>
			</PageContent>
		</PageContainer>
	);
}
