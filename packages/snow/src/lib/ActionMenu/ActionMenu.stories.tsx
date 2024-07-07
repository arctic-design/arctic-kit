import type { Meta, StoryObj } from '@storybook/react';
import { ActionMenu } from './ActionMenu';
import { ActionMenuItem } from './ActionMenuItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ActionMenu> = {
  title: 'Design System/ActionMenu',
  component: ActionMenu,
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
} satisfies Meta<typeof ActionMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  return (
    <ActionMenu {...args}>
      <ActionMenuItem label='Undo' onClick={() => console.log('Undo')} />
      <ActionMenuItem label='Redo' disabled />
      <ActionMenuItem label='Cut' />
      <ActionMenu label='Copy as' color='success'>
        <ActionMenuItem label='Text' />
        <ActionMenuItem label='Video' />
        <ActionMenu label='Image'>
          <ActionMenuItem label='.png' />
          <ActionMenuItem label='.jpg' />
          <ActionMenuItem label='.svg' />
          <ActionMenuItem label='.gif' />
        </ActionMenu>
        <ActionMenuItem label='Audio' />
      </ActionMenu>
      <ActionMenu label='Share'>
        <ActionMenuItem label='Mail' />
        <ActionMenuItem label='Instagram' />
      </ActionMenu>
      <ActionMenuItem label='Delete' color='error' />
    </ActionMenu>
  );
}

export const Default: Story = {
  args: {
    label: 'Edit',
  },
  render: DefaultRender,
};
