import { SidebarAnalyticsSection } from '@/presentation/modules/sidebar/components/SidebarAnalyticsSection';
import { SidebarFooter } from '@/presentation/modules/sidebar/components/SidebarFooter';
import { SidebarHeader } from '@/presentation/modules/sidebar/components/SidebarHeader';
import { SidebarMainSection } from '@/presentation/modules/sidebar/components/SidebarMainSection';

export function Sidebar({ className = '' }: { className?: string }) {
  return (
    <aside className="w-(--sidebar-width)">
      <main
        className={`bg-middle before:bg-subtle/10 fixed top-(--header-height) left-0 z-10 flex h-(--sidebar-height) w-(--sidebar-width) flex-col gap-4 py-2 font-normal shadow-2xl shadow-black/5 before:absolute before:inset-0 before:bottom-auto before:mx-auto before:h-px before:w-[80%] ${className}`}
      >
        <SidebarHeader />

        <main className="flex flex-1 flex-col gap-4">
          <SidebarMainSection />

          <SidebarAnalyticsSection />
        </main>

        <SidebarFooter />
      </main>
    </aside>
  );
}
