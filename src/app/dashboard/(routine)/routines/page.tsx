import Link from 'next/link';
import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import { MapPlus } from '@/presentation/globals/components/Icons';
import { ROUTINES } from '@/presentation/globals/mocks/routines';
import { Routine } from '@/modules/routine/presentation/ui/components/Routine';

export default function RoutinesPage() {
	return (
		<PageContainer>
			<PageHeader
				title="Your Routines"
				description="Create and manage your routines to automate tasks and workflows."
			>
				<Link href="/dashboard/routines/create" className="pil-btn">
					<MapPlus className="size-5" strokeWidth="2" />
					New Routine
				</Link>
			</PageHeader>
			<PageContent className="flex flex-col gap-4">
				<section className="flex flex-wrap gap-4">
					{ROUTINES.map((routine, index) => (
						<Routine
							key={routine.name}
							data={routine}
							type={index === 0 ? 'default' : 'default'}
						/>
					))}
				</section>
			</PageContent>
		</PageContainer>
	);
}
