import { Card } from "../Card";
import { SimplePil } from "../pils/SimplePil";

export function Session({ className = "" }: { className?: string }) {
	const EXCERCISES = ["Push ups", "Curl biceps", "Lateral Rises", "Squats"];
	return (
		<Card className={`${className}`}>
			<header className="mb-4">
				<h2 className="text-2xl font-bold ld-main-fg">Session Name</h2>
				<p className="text-sm">Description of the Session.</p>
			</header>
			<main className="flex flex-col gap-2 text-sm">
				<span>Exercises</span>
				<ul className="flex flex-wrap gap-2">
					{EXCERCISES.map((exercise) => (
						<SimplePil key={exercise}>{exercise}</SimplePil>
					))}
				</ul>
			</main>
		</Card>
	);
}
