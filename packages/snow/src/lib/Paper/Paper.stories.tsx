import type { Meta, StoryObj } from '@storybook/react';

import { Paper } from './Paper';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Paper> = {
  title: 'Paper',
  component: Paper,
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
} satisfies Meta<typeof Paper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is the paper content with default variant as elevation',
    elevation: 2,
  },
};

export const PrimaryClickable: Story = {
  args: {
    children: 'This is the paper content',
    onClick: () => alert('Clicked!'),
    variant: 'outlined',
    color: 'primary',
  },
};
