import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { FaceSmileIcon } from '@heroicons/react/20/solid';

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  return (
    <IconButton {...args}>
      <FaceSmileIcon />
    </IconButton>
  );
}

export const Default: Story = {
  args: {
    rounded: false,
    size: 'medium',
  },
  render: DefaultRender,
};

export const Primary: Story = {
  args: {
    rounded: false,
    size: 'medium',
    color: 'primary',
  },
  render: DefaultRender,
};
export const Disabled: Story = {
  args: {
    rounded: false,
    disabled: true,
    size: 'medium',
    color: 'primary',
  },
  render: DefaultRender,
};
