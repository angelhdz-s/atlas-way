import { FirstRoutine } from "@/modules/dashboard/components/home/FirstRoutine";
import { FirstSession } from "@/modules/dashboard/components/home/FirstSession";
import { MainCard } from "@/modules/dashboard/components/home/MainCard";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";

export default function Dashboard() {
	return (
		<PageContainer>
			<PageHeader title="Welcome" />
			<PageContent className="grid grid-cols-12 gap-4 *:rounded-3xl">
				<MainCard className="col-span-4" />
				<FirstRoutine className="col-span-2" />
				<FirstSession className="col-span-2" />
			</PageContent>
		</PageContainer>
	);
}
