import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import { HandThumbDownIcon, MegaphoneIcon } from '@arctic-kit/icons';
import { Box } from '../Box';
import { Radio } from '../Radio';
import { useState } from 'react';
import { Checkbox } from '../Checkbox';
import { Chip } from '../Chip';
import { Alert } from '../Alert';
import { Center, Stack } from '../Layout';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
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
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  return (
    <Accordion {...args}>
      <AccordionItem title="Section 1">
        This is the content of Section 1.
      </AccordionItem>
      <AccordionItem title="Section 2">
        This is the content of Section 2.
      </AccordionItem>
      <AccordionItem title="Section 3">
        This is the content of section 3.
      </AccordionItem>
    </Accordion>
  );
}

function CustomExpandIcon(args: Story['args']) {
  return (
    <Accordion {...args}>
      <AccordionItem
        title="Section 1"
        titleFooter="Footer section goes here"
        expandSection={<HandThumbDownIcon />}
      >
        This is the content of Section 1 with a custom icon.
      </AccordionItem>
      <AccordionItem title="Section 2">
        This is the content of Section 2.
      </AccordionItem>
      <AccordionItem title="Section 3" expandSection={<MegaphoneIcon />}>
        This is the content of section 3 with a custom icon.
      </AccordionItem>
    </Accordion>
  );
}

function CustomTitleIcon(args: Story['args']) {
  return (
    <Stack spacing={3}>
      <Box as="p">This accordion has spacing between the accordion items</Box>
      <Accordion spacing={4} {...args}>
        <AccordionItem
          title="Apple Section"
          expandSection={<HandThumbDownIcon />}
        >
          This is the content of Apple Section with a title icon and custom
          expand icon.
        </AccordionItem>
        <AccordionItem title="Magnet Section">
          This is the content of Magnet Section.
        </AccordionItem>
        <AccordionItem title="Car Section">
          This is the content of Car Section.
        </AccordionItem>

        <AccordionItem reverse title="Building Section">
          This is the content of Building Section with reverse position of title
          text and icons.
        </AccordionItem>
      </Accordion>
    </Stack>
  );
}

function CustomTitlesRadioDisplay(args: Story['args']) {
  const [selectedValue, setSelectedValue] = useState('reject-cardio');

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <Stack spacing={3}>
      <Box as="p">
        This acoordion has spacing between the accordion items and the title is
        a radio component
      </Box>
      <Accordion spacing={4} {...args}>
        <AccordionItem
          titleComponent={
            <Radio
              option={{
                label: 'Reject Option 1',
                value: 'reject-cardio',
              }}
              selectedValue={selectedValue}
              onClick={(event) => handleRadioChange(event.value)}
              stopPropagation
            />
          }
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          deleniti sequi, quis numquam, corrupti debitis laboriosam quasi magnam
          mollitia, sint commodi cupiditate ipsa corporis? Omnis eligendi
          accusamus obcaecati voluptate vitae.
        </AccordionItem>
        <AccordionItem
          titleComponent={
            <Radio
              option={{
                label: 'Reject Option 2',
                value: 'dialated',
              }}
              selectedValue={selectedValue}
              onClick={(event) => handleRadioChange(event.value)}
              stopPropagation
            />
          }
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          mollitia soluta quidem dignissimos rem doloribus animi alias eius.
          Numquam dignissimos inventore fuga, distinctio voluptates ex aliquam
          modi? Dicta, dolorum incidunt!
        </AccordionItem>
        <AccordionItem
          titleComponent={
            <Radio
              option={{
                label: 'Reject Option 3',
                value: 'obstructive',
              }}
              selectedValue={selectedValue}
              onClick={(event) => handleRadioChange(event.value)}
              stopPropagation
            />
          }
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          porro, necessitatibus alias asperiores, recusandae debitis ut fugiat
          similique rerum a id optio cumque, quos illum? Earum odio voluptas
          reiciendis explicabo.
        </AccordionItem>

        <AccordionItem
          titleComponent={
            <Radio
              option={{
                label: 'Reject Option 4',
                value: 'unspecified',
              }}
              selectedValue={selectedValue}
              onClick={(event) => handleRadioChange(event.value)}
              stopPropagation
            />
          }
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
          molestiae corporis suscipit placeat repudiandae recusandae pariatur
          minima, unde voluptate dignissimos tenetur est soluta fugit? Veritatis
          vitae quos accusamus libero enim.
        </AccordionItem>
      </Accordion>
    </Stack>
  );
}

