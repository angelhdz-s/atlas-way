import { ChangeEvent, ChangeEventHandler, useEffect, useRef, useState } from 'react';

const MD_BREAKPOINT = 768;

export function useHeaderNav() {
	const [showing, setShowing] = useState(false);
	const handleClick = () => {
		setShowing((prev) => {
			const state = !prev;
			return state;
		});
	};

	const handleClickOut = () => {
		setShowing(false);
	};

	const hiddenClass = (show: boolean, el: 'button' | 'backdrop'): string => {
		if (el === 'backdrop') return show ? '' : 'hidden';
		return show ? '' : 'hidden';
	};

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);

		const handleChange = (e: MediaQueryListEvent) => {
			if (e.matches) {
				setShowing(false);
			}
		};

		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	});

	return {
		showing,
		handleClick,
		hiddenClass,
		handleClickOut,
	};
}
