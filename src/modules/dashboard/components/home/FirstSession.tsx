import Image from "next/image";
import { ImageBackground } from "./ImageBackground";

export function FirstSession({ className = "" }: { className?: string }) {
	return (
		<article
			className={`relative bg-background light:bg-light-sec-background p-8 border-1 border-foreground/10 overflow-hidden ${className}`}
		>
			<h3 className="font-funnel-display ld-main-fg text-4xl">
				Create Sessions For Your Routine
			</h3>
			<ImageBackground>
				<Image
					src="/images/dashboard/session-dark.png"
					alt="Description of image"
					width={773}
					height={876}
					className="aspect-[773/876]"
				/>
			</ImageBackground>
		</article>
	);
}
