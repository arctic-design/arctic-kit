import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        border: '0.5px solid grey',
        padding: 10,
      }}
    >
      <Box as="section" sx={{ padding: 10, background: 'lightgrey' }}>
        This is a html section rendered through the Box and is not using the
        passed props. The below boxes are using the passed props.
      </Box>
      <Box
        {...args}
        sx={{
          backgroundColor: 'blue',
          fontSize: 24,
          color: 'white',
          padding: 10,
          borderRadius: 4,
        }}
      >
        This Box overrides children
      </Box>
      <Box {...args} />
    </Box>
  );
}

export const Default: Story = {
  args: {
    children: 'This Box has default content',
    as: 'div',
    className: 'custom-class',
  },
  render: DefaultRender,
};
