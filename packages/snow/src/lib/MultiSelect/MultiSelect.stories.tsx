import type { Meta, StoryObj } from '@storybook/react';

import { MultiSelect } from './MultiSelect';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof MultiSelect> = {
  title: 'MultiSelect',
  component: MultiSelect,
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
} satisfies Meta<typeof MultiSelect>;

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
    placeholder: 'Pick a value',
    options,

    onChange: (items) => console.log(items),
    label: 'Select some value...',
  },
};

export const StringValues: Story = {
  args: {
    placeholder: 'Pick a value',
    options: options.map((item) => item.label),
    onChange: (items) => console.log(items),
    label: 'Select some value...',
  },
};

export const PreSelectedValues: Story = {
  args: {
    placeholder: 'Select...',
    options,

    searchable: true,
    onChange: (items) => console.log(items),
    value: [options[2], options[4]],
  },
};

export const SearchableMultiSelect: Story = {
  args: {
    placeholder: 'Select...',
    options,

    searchable: true,
    onChange: (items) => console.log(items),
  },
};
