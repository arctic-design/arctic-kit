import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import {
  ArrowsPointingOutIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  ArchiveBoxIcon,
  HeartIcon,
  BookmarkIcon,
  AtSymbolIcon,
  PaperClipIcon,
  EllipsisHorizontalIcon,
} from '@arctic-kit/icons';
import { Center } from '../Layout';

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
      <ArrowsPointingOutIcon />
    </IconButton>
  );
}

function StackedIcons(args: Story['args']) {
  return (
    <Center spacing={2}>
      <IconButton {...args}>
        <MagnifyingGlassIcon />
      </IconButton>
      <IconButton {...args}>
        <PencilIcon />
      </IconButton>
      <IconButton {...args}>
        <ArchiveBoxIcon />
      </IconButton>
      <IconButton {...args}>
        <HeartIcon />
      </IconButton>
      <IconButton {...args}>
        <BookmarkIcon />
      </IconButton>
      <IconButton {...args}>
        <AtSymbolIcon />
      </IconButton>
      <IconButton {...args}>
        <PaperClipIcon />
      </IconButton>
      <IconButton {...args}>
        <EllipsisHorizontalIcon />
      </IconButton>
    </Center>
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
export const NoBorders: Story = {
  args: {
    size: 'medium',
    noBorder: true,
  },
  render: StackedIcons,
};
