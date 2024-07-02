import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/test';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Card!/i)).toBeTruthy();
  },
};
