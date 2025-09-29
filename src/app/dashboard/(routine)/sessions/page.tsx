import Link from "next/link";
import { SESSIONS } from "@/modules/globals/mocks/sessions";
import { PageContainer } from "@/modules/dashboard/page/components/PageContainer";
import { PageContent } from "@/modules/dashboard/page/components/PageContent";
import { PageHeader } from "@/modules/dashboard/page/components/PageHeader";
import { Session } from "@/modules/session/components/Session";

export default function SessionsPage() {
	return (
		<PageContainer>
			<PageHeader
				title="Sessions"
				className="flex items-center justify-between"
			>
				<Link href="/dashboard/sessions/create" className="btn-primary btn-md">
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
