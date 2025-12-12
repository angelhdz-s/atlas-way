import { SidebarAnalyticsSection } from '@/modules/sidebar/components/SidebarAnalyticsSection';
import { SidebarFooter } from '@/modules/sidebar/components/SidebarFooter';
import { SidebarHeader } from '@/modules/sidebar/components/SidebarHeader';
import { SidebarMainSection } from '@/modules/sidebar/components/SidebarMainSection';

export function Sidebar({ className = '' }: { className?: string }) {
	return (
		<aside className="w-(--sidebar-width)">
			<main
				className={`
					py-2 fixed z-10 left-0 top-(--header-height) h-(--sidebar-height) 
					flex flex-col ld-sec-bg shadow-2xl shadow-black/5 font-normal font-funnel-display 
					before:absolute before:inset-0 before:bottom-auto before:h-px before:w-[80%] before:mx-auto before:bg-subtle/10
					w-(--sidebar-width) gap-4 ${className}`}
			>
				<SidebarHeader />

				<main className="flex-1 flex flex-col gap-4">
					<SidebarMainSection />

					<SidebarAnalyticsSection />
				</main>

				<SidebarFooter />
			</main>
		</aside>
	);
}
