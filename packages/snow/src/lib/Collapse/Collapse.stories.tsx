import type { Meta, StoryObj } from '@storybook/react';

import { Collapse } from './Collapse';
import { Box } from '../Box';
import { Button } from '../Button';

import { useState } from 'react';

const meta: Meta<typeof Collapse> = {
  title: 'Collapse',
  component: Collapse,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapse>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  const [expanded, setExpanded] = useState(false);

  const onChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Button variant="outlined" onClick={onChange}>
        Toggle
      </Button>
      <Collapse expanded={expanded}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Collapse>
    </Box>
  );
}

export const Default: Story = {
  args: {},
  render: DefaultRender,
};
