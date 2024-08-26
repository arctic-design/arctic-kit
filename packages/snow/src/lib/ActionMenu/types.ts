import { Placement } from '@floating-ui/react';
import { SnowColor, SnowSize } from '../types';
import { ButtonVariants } from '../Button/types';
export type ActionMenuPlacement = Placement;
export type ActionMenuRootVariants = ButtonVariants;
export interface ActionMenuProps {
  label?: string;
  renderContent?: React.ReactNode;
  nested?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  color?: SnowColor;
  placement?: ActionMenuPlacement;
  itemSize?: SnowSize;
  id?: string;
  prefix?: React.ReactNode;
  noBorder?: boolean;
  variant?: ActionMenuRootVariants;
}
