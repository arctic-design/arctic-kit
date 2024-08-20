import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './Combobox';
import { data, dataObject } from '../Autocomplete/stories.data';
import { useState } from 'react';

const meta: Meta<typeof Combobox> = {
  title: 'Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  const [value, setValue] = useState('');
  return (
    <Combobox {...args} options={data} value={value} onChange={setValue} />
  );
}

export const Default: Story = {
  args: {
    options: data,
    placeholder: 'Enter fruit name',
    label: 'Select a fruit',
  },
  render: DefaultRender,
};

export const WithObjectOptions: Story = {
  args: {
    options: dataObject,
    placeholder: 'Enter fruit name',
    label: 'Select a fruit',
  },
  render: DefaultRender,
};

export const ReadOnly: Story = {
  args: {
    options: data,
    placeholder: 'Enter fruit name',
    label: 'Select a fruit',
    readOnly: true,
  },
  render: DefaultRender,
};
