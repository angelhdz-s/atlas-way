import { ArrowsLeftRight } from '@/presentation/globals/components/Icons';
import { Border } from '@/presentation/globals/components/utils/Border';
import Link from 'next/link';

type Props = {
	className?: string;
};

export function GetStartedCard({}: Props) {
	return (
		<article className="hidden xs:grid place-content-center md:row-span-2 bg-radial-[200%_200%_at_20%_110%]  from-accent/10 to-sec-background light:to-light-sec-background from-[-50%] to-50%">
			<Link
				href="/dashboard"
				className="relative btn-lg rounded-full flex items-center gap-2 border-4 border-background/20 light:border-light-background outline-1 outline-sec-foreground/30 light:outline-foreground/20 overflow-hidden text-main-foreground"
			>
				<ArrowsLeftRight className="relative size-6 -ml-1 z-1" />
				<span className="relative z-1 text-lg whitespace-nowrap">Start Now</span>
				<div className="absolute inset-0 bg-primary">
					<span className="absolute bg-accent/50 inset-0 bottom-[50%] mask-radial-at-top mask-radial-from-0% mask-radial-to-75%"></span>
				</div>
			</Link>
			<Border
				className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50 light:mask-none light:bg-foreground/10"
				border={2}
			/>
		</article>
	);
}
