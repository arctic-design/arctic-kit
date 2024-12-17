import { SxProp } from '@pigment-css/react';
import { SnowColor } from '../types';
import { SpacingMap } from './constants';

export type LayoutSpacingType = (typeof SpacingMap)[number];

export type LayoutType = {
  spacing?: LayoutSpacingType;
  color?: SnowColor;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  onClick?: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  tabIndex?: number;
  sx?: SxProp;
};
