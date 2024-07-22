import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
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
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    option: { label: 'Option 1', value: 'option1' },
  },
};

export const Selected: Story = {
  args: {
    option: { label: 'Option 1', value: 'option1' },
    selectedValue: 'option1',
  },
};
