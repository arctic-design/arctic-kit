'use client';
import React, { useLayoutEffect } from 'react';
import { useModalContext } from './useModalContext';
import { styled } from '@pigment-css/react';
import { ModalClose } from './ModalClose';
import { Box } from '../Box';
import { SnowThemeArgs } from '../../core';

const Container = styled.div(({ theme }: SnowThemeArgs) => ({
  display: 'flex',
  padding: 12,
  gap: 24,
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.colors.grey[200]}`,
}));

type ModalHeadingProps = {
  footer?: React.ReactNode;
};

export const ModalHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLProps<HTMLHeadingElement> & ModalHeadingProps
>(function ModalHeading(
  { children, id = 'modal-heading', disabled, footer },
  ref /* eslint-disable-line @typescript-eslint/no-unused-vars */
) {
  const { setLabelId } = useModalContext();

  // Only sets `aria-labelledby` on the Modal root element
  // if this component is mounted inside it.
  useLayoutEffect(() => {
    setLabelId(id);
    return () => setLabelId(undefined);
  }, [id, setLabelId]);

  return (
    <Container id={`${id}-container`}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          sx={{
            fontWeight: 700,
            fontSize: 20,
          }}
          id={`${id}-title`}
        >
          {children}
        </Box>
        {footer}
      </Box>

      <ModalClose
        disabled={disabled}
        id={`${id}-close-action`}
        aria-label="Close modal"
      />
    </Container>
  );
});
