import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';
import { PropsWithChildren, useState } from 'react';
import { Tab } from './Tab';
import { TabPanels } from './TabPanels';
import { TabPanel } from './TabPanel';
import { Paper } from '../Paper';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

function Container({ children }: PropsWithChildren) {
  return <Paper variant="outlined">{children}</Paper>;
}

function Render(args: Story['args']) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container>
      <Tabs {...args}>
        <Tab
          label="Drafts"
          selectedTabIndex={selectedTab}
          index={0}
          onClick={setSelectedTab}
        />
        <Tab
          label="In Progress"
          selectedTabIndex={selectedTab}
          index={1}
          onClick={setSelectedTab}
        />
        <Tab
          label="Ready for Review"
          selectedTabIndex={selectedTab}
          index={2}
          onClick={setSelectedTab}
        />
        <Tab
          label="On Hold"
          selectedTabIndex={selectedTab}
          index={3}
          onClick={setSelectedTab}
        />
        <Tab
          label="Complete"
          selectedTabIndex={selectedTab}
          index={4}
          onClick={setSelectedTab}
        />
      </Tabs>
      <TabPanels>
        <TabPanel label="Tab3" selected={selectedTab === 2}>
          Content for Tab3
        </TabPanel>
        <TabPanel label="Tab1" selected={selectedTab === 0}>
          Content for Tab1
        </TabPanel>
        <TabPanel label="Tab2" selected={selectedTab === 1}>
          Content for Tab2
        </TabPanel>
        <TabPanel label="Tab4" selected={selectedTab === 3}>
          Content for Tab4
        </TabPanel>
        <TabPanel label="Tab5" selected={selectedTab === 4}>
          Content for Tab5
        </TabPanel>
      </TabPanels>
    </Container>
  );
}

export const Default: Story = {
  args: {
    fullWidth: false,
  },
  render: Render,
};
