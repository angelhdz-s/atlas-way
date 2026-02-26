import { ArrowsLeftRight } from '@/presentation/globals/components/Icons';
import Link from 'next/link';
import { BentoCard } from '../BentoCard';

type Props = {
	className?: string;
};

export function GetStartedCard({ className }: Props) {
	return (
		<BentoCard className={`hidden xs:grid place-content-center md:row-span-2 ${className}`}>
			<Link
				href="/dashboard"
				className="btn-lg rounded-full flex items-center gap-2 
				border-4 outline transition-colors
				bg-radial-[50%_50%_at_50%_0%] from-accent to-primary
				text-main-foreground border-sec-background outline-subtle
				light:border-light-sec-background
				"
			>
				<ArrowsLeftRight className="size-6 -ml-1" />
				<span className="text-lg whitespace-nowrap">Start Now</span>
			</Link>
		</BentoCard>
	);
}
