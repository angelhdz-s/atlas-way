import { Breadcrumb } from './Breadcrumb';
import { ToggleTheme } from '@/presentation/globals/components/ToggleTheme';
import { LangButton } from '@/presentation/globals/components/LangButton';
import { SettingsButton } from '@/presentation/globals/components/SettingsButton';
import { UserInfo } from '../../../../modules/user/presentation/ui/components/UserInfo';
import { NotificationsButton } from '../../../../modules/notification/presentation/ui/components/NotificationsButton';
import Link from 'next/link';
import { Imagotype } from '@/presentation/globals/components/AppLogo';

export function Header({ className = '' }: { className?: string }) {
  return (
    <header className="h-(--header-height) w-full">
      <main
        className={`bg-middle font-funnel-display fixed top-0 left-0 z-10 grid h-(--header-height) w-full grid-cols-[1fr_auto_1fr] gap-4 pr-2 ${className}`}
      >
        <section className="flex h-full items-center gap-2">
          <main className="flex h-full w-(--sidebar-width) items-center justify-between gap-0 pl-4">
            <Link href="/" className="font-funnel-display flex items-center gap-2 font-light">
              <Imagotype />
            </Link>
          </main>
          <Breadcrumb />
        </section>
        <section className="flex h-full items-center gap-2">
          <input
            type="search"
            placeholder="Search"
            className="h-8 flex-1 rounded-4xl border border-current/20 px-4 outline-none"
          />
          <nav>
            <ul className="flex items-center">
              <li>
                <NotificationsButton />
              </li>
              <li>
                <SettingsButton />
              </li>
              <li>
                <ToggleTheme />
              </li>
              <li>
                <LangButton />
              </li>
            </ul>
          </nav>
        </section>
        <section className="flex h-full items-center justify-end gap-2">
          <UserInfo />
        </section>
      </main>
    </header>
  );
}
