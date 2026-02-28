'use client';

import { useParams } from 'next/navigation';
import { PageContainer } from '@/presentation/modules/dashboard/page/components/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/page/components/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/page/components/PageHeader';
import { VariantLink } from '@/presentation/modules/button/components/VariantLink';

export default function RoutinesPage() {
  const id = useParams().id as string;
  return (
    <PageContainer>
      <PageHeader
        title={id}
        className="flex items-center justify-between"
      >
        <VariantLink
          href={`/dashboard/sessions/${id}/add-exercise`}
          size="md"
          color="primary"
        >
          Add Exercises
        </VariantLink>
      </PageHeader>
      <PageContent>
        <p>Description</p>
        <main>Content (Exercises)</main>
      </PageContent>
    </PageContainer>
  );
}
