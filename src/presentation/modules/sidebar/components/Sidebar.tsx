import { SidebarFooter } from '@/presentation/modules/sidebar/components/SidebarFooter';
import { SidebarSection } from '@/presentation/modules/sidebar/components/SidebarSection';
import { NavLinks } from '@/presentation/modules/sidebar/components/nav/NavLinks';
import { NavLink } from '@/presentation/modules/sidebar/components/nav/NavLink';
import { NavLinkIcon } from '@/presentation/modules/sidebar/components/nav/NavLinkIcon';
import { IconBarbell } from '@/presentation/globals/components/icons/outline/IconBarbell';
import { IconBell } from '@/presentation/globals/components/icons/outline/IconBell';
import { IconCalendarCheck } from '@/presentation/globals/components/icons/outline/IconCalendarCheck';
import { IconHome } from '@/presentation/globals/components/icons/outline/IconHome';
import { IconMan } from '@/presentation/globals/components/icons/outline/IconMan';
import { IconReportAnalytics } from '@/presentation/globals/components/icons/outline/IconReportAnalytics';
import { IconRouteX } from '@/presentation/globals/components/icons/outline/IconRouteX';
import { IconSchema } from '@/presentation/globals/components/icons/outline/IconSchema';

export function Sidebar({ className = '' }: { className?: string }) {
  return (
    <aside className="w-(--sidebar-width)">
      <main
        className={`bg-back border-bd-muted fixed top-(--header-height) left-0 z-10 flex h-(--sidebar-height) w-(--sidebar-width) flex-col gap-4 border-r shadow-2xl shadow-black/5 ${className}`}
      >
        <div className="flex-1 space-y-4 py-2 lg:p-2 lg:pt-4">
          <header>
            <NavLinks>
              <NavLink href="/dashboard" label="Home">
                <NavLinkIcon Icon={IconHome} />
              </NavLink>

              <NavLink
                href="/dashboard/notifications"
                variant={{ notice: 'unread' }}
                label="Notifications"
              >
                <NavLinkIcon Icon={IconBell} />
              </NavLink>

              {/* <NavLinkNotification Icon={IconBell} href="/dashboard/notifications" /> */}

              <NavLink href="/dashboard/tracking" label="Tracking">
                <NavLinkIcon Icon={IconCalendarCheck} />
              </NavLink>
            </NavLinks>
          </header>

          <main className="space-y-4">
            <SidebarSection name="Main">
              <NavLinks>
                <NavLink href="/dashboard/routines" label="Routines">
                  <NavLinkIcon Icon={IconRouteX} />
                </NavLink>

                <NavLink href="/dashboard/sessions" label="Sessions">
                  <NavLinkIcon Icon={IconSchema} />
                </NavLink>

                <NavLink href="/dashboard/exercises" label="Exercises">
                  <NavLinkIcon Icon={IconBarbell} />
                </NavLink>

                <NavLink href="/dashboard/muscles" label="Muscles">
                  <NavLinkIcon Icon={IconMan} />
                </NavLink>
              </NavLinks>
            </SidebarSection>

            <SidebarSection name="Analytics">
              <NavLinks>
                <NavLink href="/dashboard/statistics" label="Statistics">
                  <NavLinkIcon Icon={IconReportAnalytics} />
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
