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
  gap: 16,
  maxHeight: '100vh',
  overflowY: 'auto',
});

const StyledAlert = styled(Alert)<{
  severity?: SnowFeedbackColor;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  '&.default': {
    backgroundColor: theme.colors.info[900],
    border: 'none',
    color: theme.colors.neutral[0],
    svg: {
      color: theme.colors.neutral[0],
    },
  },
}));

const SnackbarItem = motion(StyledAlert);

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

    // position: 'absolute',
    // top: 15,
    // right: 10,
    background: 'inherit',
    border: 'none',
    padding: 0,
    svg: {
      width: '1rem',
      height: '1rem',
      padding: '0rem 0.1875rem',
      color: theme.colors.neutral[0],
    },
    variants: [
      {
        props: { hasSeverity: true },
        style: {
          svg: {
            color: theme.colors.grey[800],
          },
          '&:hover': {
            svg: {
              color: theme.colors.neutral[1000],
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
          >
            <Snackbar
              id={item.id}
              autoHideDuration={item.autoHideDuration}
              onClose={() => closeSnackbar(item.id)}
            >
              <div className="content">
                <div className="message">{item.message}</div>
                <CloseButton
                  severity={item.variant}
                  close={() => {
                    item.onClose?.(item.id);
                    closeSnackbar(item.id);
                  }}
                />
              </div>
            </Snackbar>
          </SnackbarItem>
        ))}
      </AnimatePresence>
    </SnackbarContent>
  );
}

export { SnackbarContent };
