import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { PropsWithChildren } from 'react';
import { Box } from '../Box';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const DownIcon = () => (
  <svg
    height="20"
    width="20"
    viewBox="0 0 20 20"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
  </svg>
);

function WithIconsRender(args: PropsWithChildren<Story['args']>) {
  const { children, ...otherProps } = args;
  return (
    <>
      Primary Buttons with Icons
      <Box sx={{ display: 'flex', gap: 10, margin: 6 }}>
        <Button leadingSection={<DownIcon />} {...otherProps}>
          {children}
        </Button>
        <Button trailingSection={<DownIcon />} {...otherProps}>
          {children}
        </Button>
      </Box>
      <br />
      <br />
      Outlined Buttons with Icons
      <Box sx={{ display: 'flex', gap: 10, margin: 6 }}>
        <Button
          variant="outlined"
          leadingSection={<DownIcon />}
          {...otherProps}
        >
          {children}
        </Button>
        <Button
          variant="outlined"
          trailingSection={<DownIcon />}
          {...otherProps}
        >
          {children}
        </Button>
      </Box>
      <br />
    </>
  );
}

export const Default: Story = {
  args: {
    children: 'Save and Continue',
  },
};

export const Text: Story = {
  args: {
    children: 'Continue to Submission',
    variant: 'text',
  },
};

export const Filled: Story = {
  args: {
    color: 'primary',
    children: 'Continue to Submission',
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Cancel',
    variant: 'outlined',
  },
};

export const WithIcons: Story = {
  args: {
    children: 'Button',
  },
  render: WithIconsRender,
};
