import type { Meta, StoryObj } from '@storybook/react';

import { Autocomplete } from './Autocomplete';
import { data, dataObject } from './stories.data';
import { MagnifyingGlassIcon } from '@arctic-kit/icons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Autocomplete> = {
  title: 'Autocomplete',
  component: Autocomplete,
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
} satisfies Meta<typeof Autocomplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: data,
    placeholder: 'Enter fruit name',
  },
};

export const WithObjectOptions: Story = {
  args: {
    options: dataObject,
    placeholder: 'Enter fruit name',
  },
};

export const WithPrefixIcon: Story = {
  args: {
    options: data,
    placeholder: 'Enter fruit name',
    prefix: <MagnifyingGlassIcon />,
  },
};

export const ReadOnly: Story = {
  args: {
    options: data,
    placeholder: 'Enter fruit name',
    readOnly: true,
  },
};
