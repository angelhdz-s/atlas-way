import { Breadcrumb } from './Breadcrumb';
import { Imagotype } from '@/presentation/globals/components/AppLogo';
import { UserInfo } from '../../../../modules/user/presentation/ui/components/UserInfo';
import Link from 'next/link';

export function Header({ className = '' }: { className?: string }) {
  return (
    <header className="h-(--header-height) w-full">
      <main
        className={`bg-back border-bd-muted font-funnel-display fixed top-0 left-0 z-10 grid h-(--header-height) w-full grid-cols-[auto_auto_auto] gap-4 border-b pr-4 md:grid-cols-[1fr_auto_1fr] ${className}`}
      >
        <section className="flex h-full items-center gap-2">
          <main className="border-bd-muted flex h-full w-(--sidebar-width) items-center justify-between gap-0 border-r lg:pl-4">
            <Link
              href="/"
              className="font-funnel-display mx-auto flex items-center gap-2 font-light lg:mx-0"
            >
              <Imagotype />
            </Link>
          </main>
          <Breadcrumb />
        </section>
        <section className="flex h-full items-center gap-2">
          <input
            type="search"
            placeholder="Search"
            className="border-bd-default outline-strong h-10 w-36 rounded-4xl border px-4 focus:outline-2 md:w-auto md:flex-1"
          />
        </section>
        <section className="flex h-full items-center justify-end gap-2">
          <UserInfo />
        </section>
      </main>
    </header>
  );
}
