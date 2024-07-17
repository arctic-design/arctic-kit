import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '5',
  },
};

export const Primary: Story = {
  args: {
    children: '5',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: '5',
    color: 'secondary',
  },
};
