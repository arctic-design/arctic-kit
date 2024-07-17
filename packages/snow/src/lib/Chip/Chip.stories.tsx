import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Chip> = {
  title: 'Design System/Chip',
  component: Chip,
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
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Stable',
    onClick: () => console.log('clicked'),
  },
};

export const Interactive: Story = {
  args: {
    children: 'Accept & Document Later',
    interactive: true,
    color: 'primary',
    selected: true,
  },
};

export const Info: Story = {
  args: {
    children: 'Accepted',
    color: 'success',
    size: 'small',
  },
};
