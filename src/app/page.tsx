import { Advantages } from "@/modules/landing/components/Advantages";
import { BentoGrid } from "@/modules/landing/components/BentoGrid";
import { Footer } from "@/modules/landing/components/Footer";
import { Header } from "@/modules/landing/components/Header";
import { Hero } from "@/modules/landing/components/Hero";

export default async function Home() {
	return (
		<>
			<Header className="font-funnel-display" />
			<main className="w-full flex flex-col flex-1 font-funnel-display">
				<Hero />
				<Advantages />
				<BentoGrid />
				{/* Register | Try AtlasWay for Free */}
			</main>
			<Footer className="font-funnel-display" />
		</>
	);
}
