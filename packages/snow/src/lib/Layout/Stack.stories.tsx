import type { Meta, StoryObj } from '@storybook/react';
import { Stack, StackProps } from './Stack';
import { PropsWithChildren } from 'react';
import { Box } from '../Box';
import { Button } from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
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
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

function Render(args: Story['args']) {
  const { children, ...otherProps } = args as PropsWithChildren<StackProps>;
  return (
    <Box
      sx={{
        minWidth: 450,
        border: '1px var(--snow-colors-primary-main) dashed',
        padding: 12,
        borderRadius: 4,
      }}
    >
      <Stack {...otherProps}>{children}</Stack>
    </Box>
  );
}

export const Default: Story = {
  args: {
    children: (
      <>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
        <Button>Fourth</Button>
      </>
    ),
    spacing: 2,
  },
  render: Render,
};

export const Inline: Story = {
  args: {
    children: (
      <>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
        <Button>Fourth</Button>
      </>
    ),
    inline: true,
    spacing: 2,
  },
  render: Render,
};

export const Horizontal: Story = {
  args: {
    children: (
      <>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
        <Button>Fourth</Button>
      </>
    ),
    inline: true,
    spacing: 2,
    direction: 'horizontal',
  },
  render: Render,
};
