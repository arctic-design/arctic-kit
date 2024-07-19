import type { Meta, StoryObj } from '@storybook/react';

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
} from './Popover';
import { useState } from 'react';
import { Button } from '../Button';

const meta: Meta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
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
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

function Render(args: Story['args']) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1>Popover Example</h1>
      <Popover {...args} open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen((v) => !v)}>
          My Trigger
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeading>My popover heading</PopoverHeading>
          <PopoverDescription>My popover description</PopoverDescription>
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function CustomTriggerRender(args: Story['args']) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Popover Example</h1>
      <Popover {...args} open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen((v) => !v)} asChild>
          <Button variant="outlined">Custom Trigger</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeading>My popover heading</PopoverHeading>
          <PopoverDescription>My popover description</PopoverDescription>
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    // fullWidth: false,
    placement: 'bottom-start',
  },
  render: Render,
};

export const CustomTrigger: Story = {
  args: {
    // fullWidth: false,
    placement: 'bottom-start',
  },
  render: CustomTriggerRender,
};
