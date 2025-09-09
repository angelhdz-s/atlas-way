import Link from "next/link";
import { ROUTINES } from "@/modules/globals/mocks/routines";
import { PageContainer } from "@/modules/dashboard/page/components/PageContainer";
import { PageContent } from "@/modules/dashboard/page/components/PageContent";
import { PageHeader } from "@/modules/dashboard/page/components/PageHeader";
import { Routine } from "@/modules/routines/components/Routine";

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
