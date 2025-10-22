import { Advantages } from '@/modules/landing/components/Advantages';
import { BentoGrid } from '@/modules/landing/components/BentoGrid';
import { Footer } from '@/modules/landing/components/Footer';
import { Header } from '@/modules/landing/components/Header';
import { Hero } from '@/modules/landing/components/Hero';
import { Try } from '@/modules/landing/components/Try';

export default function Home() {
	return (
		<>
			<Header className="font-funnel-display" />
			<main className="w-full px-4 lg:px-0 flex flex-col flex-1 font-funnel-display text-lg">
				<Hero />
				<Advantages />
				<BentoGrid />
				<Try />
			</main>
			<Footer className="font-funnel-display" />
		</>
	);
}
