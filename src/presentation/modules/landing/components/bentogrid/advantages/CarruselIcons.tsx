import { Border } from '@/presentation/globals/components/utils/Border';
import { IconsAnimation } from '../IconsAnimation';

type Props = {
	className?: string;
};

export function CarruselIcons({}: Props) {
	return (
		<article className="hidden md:block relative ld-sec-bg md:row-span-2">
			<main className="flex flex-col items-center justify-center gap-3 h-full opacity-20 light:opacity-40">
				<IconsAnimation direction="left" />
				<IconsAnimation direction="right" />
				<IconsAnimation direction="left" />
			</main>
			<Border
				className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50 light:mask-none light:bg-foreground/10"
				border={2}
			/>
		</article>
	);
}
