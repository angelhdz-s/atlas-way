import { RoutineModalForm } from '@/modules/routine/presentation/ui/components/RoutineModalForm';
import { getAllSessions } from '@/modules/session/presentation/session.actions';
import type { SelectOption } from '@/presentation/modules/form/form.types';

export default async function CreateRoutinePage() {
  const sessionsData = await getAllSessions();

  const sessions = sessionsData.success ? sessionsData.data : [];

  const sessionOptions: SelectOption[] = sessions.map((session) => ({
    value: session.id,
    label: session.name,
  }));

  return <RoutineModalForm sessions={sessionOptions} />;
}
