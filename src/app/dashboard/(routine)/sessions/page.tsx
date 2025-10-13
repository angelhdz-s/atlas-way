import Link from "next/link";
import { SESSIONS } from "@/modules/globals/mocks/sessions";
import { PageContainer } from "@/modules/dashboard/page/components/PageContainer";
import { PageContent } from "@/modules/dashboard/page/components/PageContent";
import { PageHeader } from "@/modules/dashboard/page/components/PageHeader";
import { Session } from "@/modules/session/components/Session";
import { ClipboardList } from "@/modules/globals/components/Icons";

export default function SessionsPage() {
	return (
		<PageContainer>
			<PageHeader
				title="Sessions"
				description="Manage your days planifications"
				className=""
			>
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
