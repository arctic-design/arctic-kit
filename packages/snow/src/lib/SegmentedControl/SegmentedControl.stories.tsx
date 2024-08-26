import type { Meta, StoryObj } from '@storybook/react';

import { SegmentedControl } from './SegmentedControl';

import {
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  CheckIcon,
  PencilIcon,
  CreditCardIcon,
} from '@arctic-kit/icons';
import { SegmentedControlButton } from './SegmentedControlButton';
import { Box } from '../Box';
import { IconButton } from '../IconButton';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SegmentedControl> = {
  title: 'SegmentedControl',
  component: SegmentedControl,
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
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  const handleSegmentChange = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <SegmentedControl {...args}>
      <SegmentedControlButton onClick={() => handleSegmentChange('React')}>
        React
      </SegmentedControlButton>
      <SegmentedControlButton onClick={() => handleSegmentChange('Angular')}>
        Angular
      </SegmentedControlButton>
      <SegmentedControlButton onClick={() => handleSegmentChange('Vue')}>
        Vue
      </SegmentedControlButton>
      <SegmentedControlButton onClick={() => handleSegmentChange('Preact')}>
        Preact
      </SegmentedControlButton>
      <SegmentedControlButton onClick={() => handleSegmentChange('Svelte')}>
        Svelte
      </SegmentedControlButton>
    </SegmentedControl>
  );
}

function TextAndIconRender(args: Story['args']) {
  const handleSegmentChange = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <SegmentedControl {...args}>
      <SegmentedControlButton
        leadingIcon={<CheckIcon />}
        onClick={() => handleSegmentChange('React')}
      >
        React
      </SegmentedControlButton>
      <SegmentedControlButton
        leadingIcon={<CreditCardIcon />}
        onClick={() => handleSegmentChange('Angular')}
        disabled
      >
        Angular
      </SegmentedControlButton>
      <SegmentedControlButton
        leadingIcon={<ForwardIcon />}
        onClick={() => handleSegmentChange('Vue')}
      >
        Vue
      </SegmentedControlButton>

      <SegmentedControlButton
        leadingIcon={<BackwardIcon />}
        onClick={() => handleSegmentChange('Preact')}
      >
        Vue
      </SegmentedControlButton>
    </SegmentedControl>
  );
}

function OnlyIconRender(args: Story['args']) {
  const handleSegmentChange = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <SegmentedControl {...args}>
      <SegmentedControlButton onClick={() => handleSegmentChange('React')}>
        <CheckIcon />
      </SegmentedControlButton>
      <SegmentedControlButton onClick={() => handleSegmentChange('Angular')}>
        <CreditCardIcon />
      </SegmentedControlButton>
      <SegmentedControlButton onClick={() => handleSegmentChange('Vue')}>
        <ForwardIcon />
      </SegmentedControlButton>
    </SegmentedControl>
  );
}

function IconWithTooltipRender(args: Story['args']) {
  return (
    <SegmentedControl {...args}>
      <SegmentedControlButton tooltipMessage="Backward">
        <BackwardIcon />
      </SegmentedControlButton>
      <SegmentedControlButton tooltipMessage="Pause">
        <PauseIcon />
      </SegmentedControlButton>
      <SegmentedControlButton tooltipMessage="Forward">
        <ForwardIcon />
      </SegmentedControlButton>
    </SegmentedControl>
  );
}

function WithOtherControlsRender(args: Story['args']) {
  return (
    <Box sx={{ display: 'flex', gap: 8 }}>
      <IconButton>
        <PencilIcon />
      </IconButton>
      <IconWithTooltipRender {...args} />
    </Box>
  );
}

function ChangingColorWithSelectionRender(args: Story['args']) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const changedColor =
    selectedIndex === 0
      ? 'primary'
      : selectedIndex === 1
      ? 'success'
      : undefined;

  return (
    <Box sx={{ display: 'flex', gap: 8 }}>
      <IconButton>
        <PencilIcon />
      </IconButton>
      <SegmentedControl {...args} color={changedColor}>
        <SegmentedControlButton
          tooltipMessage="Backward"
          onClick={() => setSelectedIndex(0)}
        >
          <BackwardIcon />
        </SegmentedControlButton>
        <SegmentedControlButton
          tooltipMessage="Pause"
          onClick={() => setSelectedIndex(1)}
        >
          <PauseIcon />
        </SegmentedControlButton>
        <SegmentedControlButton
          tooltipMessage="Forward"
          onClick={() => setSelectedIndex(2)}
        >
          <ForwardIcon />
        </SegmentedControlButton>
      </SegmentedControl>
    </Box>
  );
}

export const Default: Story = {
  args: {
    initialSelectedIndex: 1,
  },
  render: DefaultRender,
};

export const WithLabel: Story = {
  args: {
    initialSelectedIndex: 1,
    label: 'Frontend stack',
  },
  render: DefaultRender,
};

export const TextAndIcon: Story = {
  args: {},
  render: TextAndIconRender,
};

export const OnlyIcon: Story = {
  args: {},
  render: OnlyIconRender,
};

export const IconWithTooltip: Story = {
  args: {},
  render: IconWithTooltipRender,
};

export const NoneSelected: Story = {
  args: {
    initialSelectedIndex: -1,
  },
  render: DefaultRender,
};

export const WithOtherControls: Story = {
  args: {
    initialSelectedIndex: -1,
  },
  render: WithOtherControlsRender,
};

export const ChangingColorWithSelection: Story = {
  args: {
    initialSelectedIndex: -1,
  },
  render: ChangingColorWithSelectionRender,
};
