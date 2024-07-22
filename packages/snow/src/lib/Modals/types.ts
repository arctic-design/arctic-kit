import { SnowSize } from '../types';

export type BaseModalOptions = {
  initialOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disableOutsidePressAndEscape?: boolean;
};

export type ModalSize = SnowSize | 'extraSmall' | 'extraLarge';
