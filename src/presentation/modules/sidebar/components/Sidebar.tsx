import { SidebarFooter } from '@/presentation/modules/sidebar/components/SidebarFooter';
import { SidebarSection } from '@/presentation/modules/sidebar/components/SidebarSection';
import { NavLinks } from '@/presentation/modules/sidebar/components/nav/NavLinks';
import { NavLink } from '@/presentation/modules/sidebar/components/nav/NavLink';
import { NavLinkIcon } from '@/presentation/modules/sidebar/components/nav/NavLinkIcon';

export function Sidebar({ className = '' }: { className?: string }) {
  return (
    <aside className="bg-primary w-(--sidebar-width)">
      <main
        className={`bg-fill-back border-bd-muted fixed top-(--header-height) left-0 z-10 flex h-(--sidebar-height) w-(--sidebar-width) flex-col gap-4 border-r shadow-2xl shadow-black/5 ${className}`}
      >
        <div className="flex-1 space-y-4 py-2 lg:p-2 lg:pt-4">
          <header>
            <NavLinks>
              <NavLink href="/dashboard" label="Home">
                <NavLinkIcon icon="house" />
              </NavLink>

              <NavLink
                href="/dashboard/notifications"
                variant={{ notice: 'unread' }}
                label="Notifications"
              >
                <NavLinkIcon icon="bell" />
              </NavLink>

              {/* <NavLinkNotification Icon={IconBell} href="/dashboard/notifications" /> */}

              <NavLink href="/dashboard/tracking" label="Tracking">
                <NavLinkIcon icon="notepad-text" />
              </NavLink>
            </NavLinks>
          </header>

          <main className="space-y-4">
            <SidebarSection name="Main">
              <NavLinks>
                <NavLink href="/dashboard/routines" label="Routines">
                  <NavLinkIcon icon="waypoints" />
                </NavLink>

                <NavLink href="/dashboard/sessions" label="Sessions">
                  <NavLinkIcon icon="clipboard-list" />
                </NavLink>

                <NavLink href="/dashboard/exercises" label="Exercises">
                  <NavLinkIcon icon="dumbbell" />
                </NavLink>

                <NavLink href="/dashboard/muscles" label="Muscles">
                  <NavLinkIcon icon="person-standing" />
                </NavLink>
              </NavLinks>
            </SidebarSection>

            <SidebarSection name="Analytics">
              <NavLinks>
                <NavLink href="/dashboard/statistics" label="Statistics">
                  <NavLinkIcon icon="chart-no-axes-combined" />
                </NavLink>
              </NavLinks>
            </SidebarSection>
          </main>
        </div>

        <SidebarFooter />
      </main>
    </aside>
  );
}
