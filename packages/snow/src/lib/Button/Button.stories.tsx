import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { PropsWithChildren } from 'react';
import { Box } from '../Box';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

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

function WithIconsRender(args: PropsWithChildren<Story['args']>) {
  const { children, ...otherProps } = args;
  return (
    <>
      Primary Buttons with Icons
      <Box sx={{ display: 'flex', gap: 10, margin: 6 }}>
        <Button prefix={<ArrowLeftIcon />} {...otherProps}>
          {children}
        </Button>
        <Button suffix={<ArrowRightIcon />} {...otherProps}>
          {children}
        </Button>
      </Box>
      <br />
      <br />
      Outlined Buttons with Icons
      <Box sx={{ display: 'flex', gap: 10, margin: 6 }}>
        <Button variant="outlined" prefix={<ArrowLeftIcon />} {...otherProps}>
          {children}
        </Button>
        <Button variant="outlined" suffix={<ArrowRightIcon />} {...otherProps}>
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
    fillSvg: true,
  },
  render: WithIconsRender,
};

export const Rounded: Story = {
  args: {
    children: 'Button',
    rounded: true,
  },
};
