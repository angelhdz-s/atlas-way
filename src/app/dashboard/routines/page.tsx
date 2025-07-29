import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import { Routine } from "@/modules/dashboard/components/routines/Routine";
import Link from "next/link";

export default function RoutinesPage() {
	return (
		<PageContainer>
			<PageHeader
				title="Your Routines"
				className="flex items-center justify-between"
			>
				<Link href="/dashboard/routines/create" className="btn-primary btn-md">
					Create Routine
				</Link>
			</PageHeader>
			<PageContent className="grid grid-cols-2 gap-4 w-fit">
				<Routine />
				<Routine />
				<Routine />
				<Routine />
			</PageContent>
		</PageContainer>
	);
}
