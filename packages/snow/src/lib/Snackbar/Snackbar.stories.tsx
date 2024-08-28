import type { Meta, StoryObj } from '@storybook/react';
import { useSnackbar } from './useSnackbar';
import { Button } from '../Button';
import { Stack } from '../Layout';
import { SnackbarProvider } from './SnackbarProvider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof useSnackbar> = {
  title: 'Snackbar',
  //   component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof useSnackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

function ButtonStacks() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return (
    <Stack spacing={4} direction="horizontal">
      <Button
        variant="filled"
        onClick={() => enqueueSnackbar('Notification received.')}
      >
        Default
      </Button>
      <Button
        variant="filled"
        onClick={() =>
          enqueueSnackbar({
            title: 'Notification received.',
            message: 'Your changes have been saved.',
          })
        }
      >
        Title and message
      </Button>
      <Button
        variant="filled"
        color="success"
        onClick={() =>
          enqueueSnackbar({
            variant: 'success',
            title: 'Saved',
            message: 'Your changes have been saved.',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="filled"
        color="info"
        onClick={() =>
          enqueueSnackbar({
            variant: 'info',
            title: 'Reminder',
            message: 'The meeting starts in 10 minutes.',
          })
        }
      >
        Info
      </Button>
      <Button
        variant="filled"
        color="warning"
        onClick={() =>
          enqueueSnackbar({
            variant: 'warning',
            title: 'Storage limitations',
            message: 'Storage space is running low.',
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="filled"
        color="error"
        onClick={() =>
          enqueueSnackbar({
            variant: 'error',
            title: 'Save failed',
            message: 'Failed to save data. Check your connection.',
          })
        }
      >
        Error
      </Button>
      <Button variant="outlined" onClick={() => closeSnackbar()}>
        Close All
      </Button>
    </Stack>
  );
}

function DefaultRender() {
  return (
    <SnackbarProvider>
      <ButtonStacks />
    </SnackbarProvider>
  );
}

export const Default: Story = {
  args: {},
  render: DefaultRender,
};
