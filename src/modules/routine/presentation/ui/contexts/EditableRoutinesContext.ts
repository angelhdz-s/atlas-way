import { createContext } from 'react';

export type EditableRoutinesContextValue = {
  sessions: {
    id: string;
    name: string;
  }[];
};

export const EditableRoutinesContext = createContext<EditableRoutinesContextValue | null>(null);
