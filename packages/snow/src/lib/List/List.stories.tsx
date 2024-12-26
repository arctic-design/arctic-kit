import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../Card';
import { ListItem } from './ListItem';
import { ListItemTitle } from './ListItemTitle';
import { ListItemDescription } from './ListItemDescription';
import { Button } from '../Button';
import { useCallback, useState } from 'react';
import { Switch } from '../Switch';
import {
  ArchiveBoxIcon,
  Battery0Icon,
  Battery100Icon,
} from '@arctic-kit/icons';
import { Separator } from '../Indicators';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof List> = {
  title: 'List',
  component: List,
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
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

type ChoiceType = 'strict' | 'functional' | 'performance';

function Render(args: Story['args']) {
  const [preferences, setPreferences] = useState<{ [key: string]: boolean }>({
    strict: false,
    functional: true,
    performance: false,
  });

  const onChangeHandler = useCallback((choice: ChoiceType) => {
    setPreferences((prevState) => ({
      ...prevState,
      [choice]: !prevState[choice],
    }));
  }, []);
  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent>
        <List {...args}>
          <ListItem
            suffix={
              <Switch
                checked={preferences.strict}
                onToggle={() => onChangeHandler('strict')}
              />
            }
          >
            <ListItemTitle>Strictly Necessary</ListItemTitle>
            <ListItemDescription>
              These cookies are essential in order to use the website and use
              its features.
            </ListItemDescription>
          </ListItem>
          <ListItem
            suffix={
              <Switch
                checked={preferences.functional}
                onToggle={() => onChangeHandler('functional')}
              />
            }
          >
            <ListItemTitle>Functional Cookies</ListItemTitle>
            <ListItemDescription>
              These cookies allow the website to provide personalized
              functionality.
            </ListItemDescription>
          </ListItem>
          <ListItem
            suffix={
              <Switch
                checked={preferences.performance}
                onToggle={() => onChangeHandler('performance')}
              />
            }
          >
            <ListItemTitle>Performance Cookies</ListItemTitle>
            <ListItemDescription>
              These cookies help to improve the performance of the website.
            </ListItemDescription>
          </ListItem>
        </List>
      </CardContent>
      <CardFooter>
        <Button style={{ width: '100%' }}>Save preferences</Button>
      </CardFooter>
    </Card>
  );
}

function PrefixIconsRender(args: Story['args']) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <List {...args} spacing={1}>
      <ListItem
        prefix={<Battery0Icon width={16} />}
        selected={selectedIndex === 0}
        onClick={() => setSelectedIndex(0)}
      >
        <ListItemTitle>Strictly Necessary</ListItemTitle>
        <ListItemDescription>
          These cookies are essential in order to use the website and use its
          features.
        </ListItemDescription>
      </ListItem>
      <ListItem
        prefix={<ArchiveBoxIcon width={16} />}
        selected={selectedIndex === 1}
        onClick={() => setSelectedIndex(1)}
      >
        <ListItemTitle>Functional Cookies</ListItemTitle>
        <ListItemDescription>
          These cookies allow the website to provide personalized functionality.
        </ListItemDescription>
      </ListItem>
      <Separator />
      <ListItem
        prefix={<Battery100Icon width={16} />}
        selected={selectedIndex === 2}
        onClick={() => setSelectedIndex(2)}
      >
        <ListItemTitle>Performance Cookies</ListItemTitle>
        <ListItemDescription>
          These cookies help to improve the performance of the website.
        </ListItemDescription>
      </ListItem>
    </List>
  );
}

export const Default: Story = {
  args: {},
  render: Render,
};

export const WithPrefixIcons: Story = {
  args: {
    spacing: 2,
  },
  render: PrefixIconsRender,
};
