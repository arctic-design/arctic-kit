'use client';
import * as React from 'react';
import { SharedProps, SnackbarKey } from './types';
import { Box } from '../Box';

const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export function useEventCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return
): (...args: Args) => Return {
  const ref = React.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React.useCallback((...args: Args) => (0, ref.current)(...args), []);
}

interface SnackbarProps extends Required<Pick<SharedProps, 'onClose'>> {
  id: SnackbarKey;
  children: React.ReactNode;
  autoHideDuration: number | null | undefined;
}

const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  (props, ref) => {
    const {
      children,

      autoHideDuration,
      // disableWindowBlurListener = false,
      onClose,
      id,
    } = props;

    const timerAutoHide = React.useRef<ReturnType<typeof setTimeout>>();

    const handleClose = useEventCallback((...args: [SnackbarKey]) => {
      if (onClose) {
        onClose(...args);
      }
    });

    const setAutoHideTimer = useEventCallback(
      (autoHideDurationParam?: number | null) => {
        if (!onClose || autoHideDurationParam == null) {
          return;
        }

        if (timerAutoHide.current) {
          clearTimeout(timerAutoHide.current);
        }
        timerAutoHide.current = setTimeout(() => {
          handleClose(id);
        }, autoHideDurationParam);
      }
    );

    React.useEffect(() => {
      setAutoHideTimer(autoHideDuration);

      return () => {
        if (timerAutoHide.current) {
          clearTimeout(timerAutoHide.current);
        }
      };
    }, [autoHideDuration, setAutoHideTimer]);

    if (!children) {
      return null;
    }

    return (
      <Box sx={{ flex: 1 }} ref={ref}>
        {children}
      </Box>
    );
  }
);

export default Snackbar;
