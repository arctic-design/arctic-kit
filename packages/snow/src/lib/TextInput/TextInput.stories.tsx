import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './TextInput';
import { useState } from 'react';
import { AtSymbolIcon } from '@heroicons/react/24/outline';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TextInput> = {
  title: 'TextInput',
  component: TextInput,
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
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  const [value, setValue] = useState('');
  return (
    <TextInput
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
  },
  render: DefaultRender,
};

export const LeftSection: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    prefix: <AtSymbolIcon />,
  },
  render: DefaultRender,
};

export const RightSection: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    suffix: <AtSymbolIcon />,
  },
  render: DefaultRender,
};

export const LeftAndRightSection: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    prefix: <AtSymbolIcon />,
    suffix: <AtSymbolIcon />,
  },
  render: DefaultRender,
};
