import Image from "next/image";
import { CardTitle } from "../../card/components/CardTitle";
import { ImageBackground } from "./ImageBackground";

export function FirstRoutine({ className = "" }: { className?: string }) {
	return (
		<article
			className={`relative dashboard-card-default overflow-hidden ${className}`}
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
