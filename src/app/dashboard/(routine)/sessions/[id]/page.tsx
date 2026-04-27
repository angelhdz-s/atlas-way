'use client';

import { useParams } from 'next/navigation';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { Link } from '@/presentation/modules/button/components/Link';
import { IconPlus } from '@/presentation/globals/components/icons/outline/IconPlus';

export default function RoutinesPage() {
  const id = useParams().id as string;
  return (
    <PageContainer>
      <PageHeader title={id} className="flex items-center justify-between">
        <Link
          href={`/dashboard/sessions/${id}/add-exercise`}
          variant={{ color: 'primary', type: 'iconText' }}
          Icon={IconPlus}
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
