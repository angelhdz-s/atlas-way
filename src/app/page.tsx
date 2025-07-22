import { Footer } from "@/modules/landing/components/Footer";
import { Header } from "@/modules/landing/components/Header";

export default async function Home() {
	return (
		<>
			<Header />
			<main className="w-full flex flex-col flex-1">
				<section className="max-w-5xl w-full mx-auto flex items-center justify-between gap-4 py-16">
					<header className="flex flex-col gap-4">
						<h1 className="text-4xl font-bold">Welcome to AtlasWay!</h1>
						<p className="max-w-xl">
							{`
                AtlasWay is your go-to platform for tracking workouts, exercises,
                and nutrition. Whether you're a beginner or a seasoned athlete, we
                provide the tools you need to achieve your fitness goals.
              `}
						</p>
					</header>
					<aside className="">
						<figure className="size-82 bg-blue-500 rounded-full"></figure>
					</aside>
				</section>

				<section className="max-w-5xl w-full mx-auto mb-16">
					<header>
						<h2 className="text-2xl font-bold">Why AtlasWay?</h2>
					</header>

					<main>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
							<li className="flex items-center gap-4">
								<header className="flex flex-col gap-2 flex-1">
									<h3>Highly Customizable</h3>
									<p>
										Tailor your workout routines and nutrition plans to fit your
										unique needs.
									</p>
								</header>
								<figure className="size-24 bg-green-500 rounded-full"></figure>
							</li>

							<li className="flex items-center gap-4">
								<header className="flex flex-col gap-2 flex-1">
									<h3>Highly Customizable</h3>
									<p>
										Tailor your workout routines and nutrition plans to fit your
										unique needs.
									</p>
								</header>
								<figure className="size-24 bg-green-500 rounded-full"></figure>
							</li>

							<li className="flex items-center gap-4">
								<header className="flex flex-col gap-2 flex-1">
									<h3>Highly Customizable</h3>
									<p>
										Tailor your workout routines and nutrition plans to fit your
										unique needs.
									</p>
								</header>
								<figure className="size-24 bg-green-500 rounded-full"></figure>
							</li>

							<li className="flex items-center gap-4">
								<header className="flex flex-col gap-2 flex-1">
									<h3>Highly Customizable</h3>
									<p>
										Tailor your workout routines and nutrition plans to fit your
										unique needs.
									</p>
								</header>
								<figure className="size-24 bg-green-500 rounded-full"></figure>
							</li>
						</ul>
					</main>
				</section>
			</main>
			<Footer />
		</>
	);
}
