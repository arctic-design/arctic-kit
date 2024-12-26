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

import { Box } from '../Box';
import { Avatar } from '../Avatar';
import { Separator } from '../Indicators';
import { TextArea } from '../TextArea/TextArea';
import { Switch } from '../Switch';
import { useState } from 'react';
import Boy1Src from '../Popover/avatars/boy1.png';

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

function MuteThreadSwitch() {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      id="muteThread"
      label="Mute this thread"
      checked={checked}
      onToggle={() => setChecked((prevState) => !prevState)}
    />
  );
}

function WithPrefixSuffixRender(args: StoryObj['args']) {
  return (
    <Card {...args} sx={{ minWidth: 350, maxWidth: 450 }}>
      <CardHeader
        prefix={<Avatar src={Boy1Src} color="secondary" bgColor="primary" />}
        suffix={
          <Box sx={{ fontSize: 12, color: 'var(--snow-colors-grey-700)' }}>
            Oct 22, 2023, 10:30:00 AM
          </Box>
        }
      >
        <CardTitle>John Smith</CardTitle>
        <CardDescription>
          <Stack>
            <span>Re: Project Update</span>
            <span>Reply-To: johnsmith@example.com</span>
          </Stack>
        </CardDescription>
      </CardHeader>
      <Separator sx={{ marginBottom: 16 }} />

      <CardContent>
        <Box sx={{ fontSize: 14, lineHeight: '20px' }}>
          <Stack spacing={4}>
            <span>
              Thank you for the project update. It looks great! I've gone
              through the report, and the progress is impressive. The team has
              done a fantastic job, and I appreciate the hard work everyone has
              put in. I have a few minor suggestions that I'll include in the
              attached document. Let's discuss these during our next meeting.
              Keep up the excellent work!
            </span>
            <span>Best regards, Alice</span>
          </Stack>
        </Box>
      </CardContent>
      <Separator sx={{ marginBottom: 16 }} />
      <CardFooter>
        <Stack spacing={6}>
          <Box>
            <TextArea id="sendMessageText" placeholder="Reply John Smith..." />
          </Box>
          <Stack direction="horizontal" spacing={3} justifyBetween>
            <MuteThreadSwitch />
            <Button>Send</Button>
          </Stack>
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

export const WithPrefixSuffix: Story = {
  args: {
    size: 'small',
  },
  render: WithPrefixSuffixRender,
};
