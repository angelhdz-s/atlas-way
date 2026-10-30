'use client';

import { useHeaderNav } from '@/presentation/modules/nav/hooks/useHeaderNav';
import { Button } from '@/presentation/modules/button/components/Button';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { NavList } from '@/presentation/modules/nav/components/NavList';

export function HeaderNav() {
  const { showing, showNav, closeNav } = useHeaderNav();

  return (
    <div className="w-full md:mx-auto md:grid md:w-fit md:place-items-center">
      <nav className="relative text-lg font-medium">
        <Button
          type="button"
          variant={{
            color: 'simple',
            type: 'icon',
          }}
          onClick={showNav}
          className="md:hidden"
          aria-label="Open navigation items"
        >
          <Icon icon="menu" variant={{ size: 'md', weight: 'moderate' }} />
        </Button>
        <NavList isOpen={showing} onClose={closeNav} />
      </nav>
    </div>
  );
}
