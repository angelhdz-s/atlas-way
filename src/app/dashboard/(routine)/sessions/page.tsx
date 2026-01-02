import Link from 'next/link';
import { SESSIONS } from '@/presentation/globals/mocks/sessions';
import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import { Session } from '@/modules/session/presentation/ui/components/Session';
import { ClipboardList } from '@/presentation/globals/components/Icons';

export default function SessionsPage() {
	return (
		<PageContainer>
			<PageHeader title="Sessions" description="Manage your days planifications" className="">
				<Link href="/dashboard/sessions/create" className="pil-btn">
					<ClipboardList className="size-5" strokeWidth="2" />
					Create Session
				</Link>
			</PageHeader>
			<PageContent className="flex flex-wrap gap-4 w-fit">
				{SESSIONS.map((session) => (
					<Session key={session.name} data={session} />
				))}
			</PageContent>
		</PageContainer>
	);
}
