'use client';
import { PropsWithChildren, forwardRef } from 'react';

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import { styled } from '@pigment-css/react';
import { motion } from 'framer-motion';
import { useModalContext } from '../Modals/useModalContext';
import { DrawerPosition, DrawerSize } from './types';
import { ZIndex } from '../constants';
import { SnowThemeArgs } from '../../core';

const StyledOverlay = styled(FloatingOverlay)({
  background: 'rgba(0, 0, 0, 0.8)',
  display: 'grid',
  placeItems: 'center',
  zIndex: ZIndex.Modal,
});

export const DrawerSizeMap = {
  extraSmall: '320px',
  small: '380px',
  medium: '440px',
  large: '620px',
  fullWidth: '96%',
};
type DrawerContentProps = {
  size?: DrawerSize;
  position?: DrawerPosition;
  id?: string;
};

const Container = styled.div<DrawerContentProps>(
  ({ theme }: SnowThemeArgs) => ({
    background: theme.colors.neutral[0],
    boxShadow: theme.shadow.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '100%',
    maxHeight: '100%',
    overflowY: 'hidden',
    position: 'fixed',
    margin: '0',
    borderRadius: '0',
    justifyContent: 'space-between',
    '&.left, &.right': {
      width: 'auto',
      height: '100%',
      top: '0',
    },
    '&.left': {
      left: '0',
      borderRight: `1px solid ${theme.colors.grey[500]}`,
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
    },

    '&.right': {
      right: '0',
      borderLeft: `1px solid ${theme.colors.grey[500]}`,
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
    },
    '&.top, &.bottom': {
      height: 'auto',
      width: '100%',
      left: '0',
    },

    '&.top': {
      top: '0',
      borderBottom: `1px solid ${theme.colors.grey[500]}`,
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
    },

    '&.bottom': {
      bottom: '0',
      borderTop: `1px solid ${theme.colors.grey[500]}`,
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
    },
    variants: ['extraSmall', 'small', 'medium', 'large', 'fullWidth'].map(
      (size) => ({
        props: { size: size as DrawerSize },
        style: {
          '&.left, &.right': {
            width: DrawerSizeMap[size as DrawerSize],
          },
          '&.top, &.bottom': {
            height: DrawerSizeMap[size as DrawerSize],
          },
        },
      })
    ),
  })
);

const drawerLeftVariants = {
  open: { x: 0 },
  closed: { x: '-100%' },
};

const drawerRightVariants = {
  open: { x: 0 },
  closed: { x: '100%' },
};

const drawerTopVariants = {
  open: { y: 0 },
  closed: { y: '-100%' },
};

const drawerBottomVariants = {
  open: { y: 0 },
  closed: { y: '100%' },
};

const drawerPositionVariants = {
  left: drawerLeftVariants,
  right: drawerRightVariants,
  top: drawerTopVariants,
  bottom: drawerBottomVariants,
};

const MotionContainer = motion(Container);

export const DrawerContent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<DrawerContentProps>
>(function DrawerContent(props, propRef) {
  const { context: floatingContext, ...context } = useModalContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  const {
    size,
    children,
    position = 'left',
    id = 'drawer-content',
    ...otherProps
  } = props;
  const drawerVariants = drawerPositionVariants[position];

  return (
    <FloatingPortal>
      <StyledOverlay lockScroll>
        <FloatingFocusManager context={floatingContext}>
          <MotionContainer
            id={id}
            data-testid={id}
            className={position}
            variants={drawerVariants}
            initial="closed"
            animate={floatingContext.open ? 'open' : 'closed'}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            ref={ref}
            aria-labelledby={context.labelId}
            aria-describedby={context.descriptionId}
            size={size}
            {...context.getFloatingProps(otherProps)}
          >
            {children}
          </MotionContainer>
        </FloatingFocusManager>
      </StyledOverlay>
    </FloatingPortal>
  );
});
