import Link from "next/link";
import { PageContainer } from "@/modules/dashboard/page/components/PageContainer";
import { PageContent } from "@/modules/dashboard/page/components/PageContent";
import { PageHeader } from "@/modules/dashboard/page/components/PageHeader";
import { MapPlus } from "@/modules/globals/components/Icons";
import { ROUTINES } from "@/modules/globals/mocks/routines";
import { Routine } from "@/modules/routine/components/Routine";

export default function RoutinesPage() {
	return (
		<PageContainer>
			<PageHeader
				title="Your Routines"
				description="Create and manage your routines to automate tasks and workflows."
			></PageHeader>
			<PageContent className="flex flex-col gap-4">
				<section>
					<Link
						href="/dashboard/routines/create"
						className="flex items-center gap-1 btn-primary btn-md w-fit"
					>
						<MapPlus className="size-5" strokeWidth="2" />
						New Routine
					</Link>
				</section>
				<section className="flex flex-wrap gap-4">
					{ROUTINES.map((routine, index) => (
						<Routine
							key={routine.name}
							data={routine}
							type={index === 0 ? "default" : "default"}
						/>
					))}
				</section>
			</PageContent>
		</PageContainer>
	);
}
