import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { CardTitle } from './CardTitle';
import { CardDescription } from './CardDescription';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import { Select } from '../Select';
import { Stack } from '../Layout';
import { DatePicker } from '../DatePicker/DatePicker';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const selectOptions = [
  { value: 'conference', label: 'Conference' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'webinar', label: 'Webinar' },
  { value: 'meetup', label: 'Meetup' },
];

function DefaultRender(args: StoryObj['args']) {
  return (
    <Card {...args} sx={{ minWidth: 350 }}>
      <CardHeader>
        <CardTitle>Create New Event</CardTitle>
        <CardDescription>
          Organize and manage your upcoming events effortlessly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack spacing={3}>
          <TextInput
            id="event-name"
            label="Event Name"
            placeholder="Enter the name of your event"
          />
          <Select
            label="Category"
            id="category"
            options={selectOptions}
            placeholder="Select a category"
          />
          <DatePicker
            id="event-date"
            label="Date"
            placeholder="Select event date"
          />
        </Stack>
      </CardContent>
      <CardFooter>
        <Stack direction="horizontal" spacing={3} justifyBetween>
          <Button variant="outlined">Reset</Button>
          <Button>Save Event</Button>
        </Stack>
      </CardFooter>
    </Card>
  );
}

export const Default: Story = {
  args: {},
  render: DefaultRender,
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: DefaultRender,
};
