import { Border } from '@/presentation/globals/components/utils/Border';

type Props = {
	className?: string;
};

export function StartYourJourney({ className }: Props) {
	return (
		<article
			className={`
        relative md:row-span-2 p-4 
        bg-radial-[200%_100%_at_120%_-10%]  
        from-accent/30 to-sec-background from-[-50%] to-50% 
        light:to-light-sec-background
        ${className}`}
		>
			<main className="relative z-3 flex flex-col gap-2 md:gap-4 h-full p-2 md:p-0">
				<header className="text-center md:text-left font-funnel-display font-medium ld-main-fg text-2xl md:max-w-45 flex-1 leading-none">
					Start Your Journey Now
				</header>
				<footer className="text-center md:text-left text-base font-light leading-[1.2]">
					<p>Totally for free</p>
					<p className="ld-sec-fg text-sm">$0/month</p>
				</footer>
			</main>
			<Border
				className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50 light:mask-none light:bg-foreground/10"
				border={2}
			/>
		</article>
	);
}
