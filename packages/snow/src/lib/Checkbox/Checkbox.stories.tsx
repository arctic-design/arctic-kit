import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { useArgs } from '@storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

function Render(args: Story['args']) {
  const [{ isChecked }, updateArgs] = useArgs();

  const onChange = () => {
    updateArgs({ isChecked: !isChecked });
  };

  return (
    <Checkbox
      {...args}
      onChange={onChange}
      checked={isChecked}
      name="some-id"
    />
  );
}

export const Default: Story = {
  args: {
    label: 'Checkbox Label here...',
    checked: false,
  },
  render: Render,
};
