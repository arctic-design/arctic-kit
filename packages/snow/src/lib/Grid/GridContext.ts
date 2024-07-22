'use client';
import { createContext } from 'react';

export type GridContextProps = {
  spacing?: number;
  gutterWidth?: number;
  gutterCompensation?: number;
  halfGutterWidth?: number;
};

export const GridContext = createContext<GridContextProps>({
  gutterWidth: 0,
});
