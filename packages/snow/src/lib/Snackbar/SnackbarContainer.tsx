'use client';
import { useSnackbar } from './useSnackbar';
import { AnimatePresence, motion } from 'framer-motion';
import Snackbar from './Snackbar';
import { Alert } from '../Alert/Alert';
import { SnowFeedbackColor } from '../types';
import { ZIndex } from '../constants';
import { XMarkIcon } from '@arctic-kit/icons';
import { SnowThemeArgs } from '../../core';
import { styled } from '@pigment-css/react';

const SnackbarContent = styled.div({
  padding: '8px 4px',
  margin: 0,
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column-reverse',
  zIndex: ZIndex.SnackBar,
  gap: 12,
  maxHeight: '100vh',
  overflowY: 'auto',
});

const StyledAlert = styled(Alert)<{
  severity?: SnowFeedbackColor;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  '&.default': {
    backgroundColor: theme.colors.info[900],
    color: theme.colors.white,
    svg: {
      color: theme.colors.white,
    },

    '.snack-child': {
      color: theme.colors.white,
      opacity: 0.8,
    },
  },
}));

const SnackbarItem = motion.create(StyledAlert);

const CloseIconButton = styled.button<{ hasSeverity?: boolean }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    outline: 'none',
    '-webkit-appearance': 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    '&.add': {
      position: 'fixed',
      bottom: 10,
      left: 10,
      width: 60,
      height: 60,
      borderRadius: '50%',
      fontSize: 28,
      border: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '8px 0',
    },
    background: 'inherit',
    border: 'none',
    padding: 0,
    svg: {
      width: '1rem',
      height: '1rem',
      margin: '0rem 0.1875rem',
      color: theme.colors.white,
      '&:hover': {
        strokeWidth: 2,
      },
    },
    variants: [
      {
        props: { hasSeverity: true },
        style: {
          svg: {
            color: theme.colors.grey[700],
          },
          '&:hover': {
            svg: {
              color: theme.colors.black,
            },
          },
        },
      },
    ],
  })
);

const CloseButton = ({
  close,
  severity,
}: {
  close: () => void;
  severity?: SnowFeedbackColor;
}) => (
  <CloseIconButton
    data-testid="snackbar-close-button"
    hasSeverity={!!severity}
    onClick={close}
  >
    <XMarkIcon />
  </CloseIconButton>
);

export function SnackbarContainer() {
  const { snacks, closeSnackbar } = useSnackbar();
  return (
    <SnackbarContent>
      <AnimatePresence initial={false}>
        {snacks.map((item) => (
          <SnackbarItem
            layout
            key={item.id}
            initial={{ opacity: 0, x: 300, scale: 0.1 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.5,
              transition: { duration: 0.2 },
              x: 300,
            }}
            severity={item.variant}
            hideIcon={item.hideIconVariant}
            className={item.variant ?? 'default'}
            title={item.title}
            action={
              <CloseButton
                severity={item.variant}
                close={() => {
                  item.onClose?.(item.id);
                  closeSnackbar(item.id);
                }}
              />
            }
            hideChildren={!item.message}
            childClassName="snack-child"
            shadow
          >
            <Snackbar
              id={item.id}
              autoHideDuration={item.autoHideDuration}
              onClose={() => closeSnackbar(item.id)}
            >
              {item.message}
            </Snackbar>
          </SnackbarItem>
        ))}
      </AnimatePresence>
    </SnackbarContent>
  );
}

export { SnackbarContent };
