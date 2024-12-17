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

function Render() {
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
        <List>
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

export const Default: Story = {
  args: {},
  render: Render,
};
