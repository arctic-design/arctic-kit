'use client';
import { styled } from '@pigment-css/react';
import { XMarkIcon } from '@arctic-kit/icons';
import React from 'react';
import { useModalContext } from '../Modals/useModalContext';
import { HeaderCloseButton } from '../Button/HeaderCloseButton';
import { Box } from '../Box';
import { SnowThemeArgs } from '../../core';
const Container = styled.div(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  width: '100%',
  borderBottom: `0.5px solid ${theme.colors.grey[300]}`,
  h3: {
    padding: '0 1rem',
  },
  'h3, h4': {
    margin: 0,
  },
}));

type DrawerHeadingProps = {
  onClose?: () => void;
  id?: string;
  footer?: React.ReactNode;
};

export const DrawerHeading = React.forwardRef<
  HTMLHeadingElement,
  DrawerHeadingProps & React.HTMLProps<HTMLHeadingElement>
>(function DrawerHeading(
  { children, id = 'drawer-heading', onClose, footer },
  ref
) {
  const { setLabelId, setOpen } = useModalContext();

  // Only sets `aria-labelledby` on the Modal root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setLabelId(id);
    return () => setLabelId(undefined);
  }, [id, setLabelId]);

  const onCloseHandler = () => {
    setOpen(false);
    onClose && onClose();
  };

  return (
    <Container ref={ref} id={`${id}-container`} data-testid={`${id}-container`}>
      <Box
        sx={{
          display: 'flex',
          padding: '8px 12px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
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

        {onClose && (
          <HeaderCloseButton
            type="button"
            onClick={onCloseHandler}
            id={`${id}-close-button`}
            data-testid={`${id}-close-button`}
          >
            <XMarkIcon />
          </HeaderCloseButton>
        )}
      </Box>
    </Container>
  );
});
