'use client';
import React from 'react';
import { useModalContext } from './useModalContext';
import { styled } from '@pigment-css/react';

const ModalDescriptionContainer = styled.div({
  overflowY: 'auto',
  padding: 16,
});

export const ModalDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function ModalDescription(
  { children, id = 'modal-description', ...props },
  ref
) {
  const { setDescriptionId } = useModalContext();

  // Only sets `aria-describedby` on the Modal root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setDescriptionId(id);
    return () => setDescriptionId(undefined);
  }, [id, setDescriptionId]);

  return (
    <ModalDescriptionContainer {...props} ref={ref} id={`${id}-container`}>
      {children}
    </ModalDescriptionContainer>
  );
});
