import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
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
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  const [value, setValue] = useState('');
  return (
    <TextArea
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
