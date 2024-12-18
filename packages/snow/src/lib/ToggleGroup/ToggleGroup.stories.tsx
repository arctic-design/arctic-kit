import type { Meta, StoryObj } from '@storybook/react';

import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';
import {
  BuildingOffice2Icon,
  UserGroupIcon,
  UserIcon,
} from '@arctic-kit/icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../Card';
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import { Stack } from '../Layout';
import { Select } from '../Select';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ToggleGroup> = {
  title: 'ToggleGroup',
  component: ToggleGroup,
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
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  return (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="b">
        <b>B</b>
      </ToggleGroupItem>
      <ToggleGroupItem value="i">
        <i>I</i>
      </ToggleGroupItem>
      <ToggleGroupItem value="u">
        <u>U</u>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function AdvanceExampleRender(args: Story['args']) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader>
        <CardTitle>Choose Your Subscription</CardTitle>
        <CardDescription>
          Select a subscription plan that fits your needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack spacing={3}>
          <ToggleGroup withBorder {...args} spacing={3} singleSelect>
            <ToggleGroupItem value="basic">
              <UserIcon width={24} />
              <strong>Basic</strong>
              <small>$9.99/month</small>
            </ToggleGroupItem>
            <ToggleGroupItem value="pro">
              <UserGroupIcon width={24} />
              <strong>Pro</strong>
              <small>$19.99/month</small>
            </ToggleGroupItem>
            <ToggleGroupItem value="enterprise">
              <BuildingOffice2Icon width={24} />
              <strong>Enterprise</strong>
              <small>$29.99/month</small>
            </ToggleGroupItem>
          </ToggleGroup>
          <TextInput
            label="Full Name"
            id="name"
            placeholder="First Last"
            required
          />
          <TextInput
            label="Email Address"
            type="email"
            placeholder="email@example.com"
            required
            id="email"
          />
          <TextInput
            label="Card Number"
            type="tel"
            placeholder="1234 5678 9012 3456"
            required
            id="cardNumber"
          />
          <Stack direction="horizontal" spacing={4} justifyBetween noWrap>
            <Select
              options={[
                '01',
                '02',
                '03',
                '04',
                '05',
                '06',
                '07',
                '08',
                '09',
                '10',
                '11',
                '12',
              ]}
              placeholder="MM"
              label="Expiry Month"
              clearable={false}
              required
              id="expiryMonth"
            />
            <Select
              options={['2023', '2024', '2025', '2026', '2027', '2028']}
              placeholder="YYYY"
              label="Expiry Year"
              clearable={false}
              required
              id="expiryYear"
            />
            <TextInput
              label="CVC"
              type="password"
              placeholder="123"
              required
              id="cvc"
            />
          </Stack>
        </Stack>
      </CardContent>
      <CardFooter>
        <Button sx={{ width: '100%' }}>Subscribe Now</Button>
      </CardFooter>
    </Card>
  );
}

export const Default: Story = {
  args: {},
  render: DefaultRender,
};

export const WithBorder: Story = {
  args: {
    withBorder: true,
  },
  render: DefaultRender,
};

export const AdvanceExample: Story = {
  args: {
    withBorder: false,
  },
  render: AdvanceExampleRender,
};

export const ColorAdvanceExample: Story = {
  args: {
    withBorder: false,
    color: 'primary',
  },
  render: AdvanceExampleRender,
};
