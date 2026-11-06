import { EditableRoutinesContext } from '@/modules/routine/presentation/ui/contexts/EditableRoutinesContext';
import { useContext } from 'react';

export function useEditableRoutines() {
  const context = useContext(EditableRoutinesContext);
  if (context === null)
    throw new Error('useEditableRoutines needs to be used inside a <EditableRoutineProvider>');

  return context;
}
