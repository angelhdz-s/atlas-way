import { createContext, type Dispatch, type SetStateAction } from 'react';

export type CalendarContextType = {
  selectedDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
};

export const CalendarContext = createContext<CalendarContextType>({
  selectedDate: new Date(),
  setCurrentDate: () => {},
});
