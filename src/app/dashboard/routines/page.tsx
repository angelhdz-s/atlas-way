import Link from "next/link";
import { ROUTINES } from "@/mocks/routines";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import { Routine } from "@/modules/dashboard/components/routines/Routine";

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
			<PageContent className="flex flex-wrap gap-4">
				{ROUTINES.map((routine, index) => (
					<Routine
						key={routine.name}
						data={routine}
						type={index === 0 ? "default" : "default"}
					/>
				))}
			</PageContent>
		</PageContainer>
	);
}
