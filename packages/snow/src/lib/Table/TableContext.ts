'use client';
import { createContext } from 'react';
import { SnowColor, SnowSize } from '../types';
import { TableLayout, TableVariant } from './types';

export interface TableContextProps {
  size: SnowSize;
  variant: TableVariant;
  layout: TableLayout;
  color?: SnowColor;
}

export const TableContext = createContext<TableContextProps>({
  size: 'medium',
  variant: 'ghost',
  layout: 'responsive',
});
