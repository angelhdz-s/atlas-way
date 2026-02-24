import { Heart } from '@/presentation/globals/components/Icons';
import { IconBubble } from './IconBubble';
import { Border } from '@/presentation/globals/components/utils/Border';
import { IconProps, IconTypes } from '@/presentation/globals/types';

type Props = {
	className?: string;
	Icon: React.ComponentType<IconProps>;
	title: string;
	description: string;
};

export function IconHeaderCard({ className, Icon, description, title }: Props) {
	return (
		<article
			className={`relative ld-sec-bg md:row-span-3 p-2 md:p-0 
            ${className}`}
		>
			<main className="relative z-3 flex flex-col gap-2 h-full p-4 overflow-hidden">
				<header className="relative flex-1 grid place-content-center">
					<figure className="relative z-1 bg-primary rounded-full p-1.5 shadow-lg shadow-primary/50">
						<Icon
							className="size-6 md:size-10 text-main-foreground mask-b-from-0% mask-b-to-100% mask-b-from-black mask-b-to-black/40"
							strokeWidth="1.5"
						/>
					</figure>
				</header>
				<main className="text-center">
					<header className="font-funnel-display text-xl ld-main-fg font-bold">
						{title}
					</header>
					<p className="text-base md:text-lg leading-[1.3] text-zinc-400">
						{description}
					</p>
				</main>
			</main>
			<Border
				className="bg-sec-foreground/30 mask-radial-[50%_50%] mask-radial-at-top-left mask-radial-from-0% mask-radial-to-150% mask-radial-from-black mask-radial-to-black/50 light:mask-none light:bg-foreground/10"
				border={2}
			/>
		</article>
	);
}
