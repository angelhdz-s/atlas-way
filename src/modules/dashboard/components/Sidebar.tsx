import Link from "next/link";
import { NavLink } from "@/modules/dashboard/components/NavLink";
import styles from "@/modules/dashboard/components/Sidebar.module.css";
import { NotificationsCounter } from "@/modules/dashboard/components/NotificationsCounter";
import { SidebarSection } from "@/modules/dashboard/components/SidebarSection";
import { SidebarFooter } from "@/modules/dashboard/components/SidebarFooter";
import { AtlasWayLogo } from "@/modules/globals/components/AtlasWayLogo";
import { DropDownLink } from "@/modules/globals/components/DropdownLink";
import {
	Bell,
	Bolt,
	ClipboardDocumentList,
	Clock,
	Forward,
	Home,
	Scale,
	TrendingUp,
} from "@/modules/globals/components/Icons";

export function Sidebar({ className = "" }: { className?: string }) {
	return (
		<aside className="w-74">
			<main
				className={`fixed top-0 left-0 bottom-0 w-74 h-full flex flex-col gap-4 ld-sec-bg shadow-2xl shadow-black/[0.05] ${className}`}
			>
				<header>
					<Link
						href="/"
						className="p-4 flex items-center gap-2 text-2xl font-bold font-funnel-display"
					>
						<AtlasWayLogo />
					</Link>
					<nav className="flex flex-col">
						<NavLink href="/dashboard" className={styles.nav_link}>
							<Home className="size-5" />
							Home
						</NavLink>
						<NavLink
							href="/dashboard/notifications"
							className={`flex-1 ${styles.nav_link}`}
						>
							<Bell className="size-5" />
							Notifications
							<NotificationsCounter />
						</NavLink>
						<NavLink href="/dashboard/tracking" className={styles.nav_link}>
							<Forward className="size-5" />
							Session Tracking
						</NavLink>
					</nav>
				</header>

				<main className="flex-1 flex flex-col gap-4">
					<SidebarSection name="Main">
						<nav>
							<ul>
								<DropDownLink
									href="/dashboard/routines"
									header={
										<>
											<ClipboardDocumentList className="size-5" />
											Routines
										</>
									}
								>
									<NavLink
										href="/dashboard/routines/routine1"
										className={styles.nav_sub_link}
									>
										Routine 1
									</NavLink>
									<NavLink
										href="/dashboard/routines/routine2"
										className={styles.nav_sub_link}
									>
										Routine 2
									</NavLink>
								</DropDownLink>

								<DropDownLink
									href="/dashboard/sessions"
									header={
										<>
											<Clock className="size-5" />
											Sessions
										</>
									}
								>
									<NavLink
										href="/dashboard/sessions/session1"
										className={styles.nav_sub_link}
									>
										Session 1
									</NavLink>
									<NavLink
										href="/dashboard/sessions/session2"
										className={styles.nav_sub_link}
									>
										Session 2
									</NavLink>
								</DropDownLink>

								<li>
									<NavLink
										href="/dashboard/exercises"
										className={styles.nav_link}
									>
										<Bolt className="size-5" />
										Exercises
									</NavLink>
								</li>

								<li>
									<NavLink
										href="/dashboard/muscles"
										className={styles.nav_link}
									>
										<Scale className="size-5" />
										Muscles
									</NavLink>
								</li>
							</ul>
						</nav>
					</SidebarSection>

					<SidebarSection name="Analytics">
						<nav>
							<ul>
								<DropDownLink
									href="/dashboard/statistics"
									header={
										<>
											<TrendingUp className="size-5" />
											Statistics
										</>
									}
								>
									<NavLink
										href="/dashboard/statistics/routines"
										className={styles.nav_sub_link}
									>
										Routines
									</NavLink>
									<NavLink
										href="/dashboard/statistics/sessions"
										className={styles.nav_sub_link}
									>
										Sessions
									</NavLink>
									<NavLink
										href="/dashboard/statistics/exercises"
										className={styles.nav_sub_link}
									>
										Exercises
									</NavLink>
									<NavLink
										href="/dashboard/statistics/muscles"
										className={styles.nav_sub_link}
									>
										Muscles
									</NavLink>
								</DropDownLink>
							</ul>
						</nav>
					</SidebarSection>
				</main>

				<SidebarFooter name="Angel Sotelo" email="useremail@example.com" />
			</main>
		</aside>
	);
}
