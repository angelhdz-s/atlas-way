import { useEffect, useState } from 'react';

const MD_BREAKPOINT = 768;

export function useHeaderNav() {
  const [showing, setShowing] = useState(false);
  const showNav = () => {
    setShowing((prev) => {
      const state = !prev;
      return state;
    });
  };

  const closeNav = () => {
    setShowing(false);
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
    showNav,
    closeNav,
  };
}
