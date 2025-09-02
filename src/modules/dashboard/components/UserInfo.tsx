import { Dots } from "@/modules/globals/components/Icons";

export function UserInfo({ className = "" }: { className?: string }) {
	return (
		<footer className={`flex items-center gap-2 h-full ${className}`}>
			<main className={`flex items-center gap-3`}>
				<figure className="size-9 rounded-full bg-blue-600"></figure>
				<header className={`leading-[1]`}>
					<h4 className="text-left text-sm h-5 -mb-1 font-normal overflow-hidden whitespace-nowrap text-ellipsis ld-main-fg">
						Angel Sotelo
					</h4>
					<p className="text-sm font-light overflow-y-clip overflow-hidden whitespace-nowrap text-ellipsis">
						username@email.com
					</p>
				</header>
			</main>
			<button type="button" className="cursor-pointer p-2">
				<Dots className="size-6" />
			</button>
		</footer>
	);
}
