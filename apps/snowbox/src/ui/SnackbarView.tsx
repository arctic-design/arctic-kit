'use client';
import { Button, SnackbarProvider, Stack, useSnackbar } from '@arctic-kit/snow';

function ButtonStacks() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return (
    <Stack spacing={4} direction="horizontal">
      <Button onClick={() => enqueueSnackbar('Notification received.')}>
        Show default snack
      </Button>
      <Button
        color="success"
        onClick={() =>
          enqueueSnackbar({
            variant: 'success',
            title: 'Arctic snow',
            message: 'Your changes have been saved.',
          })
        }
      >
        Show success snack
      </Button>
      <Button
        color="info"
        onClick={() =>
          enqueueSnackbar({
            variant: 'info',
            title: 'Arctic snow',
            message: 'Reminder: The meeting starts in 10 minutes.',
          })
        }
      >
        Info
      </Button>
      <Button
        color="warning"
        onClick={() =>
          enqueueSnackbar({
            variant: 'warning',
            title: 'Arctic snow',
            message: 'Storage space is running low.',
          })
        }
      >
        Show warning snack
      </Button>
      <Button
        color="error"
        onClick={() =>
          enqueueSnackbar({
            variant: 'error',
            title: 'Arctic snow',
            message: 'Failed to save data. Check your connection.',
          })
        }
      >
        Show error snack
      </Button>
      <Button color="secondary" onClick={() => closeSnackbar()}>
        Close all snacks
      </Button>
    </Stack>
  );
}

export function SnackbarView() {
  return (
    <SnackbarProvider>
      <ButtonStacks />
    </SnackbarProvider>
  );
}
