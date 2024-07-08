'use client';
import { createContext } from 'react';

export const ActionMenuContext = createContext<{
  getItemProps?: (
    userProps?: React.HTMLProps<HTMLElement>
  ) => Record<string, unknown>;
  activeIndex: number | null;
  setActiveIndex?: React.Dispatch<React.SetStateAction<number | null>>;
  setHasFocusInside?: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}>({
  activeIndex: null,

  isOpen: false,
});
