'use client';

import { IconMenu } from '@/presentation/globals/components/icons/outline/IconMenu';
import { useHeaderNav } from '@/presentation/modules/nav/hooks/useHeaderNav';
import { Button } from '@/presentation/modules/button/components/Button';
import { NavList } from './NavList';

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
          Icon={IconMenu}
        />
        <NavList isOpen={showing} onClose={closeNav} />
      </nav>
    </div>
  );
}
