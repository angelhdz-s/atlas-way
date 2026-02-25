import { Border } from '@/presentation/globals/components/utils/Border';

type Props = {
	className?: string;
};

export function CreateYourOwnRoutines({ className }: Props) {
	return (
		<article
			className={`
			relative bg-zinc-900 md:row-span-2 p-2 md:p-0
			${className}`}
		>
			<main className="relative z-3 grid place-content-center h-full p-4 md:p-0">
				<header className="font-funnel-display max-w-45 text-2xl font-bold text-accent text-center leading-[1.1]">
					Create Your Own Routines
				</header>
			</main>
			<Border
				className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50"
				border={2}
			/>
		</article>
	);
}
