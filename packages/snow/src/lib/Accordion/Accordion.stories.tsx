import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/test';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Accordion!/i)).toBeTruthy();
  },
};
