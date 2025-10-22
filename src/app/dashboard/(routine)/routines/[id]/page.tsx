'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PageContainer } from '@/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/modules/dashboard/page/components/PageHeader';

export default function RoutinesPage() {
	const id = useParams().id as string;
	return (
		<PageContainer>
			<PageHeader title={id} className="flex items-center justify-between">
				<Link href={`/dashboard/routines/${id}/add-session`} className="btn-primary btn-md">
					Add Session
				</Link>
			</PageHeader>
			<PageContent>
				<p>Description</p>
				<main>Content (Sessions)</main>
			</PageContent>
		</PageContainer>
	);
}
