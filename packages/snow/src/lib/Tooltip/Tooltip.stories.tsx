import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';
import { Button } from '../Button';
import { Box } from '../Box';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
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
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithButton: Story = {
  args: {
    message: 'This is Button content of tooltip',
    children: <Button variant="outlined">Trigger Element</Button>,
  },
};

export const WithSpan: Story = {
  args: {
    message: 'This is span content of tooltip',
    children: (
      <Box
        as="span"
        sx={{
          padding: '4px 8px',
          border: '1px solid #ddd',
        }}
        onClick={() => console.log('clicked me')}
      >
        Trigger Span
      </Box>
    ),
  },
};

export const WithDiv: Story = {
  args: {
    message: 'This is div content of tooltip',
    children: (
      <div style={{ padding: '4px 8px', border: '1px solid #ddd' }}>
        Trigger Div
      </div>
    ),
  },
};
