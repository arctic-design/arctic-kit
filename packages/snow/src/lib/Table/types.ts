import { ReactNode } from 'react';
import { SnowColor, SnowSize } from '../types';

export type TableVariant = 'surface' | 'ghost';
export type TableLayout = 'responsive' | 'fixed';

export interface TableRootProps {
  size?: SnowSize;
  variant?: TableVariant;
  layout?: TableLayout;
  children: ReactNode;
  color?: SnowColor;
}

export interface TableHeaderProps {
  children: ReactNode;
  variant?: TableVariant;
  color?: SnowColor;
}

export interface TableBodyProps {
  children: ReactNode;
  variant?: TableVariant;
}

export interface TableRowProps {
  children: ReactNode;
}

export interface TableCellProps {
  children: ReactNode;
  size?: SnowSize;
  color?: SnowColor;
}

export interface TableHeaderCellProps {
  children: ReactNode;
  size?: SnowSize;
  color?: SnowColor;
}

export interface TableRowHeaderCellProps {
  children: ReactNode;
  size?: SnowSize;
  color?: SnowColor;
}
