import { Border } from '@/presentation/globals/components/utils/Border';

type Props = {
	className?: string;
};

export function AtlasWayCard({ className }: Props) {
	return (
		<article
			className={`
			relative md:col-span-2 md:row-span-3 
			bg-radial-[200%_100%_at_20%_-10%] from-accent/30 
			to-sec-background from-[-50%] to-50% 
			light:to-light-sec-background p-4
			${className}`}
		>
			<main className="relative z-3 grid place-content-center h-full p-4 md:p-0">
				<span className="tracking-tighter text-white text-6xl xs:text-5xl sm:text-7xl lg:text-8xl font-extrabold font-funnel-display">
					<span className="ld-main-fg">Atlas</span>
					<span className="text-primary">Way</span>
				</span>
			</main>
			<Border
				className="bg-sec-foreground/50 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/30 light:mask-none light:bg-foreground/10"
				border={2}
			/>
		</article>
	);
}
