import { EXERCISES } from "@/constants/db";
import { CardTitle } from "./card/CardTitle";
import { SimpleTable } from "./SimpleTable";

export function ExercisesList({ className = "" }: { className?: string }) {
	const exerciseKeys = Object.keys(EXERCISES)
		.slice(0, 5)
		.map((key, index) => ({
			key: index,
			name: EXERCISES[key].name,
		}));

	return (
		<article
			className={`flex flex-col gap-4 p-8 bg-background light:bg-light-sec-background border border-foreground/10 col-span-2 ${className}`}
		>
			<CardTitle title="Exercises" />
			<main>
				<SimpleTable
					header={{ key: "#", name: "Exercise" }}
					values={exerciseKeys}
				/>
			</main>
		</article>
	);
}
