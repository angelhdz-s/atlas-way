import { Border } from '@/presentation/globals/components/utils/Border';
import { DaysSelection } from '../DaysSelection';

type Props = {
	className?: string;
};

export function ScheduleYourSessions({ className }: Props) {
	return (
		<article
			className={`
			relative bg-zinc-900 light:bg-accent md:row-span-2
			flex flex-col gap-4 h-full pt-4
			${className}`}
		>
			<main className="font-funnel-display relative ld-main-fg text-2xl z-3 px-4 py-4 md:py-0 leading-none text-center md:text-right">
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
	);
}
