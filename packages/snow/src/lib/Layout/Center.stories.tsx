import type { Meta, StoryObj } from '@storybook/react';
import { Center, CenterProps } from './Center';
import { ChevronLeftIcon } from '@arctic-kit/icons';
import { PropsWithChildren } from 'react';
import { Box } from '../Box';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Center> = {
  title: 'Layout/Center',
  component: Center,
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
} satisfies Meta<typeof Center>;

export default meta;

type Story = StoryObj<typeof meta>;

function Render(args: Story['args']) {
  const { children, ...otherProps } = args as PropsWithChildren<CenterProps>;
  return (
    <Box
      sx={{
        minWidth: 450,
        border: '1px var(--snow-colors-primary-main) dashed',
        padding: 12,
        borderRadius: 4,
      }}
    >
      <Center {...otherProps}>{children}</Center>
    </Box>
  );
}

export const Default: Story = {
  args: {
    children: 'This content will be center aligned with display flex',
  },
  render: Render,
};

export const Inline: Story = {
  args: {
    children: (
      <>
        <ChevronLeftIcon />
        <div>Previous Screen</div>
      </>
    ),
    inline: true,
    spacing: 1,
  },
  render: Render,
};
