import { ArrowsLeftRight } from '@/presentation/globals/components/Icons';
import { Border } from '@/presentation/globals/components/utils/Border';

type Props = {
	className?: string;
};

export function FlexibleRoutines({ className }: Props) {
	return (
		<article
			className={`
			relative bg-linear-to-br md:row-span-2 
			from-sec-background light:from-light-sec-background 
			to-accent/30 from-50% to-150% p-4
			${className}
			`}
		>
			<main className="relative z-3">
				<p className="pl-4 xs:p-0 max-w-48 font-funnel-display text-xl text-main-foreground light:text-light-main-foreground">
					Flexible routines to fit your lifestyle.
				</p>
			</main>
			<div className="absolute z-0 inset-0 rounded-lg overflow-hidden">
				<figure className="absolute -bottom-21 right-10 bg-primary rounded-full w-fit h-32 p-2">
					<ArrowsLeftRight className="size-6 text-main-foreground" strokeWidth="1.5" />
				</figure>
			</div>
			<Border
				className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50 light:mask-none light:bg-foreground/10"
				border={2}
			/>
		</article>
	);
}
