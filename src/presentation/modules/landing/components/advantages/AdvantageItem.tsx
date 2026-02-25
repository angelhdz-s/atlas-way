import { IconTypes } from '@/presentation/globals/types';

export function AdvantageItem({
	tile,
	description,
	Icon,
}: {
	tile: string;
	description: string;
	Icon: IconTypes;
}) {
	return (
		<li className="flex flex-row xs:flex-col gap-4 list-disc rounded-md p-4">
			<div className="h-fit bg-accent text-light-main-foreground w-fit p-2 rounded-full border border-white/5">
				<Icon className="size-6" strokeWidth="1.5" />
			</div>
			<main className="pt-1.5 xs:p-0 flex flex-col gap-2 flex-1">
				<h3 className="ld-main-fg text-xl font-medium">{tile}</h3>
				<p>{description}</p>
			</main>
		</li>
	);
}
