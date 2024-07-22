import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { Box } from '../Box';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Skeleton> = {
  title: 'Skeleton',
  component: Skeleton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  return (
    <Box
      sx={{
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <Skeleton height={50} circle {...args} />
      <Box height={100}>
        <Skeleton height={'100%'} {...args} />
      </Box>

      <Skeleton height={8} {...args} />
      <Skeleton height={8} width="70%" {...args} />
    </Box>
  );
}

export const Default: Story = {
  args: {},
  render: DefaultRender,
};
