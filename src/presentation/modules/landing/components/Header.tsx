import Link from 'next/link';
import { ToggleTheme } from '@/presentation/globals/components/ToggleTheme';
import { SessionButtons } from '@/modules/auth/presentation/ui/components/SessionButtons';
import { Imagotype } from '@/presentation/globals/components/AppLogo';
import { HeaderNav } from '../../nav/components/HeaderNav';

export function Header({
  className = '',
}: {
  className?: string;
}) {
  return (
    <header className={`h-14 ${className}`}>
      <main className="bg-middle fixed z-10 h-14 w-full">
        <div className="top-0 left-0 mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-1 px-4 md:gap-4 md:px-4 lg:px-0">
          <div className="flex w-full flex-row items-center justify-start gap-2 md:grid md:grid-cols-[1fr_auto_1fr] md:justify-between md:gap-0">
            <aside className="w-fit">
              <Link
                href="/"
                className="flex items-center gap-2"
              >
                <Imagotype />
              </Link>
            </aside>
            <HeaderNav />
            <div className="flex items-center justify-end gap-0 md:gap-2">
              <ToggleTheme />
              <SessionButtons />
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}
