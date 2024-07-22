import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
  { label: 'Red', value: 'red' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pink', value: 'pink' },
  { label: 'Purple', value: 'purple' },
  { label: 'Grey', value: 'grey' },
];

export const Default: Story = {
  args: {
    placeholder: 'Select...',
    options: options.map((item) => item.label),
  },
};

export const SingleSelectWithValue: Story = {
  args: {
    placeholder: 'Select...',
    options: options.map((item) => item.label),
    onChange: (items) => console.log(items),
    value: options[3].label,
  },
};

export const WithObjectValues: Story = {
  args: {
    placeholder: 'Select...',
    options,
    onChange: (items) => console.log(items),
    value: options[3],
  },
};

export const SearchableSingleSelect: Story = {
  args: {
    placeholder: 'Select...',
    options,
    onChange: (items) => console.log(items),
    searchable: true,
  },
};
