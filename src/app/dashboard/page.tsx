import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import { Section } from "@/modules/dashboard/components/Section";

export default function Dashboard() {
	return (
		<PageContainer>
			<PageHeader title="Dashboard" />
			<PageContent className="flex flex-col gap-8">
				<Section
					title="Welcome to your dashboard"
					description="Here you can manage your workouts, routines, and more."
				>
					<p>This is your dashboard where you can manage your workouts.</p>
				</Section>
				<Section
					title="Welcome to your dashboard"
					description="Here you can manage your workouts, routines, and more."
				>
					<p className="text-foreground-sec">
						This is your dashboard where you can manage your workouts.
					</p>
				</Section>
			</PageContent>
		</PageContainer>
	);
}
