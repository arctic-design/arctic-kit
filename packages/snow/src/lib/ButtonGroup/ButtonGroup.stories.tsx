import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { ButtonGroup } from './ButtonGroup';
import { ActionMenu, ActionMenuItem } from '../ActionMenu';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ButtonGroup> = {
  title: 'ButtonGroup',
  component: ButtonGroup,
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
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

function SplitButtonRender(args: Story['args']) {
  return (
    <ButtonGroup {...args}>
      <Button onClick={() => console.log('button')}>Button</Button>
      <ActionMenu placement="bottom-end">
        <ActionMenuItem label="Undo" onClick={() => console.log('Undo')} />
        <ActionMenuItem
          label="Redo"
          disabled
          onClick={() => console.log('Redo')}
        />
        <ActionMenuItem label="Cut" onClick={() => console.log('Cut')} />
      </ActionMenu>
    </ButtonGroup>
  );
}

export const Default: Story = {
  args: {
    children: (
      <>
        <Button>First</Button>
        <Button>Second</Button>
        <Button disabled>Third</Button>
        <Button>Fourth</Button>
      </>
    ),
  },
};

export const SplitButton: Story = {
  args: {},
  render: SplitButtonRender,
};
