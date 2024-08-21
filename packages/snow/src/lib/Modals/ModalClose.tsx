import React from 'react';
import { useModalContext } from './useModalContext';

import { XMarkIcon } from '@arctic-kit/icons';
import { HeaderCloseButton } from '../Button/HeaderCloseButton';

export const ModalClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function ModalClose(props, ref) {
  const { setOpen } = useModalContext();
  return (
    <HeaderCloseButton
      type="button"
      {...props}
      ref={ref}
      onClick={() => setOpen(false)}
    >
      <XMarkIcon />
    </HeaderCloseButton>
  );
});