function CustomTitlesCheckboxDisplay(args: Story['args']) {
  const [selectedValue, setSelectedValue] = useState<{
    [key: string]: boolean;
  }>({});

  const handleChange = (name: string, value: boolean) => {
    setSelectedValue({ ...selectedValue, [name]: value });
  };
  return (
    <Stack spacing={3}>
      <Box as="p">
        This acoordion has spacing between the accordion items and the title is
        a checkbox component
      </Box>
      <Accordion spacing={4} {...args}>
        <AccordionItem
          titleComponent={
            <Checkbox
              label="AAA	— This could be some text"
              name="hypertension"
              onChange={(value) => handleChange('hypertension', value)}
              checked={selectedValue['hypertension']}
            />
          }
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          deleniti sequi, quis numquam, corrupti debitis laboriosam quasi magnam
          mollitia, sint commodi cupiditate ipsa corporis? Omnis eligendi
          accusamus obcaecati voluptate vitae.
        </AccordionItem>
        <AccordionItem
          titleComponent={
            <Checkbox
              label="None, reject all options"
              name="rejactall"
              onChange={(value) => handleChange('rejactall', value)}
              checked={selectedValue['rejactall']}
            />
          }
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          mollitia soluta quidem dignissimos rem doloribus animi alias eius.
          Numquam dignissimos inventore fuga, distinctio voluptates ex aliquam
          modi? Dicta, dolorum incidunt!
        </AccordionItem>
      </Accordion>
    </Stack>
  );
}

function LeadingExpandSection(args: Story['args']) {
  return (
    <Accordion {...args}>
      <AccordionItem
        title="Section 1"
        leadingExpandSection={<Alert severity="success">Accepted</Alert>}
      >
        This is the content of Section 1.
      </AccordionItem>
      <AccordionItem title="Section 2">
        This is the content of Section 2.
      </AccordionItem>
      <AccordionItem title="Section 3">
        This is the content of section 3.
      </AccordionItem>
    </Accordion>
  );
}

function WithDisabledToggleRender(args: Story['args']) {
  return (
    <Accordion {...args}>
      <AccordionItem title="Section 1" disableToggle expandSection>
        This is the content of Section 1 which is disabled.
      </AccordionItem>
      <AccordionItem title="Section 2" disableToggle hideVerticalBorder>
        This is the content of Section 2 which is disabled with
        hideVerticalBorder
      </AccordionItem>
      <AccordionItem title="Section 3">
        This is the content of Section 3.
      </AccordionItem>
      <AccordionItem title="Section 4">
        This is the content of section 4.
      </AccordionItem>
    </Accordion>
  );
}

function WithErrorAccordion(args: Story['args']) {
  return (
    <Accordion {...args}>
      <AccordionItem
        title="Title 1"
        subTitle="Subtitle1 text goes here which can be a long text as well"
        titleFooter="Footer"
        leadingExpandSection={
          <Chip color="warning" size="small">
            Draft
          </Chip>
        }
        errorText="Last update failed. Please try again."
      >
        <Center spacing={2} inline>
          <Chip size="small">Option 1</Chip>
          <Chip size="small">Option 2</Chip>
          <Chip size="small">Option 3</Chip>
        </Center>
      </AccordionItem>
      <AccordionItem
        title="Title 2"
        subTitle="Subtitle2 text goes here which can be a long text as well"
        titleFooter="Footer"
        leadingExpandSection={
          <Chip color="error" size="small">
            Failed
          </Chip>
        }
      >
        <Box sx={{ padding: 12 }}>
          This is the content of the second section
        </Box>
      </AccordionItem>
      <AccordionItem
        title="Title 3"
        subTitle="Subtitle3 text goes here which can be a long text as well"
        titleFooter="Footer"
        leadingExpandSection={
          <Chip color="error" size="small">
            Failed
          </Chip>
        }
      >
        This is the content of section 3.
      </AccordionItem>
    </Accordion>
  );
}

export const Default: Story = {
  args: {},
  render: DefaultRender,
};

export const IconWithTitle: Story = {
  args: {},
  render: CustomTitleIcon,
};

export const ExpandIcon: Story = {
  args: {},
  render: CustomExpandIcon,
};

export const RadioTitles: Story = {
  args: {},
  render: CustomTitlesRadioDisplay,
};

export const CheckboxTitles: Story = {
  args: {},
  render: CustomTitlesCheckboxDisplay,
};

export const WithLeadingExpandSection: Story = {
  args: {},
  render: LeadingExpandSection,
};

export const WithDisabledToggle: Story = {
  args: {},
  render: WithDisabledToggleRender,
};

export const WithError: Story = {
  args: {},
  render: WithErrorAccordion,
};
