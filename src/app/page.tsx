import { Advantages } from '@/presentation/modules/landing/components/Advantages';
import { BentoGrid } from '@/presentation/modules/landing/components/BentoGrid';
import { Footer } from '@/presentation/modules/landing/components/Footer';
import { Header } from '@/presentation/modules/landing/components/Header';
import { Hero } from '@/presentation/modules/landing/components/Hero';
import { Try } from '@/presentation/modules/landing/components/Try';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex w-full flex-1 flex-col px-4 text-lg lg:px-0">
        <Hero />
        <Advantages />
        <BentoGrid />
        <Try />
      </main>
      <Footer />
    </>
  );
}
