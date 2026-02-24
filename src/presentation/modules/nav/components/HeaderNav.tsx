'use client';

import { Menu } from '@/presentation/globals/components/Icons';
import Link from 'next/link';
import { useHeaderNav } from '../hooks/useHeaderNav';

export function HeaderNav() {
	const { showing, handleClick, handleClickOut, hiddenClass } = useHeaderNav();

	return (
		<div className="w-full md:w-fit md:grid md:place-items-center md:mx-auto">
			<nav className="relative font-medium text-lg">
				<button
					type="button"
					onClick={handleClick}
					className="block cursor-pointer md:hidden
					hover:text-main-foreground transition-colors"
				>
					<Menu className="size-8" />
				</button>
				<ul
					className={`${hiddenClass(showing, 'button')}
					flex items-start text-left absolute flex-col gap-0 z-10
                    top-10 -left-10 bg-sec-background rounded-md py-2 w-48
					md:top-auto md:left-auto md:flex md:w-full
                    md:relative md:items-center md:flex-row md:gap-16 md:text-center 
                    md:p-0 md:bg-transparent ld-main-fg
                    *:h-full *:w-full *:grid *:place-items-start *:transition-colors 
					*:cursor-pointer
                    *:px-6 *:py-2 *:hover:text-current/50 *:hover:bg-sky-50/5
                    *:md:place-items-center *:md:p-0 *:md:w-fit *:md:hover:bg-transparent
					
                `}
				>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/">Exercises</Link>
					</li>
					<li>
						<Link href="/">Workouts</Link>
					</li>
				</ul>
			</nav>
			{showing && (
				<div
					onClick={handleClickOut}
					className={`fixed inset-0 bg-background/80 z-1 md:hidden`}
				></div>
			)}
		</div>
	);
}
