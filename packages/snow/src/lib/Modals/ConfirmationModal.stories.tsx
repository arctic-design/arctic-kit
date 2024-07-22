import type { Meta, StoryObj } from '@storybook/react';

import { ConfirmationModal } from './ConfirmationModal';
import { PropsWithChildren, useState } from 'react';
import { Button } from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ConfirmationModal> = {
  title: 'Modals/Confirmation',
  component: ConfirmationModal,
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
} satisfies Meta<typeof ConfirmationModal>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: PropsWithChildren<Story['args']>) {
  const [open, setOpen] = useState(false);
  const { children, ...otherArgs } = args;

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ConfirmationModal
        {...otherArgs}
        open={open}
        onOpenChange={setOpen}
        onAction={() => {
          setOpen(false);
          console.log('Yes button clicked');
        }}
      >
        {children}
      </ConfirmationModal>
    </>
  );
}

export const Default: Story = {
  args: {
    title: 'Title',
    children: 'Do you want to continue with the action?',
  },
  render: DefaultRender,
};
