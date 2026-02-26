import { CardTitle } from '../../card/components/CardTitle';

export function BestExercises({ className = '' }: { className?: string }) {
	return (
		<article className={`flex flex-col gap-4 dashboard-card-default ${className}`}>
			<CardTitle title="Best Exercises" />
			<main>
				<table className="w-full text-left">
					<thead>
						<tr className="*:px-1 fg-strong">
							<th>Top</th>
							<th>Exercise</th>
							<th>Progress</th>
						</tr>
					</thead>
					<tbody>
						<tr className="*:py-0.5 *:leading-none *:px-1 font-light">
							<td>1</td>
							<td>Biceps Curl</td>
							<td className="fg-accent">10% improvement</td>
						</tr>
						<tr className="*:py-0.5 *:leading-none *:px-1 font-light">
							<td>2</td>
							<td>Bulgarians</td>
							<td className="fg-accent">7% improvement</td>
						</tr>
						<tr className="*:py-0.5 *:leading-none *:px-1 font-light">
							<td>3</td>
							<td>Dips</td>
							<td className="fg-accent">5% improvement</td>
						</tr>
						<tr className="*:py-0.5 *:leading-none *:px-1 font-light">
							<td>4</td>
							<td>Pull Ups</td>
							<td className="fg-accent">2% improvement</td>
						</tr>
					</tbody>
				</table>
			</main>
		</article>
	);
}
