import Image from "next/image";
import { CardTitle } from "./card/CardTitle";
import { ImageBackground } from "./ImageBackground";

export function FirstRoutine({ className = "" }: { className?: string }) {
	return (
		<article
			className={`relative bg-background light:bg-light-sec-background back p-8 border-1 border-foreground/10 overflow-hidden ${className}`}
		>
			<CardTitle title="Create Your First Routine" />
			<ImageBackground>
				<Image
					src="/images/dashboard/routine-dark.png"
					alt="Description of image"
					width={762}
					height={828}
					className="aspect-[762/828]"
				/>
			</ImageBackground>
		</article>
	);
}
