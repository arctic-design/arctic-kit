'use client';
import { PropsWithChildren, forwardRef } from 'react';
import { useModalContext } from './useModalContext';
import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import { styled } from '@pigment-css/react';
import { ZIndex } from '../constants';
import { ModalSize } from './types';
import { SnowThemeArgs } from '../../core';

const StyledOverlay = styled(FloatingOverlay)({
  background: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  placeItems: 'center',
  zIndex: ZIndex.Modal,
  overflowY: 'hidden',
});

const ModalSizeVariants = {
  extraSmall: '320px',
  small: '500px',
  medium: '640px',
  large: '720px',
  extraLarge: '1024px',
};

const Container = styled.div<{ size?: ModalSize }>(
  ({ theme }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    margin: 16,
    borderRadius: '0.3125rem',
    background: theme.colors.neutral[0],
    boxShadow: theme.shadow.main,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.625rem',
    width: 'auto',
    variants: ['extraSmall', 'small', 'medium', 'large', 'extraLarge'].map(
      (size) => ({
        props: {
          size: size as ModalSize,
        },
        style: {
          width: ModalSizeVariants[size as ModalSize],
        },
      })
    ),
    minHeight: 220,
    maxWidth: 'calc(100vw - 24px)',
    maxHeight: 'calc(100vh - 24px)',
    overflowY: 'hidden',
    outline: 'none',
  })
);

export const ModalContent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ size?: ModalSize; id?: string }>
>(function ModalContent(props, propRef) {
  const { context: floatingContext, ...context } = useModalContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  const { size, children, id = 'modal-content', ...otherProps } = props;

  return (
    <FloatingPortal>
      <StyledOverlay
        lockScroll
        id={`${id}-overlay`}
        data-testid={`${id}-overlay`}
      >
        <FloatingFocusManager context={floatingContext}>
          <Container
            ref={ref}
            aria-labelledby={context.labelId}
            aria-describedby={context.descriptionId}
            size={size}
            id={id}
            data-testid={id}
            {...context.getFloatingProps(otherProps)}
          >
            {children}
          </Container>
        </FloatingFocusManager>
      </StyledOverlay>
    </FloatingPortal>
  );
});
