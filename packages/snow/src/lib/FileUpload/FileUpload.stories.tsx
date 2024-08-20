import type { Meta, StoryObj } from '@storybook/react';

import { FileUpload } from './FileUpload';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FileUpload> = {
  title: 'FileUpload',
  component: FileUpload,
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
} satisfies Meta<typeof FileUpload>;

export default meta;

type Story = StoryObj<typeof meta>;

function Render(args: Story['args']) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const onFileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const onClearHandler = () => {
    setSelectedFile(null);
  };

  return (
    <FileUpload
      {...args}
      value={selectedFile}
      onChange={onFileChangeHandler}
      onClear={onClearHandler}
    />
  );
}

export const Default: Story = {
  args: {
    disabled: false,
    accept: 'application/pdf, image/jpeg, image/png, image/tiff',
    footerLabel: 'Only supports .pdf, .jpg, .png, .tif',
  },
  render: Render,
};
