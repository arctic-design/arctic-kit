import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { useArgs } from '@storybook/preview-api';
import { OptionType } from '../types';

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: 'Ford Mustang', value: 'ford_mustang' },
  { label: 'Chevrolet Camaro', value: 'chevrolet_camaro' },
  { label: 'Porsche 911', value: 'porsche_911' },
  { label: 'Tesla Model S', value: 'tesla_model_s' },
  { label: 'Ferrari F40', value: 'ferrari_f40' },
  { label: 'Lamborghini Aventador', value: 'lamborghini_aventador' },
  { label: 'Audi R8', value: 'audi_r8' },
  { label: 'BMW M3', value: 'bmw_m3' },
];

const AcceptReasons = [
  {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    value: 'reason1',
  },
  {
    label: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    value: 'reason2',
  },
  {
    label:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    value: 'reason3',
  },
  {
    label: 'Nisi ut aliquip ex ea commodo consequat.',
    value: 'reason4',
  },
  {
    label:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    value: 'reason5',
  },
  {
    label:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    value: 'reason6',
  },
];

function Render(args: Story['args']) {
  const [{ value, id, label, options }, updateArgs] = useArgs();

  const onChange = (val: OptionType['value']) => {
    updateArgs({ value: val });
  };

  return (
    <RadioGroup
      {...args}
      id={id}
      label={label}
      options={options}
      value={value}
      onChange={onChange}
    />
  );
}

export const Default: Story = {
  args: {
    id: 'default_radio',
    label: 'Select anyone',
    options,
  },
  render: Render,
};

export const WitSeparator: Story = {
  args: {
    id: 'with_separator_radio',
    label: 'Select anyone',
    options,
    withSeparator: true,
    size: 'medium',
  },
  render: Render,
};

export const LargeContent: Story = {
  args: {
    id: 'default_radio',
    label: 'Accept Reasons',
    options: AcceptReasons,
  },
  render: Render,
};
