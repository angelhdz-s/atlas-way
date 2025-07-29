import Link from "next/link";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";
import { Session } from "@/modules/dashboard/components/routines/Session";

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
			<PageContent className="grid grid-cols-2 gap-4 w-fit">
				<Session />
				<Session />
				<Session />
				<Session />
			</PageContent>
		</PageContainer>
	);
}
