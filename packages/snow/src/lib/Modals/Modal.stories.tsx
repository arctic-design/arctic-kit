import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { PropsWithChildren } from 'react';
import { useArgs } from '@storybook/preview-api';
import { Button } from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Modal> = {
  title: 'Modals/Basic',
  component: Modal,
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
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: PropsWithChildren<Story['args']>) {
  const [{ open }, updateArgs] = useArgs();

  const onChange = (openValue: boolean) => {
    updateArgs({ open: openValue });
  };

  const { children, ...otherArgs } = args;

  return (
    <>
      <Button onClick={() => onChange(true)}>Open Modal</Button>
      <Modal
        open={open}
        {...otherArgs}
        onOpenChange={onChange}
        onCancel={() => onChange(false)}
        onAction={() => {
          onChange(false);
          console.log('Primary button clicked');
        }}
      >
        {children ?? (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vehicula odio at efficitur fringilla. Duis vel urna eu elit congue
              dapibus et sit amet justo. Quisque ac mi sed metus sagittis
              elementum. Sed sed urna vel elit cursus sodales ac non mauris.
            </p>
            <p>
              Vestibulum rhoncus sapien in sem cursus, id consectetur justo
              sodales. Aliquam erat volutpat. In hac habitasse platea dictumst.
              Integer gravida odio in volutpat facilisis. Quisque non semper
              augue. Duis vel libero nec eros facilisis fermentum.
            </p>
            <p>
              Curabitur vel cursus odio. Nullam imperdiet massa in purus commodo
              luctus. Etiam et massa et metus volutpat imperdiet. Integer in
              nunc eu dui feugiat hendrerit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </>
        )}
      </Modal>
    </>
  );
}

export const Default: Story = {
  args: {
    title: 'Story title',
    titleFooter: <div>Title footer section here...</div>,
  },
  render: DefaultRender,
};
