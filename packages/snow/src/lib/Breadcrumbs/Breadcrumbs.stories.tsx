import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from './Breadcrumbs';
import { Box } from '../Box';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Home', href: '#' },
      { title: 'Section', href: '#' },
      { title: 'Subsection', href: '#' },
      { title: 'Page', href: '#' },
    ],
  },
};

export const ColorVariants: Story = {
  args: {
    items: [
      { title: 'Home', href: '#' },
      { title: 'Components', href: '#' },
      { title: 'Breadcrumbs', href: '#' },
    ],
    color: 'secondary',
  },
};

export const CustomAnchor: Story = {
  args: {
    items: [
      { title: 'Home', href: '#' },
      { title: 'Components', href: '#' },
      { title: 'Breadcrumbs', href: '#' },
    ],
    renderAnchor: (title, href) => (
      <Box
        as="a"
        href={href}
        sx={{
          color: 'red',
          textDecoration: 'none',
        }}
      >
        {title}
      </Box>
    ),
  },
};

export const Separator: Story = {
  args: {
    items: [
      { title: 'Home', href: '#' },
      { title: 'Components', href: '#' },
      { title: 'Breadcrumbs', href: '#' },
    ],
    separator: '/',
  },
};

export const NotClickable: Story = {
  args: {
    items: [
      { title: 'Home', href: '#' },
      { title: 'Components', href: '#', clickable: false },
      { title: 'Breadcrumbs', href: '#' },
    ],
  },
};
