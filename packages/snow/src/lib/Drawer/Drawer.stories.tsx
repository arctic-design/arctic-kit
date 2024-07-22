import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';
import { useState } from 'react';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Grid, GridRow, GridColumn } from '../Grid';
import { Select } from '../Select';
import { Autocomplete } from '../Autocomplete';
import { SegmentedControl, SegmentedControlButton } from '../SegmentedControl';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
  component: Drawer,
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
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer}>Toggle Drawer</Button>
      <Drawer {...args} open={isDrawerOpen} onOpenChange={toggleDrawer}>
        <Grid spacing={1}>
          <GridRow>
            <GridColumn xs={12} lg={6}>
              <SegmentedControl>
                <SegmentedControlButton>React</SegmentedControlButton>
                <SegmentedControlButton>Angular</SegmentedControlButton>
                <SegmentedControlButton>Vue</SegmentedControlButton>
              </SegmentedControl>
            </GridColumn>
            <GridColumn xs={12} lg={6}>
              <TextInput label="First name" />
            </GridColumn>
            <GridColumn xs={12} lg={6}>
              <TextInput label="Second name" />
            </GridColumn>
            <GridColumn xs={12} lg={6}>
              <Select
                label="Fruit"
                options={[
                  'Apple',
                  'Banana',
                  'Orange',
                  'Mango',
                  'Pineapple',
                  'Grapes',
                  'Strawberry',
                  'Watermelon',
                  'Kiwi',
                  'Peach',
                  'Plum',
                ]}
                placeholder="Select a fruit"
              />
            </GridColumn>
            <GridColumn xs={12} lg={6}>
              <Autocomplete
                label="Car"
                options={['Audi', 'BMW', 'Chevrolet', 'Dodge']}
                placeholder="Select a car"
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </Drawer>
    </div>
  );
}

export const Default: Story = {
  args: {
    children: 'This is the alert message',
    title: 'Drawer Title',
    titleFooter: 'Footer section',
    position: 'left',
    onClose: () => {
      console.log('Close Drawer');
    },
    actionLabel: 'Save',
    actionSize: 'large',
    onAction: () => {
      console.log('Save');
    },
  },
  render: DefaultRender,
};
