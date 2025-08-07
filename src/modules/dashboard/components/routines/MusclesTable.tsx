import { BODY_SECTIONS, MUSCLES, MuscleType } from "@/constants/db";

function Muscles({ muscles }: { muscles: MuscleType[] }) {
	return (
		<table className="w-full text-left">
			<thead>
				<tr className="*:px-2 *:py-1 ld-main-fg">
					<th>Group</th>
					<th>Muscular Group</th>
					<th>Body Section</th>
				</tr>
			</thead>
			<tbody>
				{muscles.map(({ name, muscularGroup, bodySection }, key) => {
					return (
						<tr
							key={key}
							className="*:px-2 *:py-1 border-t-[1px] border-zinc-700"
						>
							<td>{name}</td>
							<td>{muscularGroup}</td>
							<td>{bodySection}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

function getMusclesByBodySection(bodySection: keyof typeof BODY_SECTIONS) {
	return Object.values(MUSCLES).filter((muscle) => {
		return muscle.bodySection === BODY_SECTIONS[bodySection];
	});
}

export default function MusclesTable() {
	const bodySections = Object.keys(BODY_SECTIONS);

	return bodySections.map((section, index) => {
		return (
			<div key={index} className="bg-zinc-900/50 p-4 rounded-lg shadow-md">
				<header>
					<h2 className="text-xl font-bold mb-2 pl-2 ld-main-fg">{section}</h2>
				</header>
				<Muscles
					muscles={getMusclesByBodySection(
						section as keyof typeof BODY_SECTIONS,
					).sort((a, b) => a.name.localeCompare(b.name))}
				/>
			</div>
		);
	});
}
