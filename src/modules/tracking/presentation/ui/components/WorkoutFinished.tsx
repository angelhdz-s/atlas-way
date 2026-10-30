import type { WorkoutStatusEnum } from '@/prisma/client';
import { EmptyDataPage } from '@/presentation/globals/components/empty-data/EmptyDataPage';
import { Link } from '@/presentation/modules/button/components/Link';

const statusCopy: Record<
  Extract<WorkoutStatusEnum, 'COMPLETED' | 'INTERRUPTED' | 'SKIPPED'>,
  { title: string; description: string }
> = {
  COMPLETED: {
    title: 'Workout completed',
    description: 'Every target was completed. Great job!',
  },
  INTERRUPTED: {
    title: 'Workout interrupted',
    description: 'Some targets were completed, but not all of them.',
  },
  SKIPPED: {
    title: 'Workout skipped',
    description: 'No targets were completed for this workout.',
  },
};

export function WorkoutFinished({ statusId }: { statusId: WorkoutStatusEnum }) {
  const copy =
    statusId === 'COMPLETED' || statusId === 'INTERRUPTED' || statusId === 'SKIPPED'
      ? statusCopy[statusId]
      : statusCopy.SKIPPED;

  const icon = statusId === 'COMPLETED' ? 'circle-check' : 'circle-x';

  return (
    <EmptyDataPage icon={icon} title={copy.title} description={copy.description}>
      <Link variant={{ color: 'primary', size: 'lg' }} href="/dashboard/tracking">
        Back to tracking
      </Link>
    </EmptyDataPage>
  );
}
