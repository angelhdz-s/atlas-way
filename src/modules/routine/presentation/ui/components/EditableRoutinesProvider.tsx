'use client';

import {
  EditableRoutinesContext,
  type EditableRoutinesContextValue,
} from '@/modules/routine/presentation/ui/contexts/EditableRoutinesContext';
import { useMemo } from 'react';

type Props = {
  children: React.ReactNode;
  sessions: EditableRoutinesContextValue['sessions'];
};

export function EditableRoutinesProvider({ sessions, children }: Props) {
  const value = useMemo(() => {
    return {
      sessions,
    };
  }, [sessions]);
  return (
    <EditableRoutinesContext.Provider value={value}>{children}</EditableRoutinesContext.Provider>
  );
}
