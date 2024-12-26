import type { Meta, StoryObj } from '@storybook/react';
import { ActionMenu } from './ActionMenu';
import { ActionMenuItem } from './ActionMenuItem';

import {
  VideoCameraIcon,
  ShareIcon,
  TrashIcon,
  PhotoIcon,
  ArrowLeftEndOnRectangleIcon,
  ClipboardDocumentIcon,
  ScissorsIcon,
  ArrowTurnDownLeftIcon,
  ArrowTurnDownRightIcon,
  DocumentTextIcon,
  MicrophoneIcon,
  EnvelopeIcon,
  UserGroupIcon,
} from '@arctic-kit/icons';
import { Box } from '../Box';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ActionMenu> = {
  title: 'ActionMenu',
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
      <ActionMenuItem label="Undo" onClick={() => console.log('Undo')} />
      <ActionMenuItem label="Redo" disabled />
      <ActionMenuItem label="Cut" />
      <ActionMenu label="Copy as" color="success">
        <ActionMenuItem label="Text" />
        <ActionMenuItem label="Video" />
        <ActionMenu label="Image">
          <ActionMenuItem label=".png" />
          <ActionMenuItem label=".jpg" />
          <ActionMenuItem label=".svg" />
          <ActionMenuItem label=".gif" />
        </ActionMenu>
        <ActionMenuItem label="Audio" />
      </ActionMenu>
      <ActionMenu label="Share">
        <ActionMenuItem label="Mail" />
        <ActionMenuItem label="Instagram" />
      </ActionMenu>
      <ActionMenuItem label="Delete" color="error" />
    </ActionMenu>
  );
}

function WithIconsRender(args: Story['args']) {
  return (
    <ActionMenu {...args} prefix={<ArrowLeftEndOnRectangleIcon />}>
      <ActionMenuItem
        label="Undo"
        prefix={<ArrowTurnDownLeftIcon />}
        onClick={() => console.log('Undo')}
      />
      <ActionMenuItem
        label="Redo"
        prefix={<ArrowTurnDownRightIcon />}
        disabled
      />
      <ActionMenuItem label="Cut" prefix={<ScissorsIcon />} />
      <ActionMenu
        prefix={<ClipboardDocumentIcon />}
        label="Copy as"
        color="success"
      >
        <ActionMenuItem label="Text" prefix={<DocumentTextIcon />} />
        <ActionMenuItem label="Video" prefix={<VideoCameraIcon />} />
        <ActionMenu label="Image" prefix={<PhotoIcon />}>
          <ActionMenuItem label=".png" />
          <ActionMenuItem label=".jpg" />
          <ActionMenuItem label=".svg" />
          <ActionMenuItem label=".gif" />
        </ActionMenu>
        <ActionMenuItem label="Audio" prefix={<MicrophoneIcon />} />
      </ActionMenu>
      <ActionMenu prefix={<ShareIcon />} label="Share">
        <ActionMenuItem label="Mail" prefix={<EnvelopeIcon />} />
        <ActionMenuItem label="Instagram" prefix={<UserGroupIcon />} />
      </ActionMenu>
      <ActionMenuItem
        prefix={<TrashIcon />}
        label="Delete my account"
        color="error"
      />
    </ActionMenu>
  );
}

function FullWidthRender(args: Story['args']) {
  return (
    <Box sx={{ width: 200 }}>
      <WithIconsRender {...args} />
    </Box>
  );
}

export const Default: Story = {
  args: {
    label: 'Edit',
    noBorder: false,
  },
  render: DefaultRender,
};

export const WithIcons: Story = {
  args: {
    label: 'Edit with Icons',
    noBorder: false,
  },
  render: WithIconsRender,
};

export const FullWidth: Story = {
  args: {
    label: 'Edit with Icons',
    noBorder: false,
    fullWidth: true,
  },
  render: FullWidthRender,
};
