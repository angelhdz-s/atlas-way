"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { PageContainer } from "@/modules/dashboard/components/page/PageContainer";
import { PageContent } from "@/modules/dashboard/components/page/PageContent";
import { PageHeader } from "@/modules/dashboard/components/page/PageHeader";

export default function RoutinesPage() {
	const id = useParams().id as string;
	return (
		<PageContainer>
			<PageHeader title={id} className="flex items-center justify-between">
				<Link
					href={`/dashboard/sessions/${id}/add-exercise`}
					className="btn-primary btn-md"
				>
					Add Exercises
				</Link>
			</PageHeader>
			<PageContent>
				<p>Description</p>
				<main>Content (Exercises)</main>
			</PageContent>
		</PageContainer>
	);
}
