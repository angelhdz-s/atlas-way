import { ArrowsLeftRight } from '@/presentation/globals/components/Icons';
import { BentoCard } from '../BentoCard';

type Props = {
	className?: string;
};

export function FlexibleRoutines({ className }: Props) {
	return (
		<BentoCard className={`relative md:row-span-2 p-4 ${className}`}>
			<main>
				<p className="pl-4 xs:p-0 max-w-48 font-funnel-display text-xl fg-strong">
					Flexible routines to fit your lifestyle.
				</p>
			</main>
			<div className="absolute z-0 inset-0 rounded-lg overflow-hidden">
				<figure className="absolute -bottom-21 right-10 bg-primary rounded-full w-fit h-32 p-2">
					<ArrowsLeftRight className="size-6 fg-strong" strokeWidth="1.5" />
				</figure>
			</div>
		</BentoCard>
	);
}
