import {
  Alert,
  Accordion,
  AccordionItem,
  Box,
  Button,
  SnowSize,
  Loader,
  ActionMenu,
  ActionMenuItem,
  TextInput,
  TextArea,
  Chip,
  Tooltip,
  Switch,
  IconButton,
  Skeleton,
  SegmentedControl,
  SegmentedControlButton,
} from '@arctic-kit/snow';
import { UndoActionMenuItem } from '../ui/UndoActionMenuItem';
import { MultipleCardStack } from '../ui/MultipleCardStack';
import { CalendarView } from '../ui/CalendarView';
import {
  BackwardIcon,
  CheckIcon,
  CreditCardIcon,
  FaceSmileIcon,
  ForwardIcon,
  PauseIcon,
} from '@heroicons/react/20/solid';
import { ControlContainer } from '../ui/ControlContainer';
import { RadioGroupView } from '../ui/RadioGroupView';

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

const largeRadioOptions = [
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
export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome snowbox 👋
            </h1>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Alert severity="success">
                  Snowflakes were collected in the snowbox
                </Alert>
                <Alert severity="info">
                  Snowflakes were collected in the snowbox
                </Alert>
                <Alert severity="warning">
                  Snowflakes were collected in the snowbox
                </Alert>
                <Alert severity="error">
                  Snowflakes were collected in the snowbox
                </Alert>
              </Box>
              <Accordion>
                <AccordionItem
                  title="Accordion"
                  subTitle="Success"
                  defaultExpanded
                >
                  <Alert severity="success">
                    Snowflakes were collected in the snowbox
                  </Alert>
                </AccordionItem>
                <AccordionItem title="Accordion" subTitle="Info">
                  <Alert severity="info">
                    Snowflakes were collected in the snowbox
                  </Alert>
                </AccordionItem>
                <AccordionItem title="Accordion" subTitle="Warning">
                  <Alert severity="warning">
                    Snowflakes were collected in the snowbox
                  </Alert>
                </AccordionItem>
                <AccordionItem title="Accordion" subTitle="Error">
                  <Alert severity="error">
                    Snowflakes were collected in the snowbox
                  </Alert>
                </AccordionItem>
              </Accordion>
              {['small', 'medium', 'large'].map((size) => (
                <ControlContainer key={size}>
                  <Button size={size as SnowSize}>Default{` - ${size}`}</Button>
                  <Button size={size as SnowSize} variant="outlined">
                    Outlined{` - ${size}`}
                  </Button>
                  <Button size={size as SnowSize} variant="text">
                    Text{` - ${size}`}
                  </Button>
                  <IconButton size={size as SnowSize}>
                    <FaceSmileIcon />
                  </IconButton>
                  <IconButton color="primary" size={size as SnowSize}>
                    <FaceSmileIcon />
                  </IconButton>
                  <IconButton color="error" rounded size={size as SnowSize}>
                    <FaceSmileIcon />
                  </IconButton>
                </ControlContainer>
              ))}
              {['small', 'medium', 'large'].map((size) => (
                <ControlContainer key={size}>
                  <Loader size={size as SnowSize} type="dots" />
                  <Loader size={size as SnowSize} type="spinner" />
                </ControlContainer>
              ))}
              <Box sx={{ padding: 4 }}>
                <ActionMenu label="Edit Menu">
                  <UndoActionMenuItem />
                  <ActionMenuItem label="Redo" disabled />
                  <ActionMenuItem label="Cut" />
                  <ActionMenu label="Copy as" color="success">
                    <ActionMenuItem label="Text" />
                    <ActionMenuItem label="Video" />
                    <ActionMenu label="Image">
                      <ActionMenuItem label=".png" />
                      <ActionMenuItem label=".jpg" />
                      <ActionMenuItem label=".svg" />
                      <ActionMenuItem label=".gif" />
                    </ActionMenu>
                    <ActionMenuItem label="Audio" />
                  </ActionMenu>
                  <ActionMenu label="Share">
                    <ActionMenuItem label="Mail" />
                    <ActionMenuItem label="Instagram" />
                  </ActionMenu>
                  <ActionMenuItem label="Delete" color="error" />
                </ActionMenu>
              </Box>
            </Box>
            <Box
              sx={{
                padding: 8,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                flexDirection: 'column',
              }}
            >
              <TextInput label="Snow input" required />
              <TextArea label="Snow textarea" required />
            </Box>
            <ControlContainer>
              <Tooltip message="This is the content of the tooltip">
                <Chip>Default with tooltip</Chip>
              </Tooltip>
              <Chip color="primary">Primary</Chip>
              <Chip color="secondary">Secondary</Chip>
              <Chip color="info">Info</Chip>
              <Chip color="warning">Warning</Chip>
              <Chip color="error">Error</Chip>
              <Chip color="primary" interactive>
                Primary Interactive
              </Chip>
              <Chip color="primary" interactive selected>
                Primary Interactive - selected
              </Chip>
              <Chip color="secondary" interactive>
                Secondary Interactive
              </Chip>
              <Chip color="secondary" interactive selected>
                Secondary Interactive - selected
              </Chip>
            </ControlContainer>
            <ControlContainer>
              <MultipleCardStack />
            </ControlContainer>
            <ControlContainer>
              <Switch label="Unselected" />
              <Switch checked label="Selected" />
            </ControlContainer>
            <ControlContainer>
              <CalendarView />
            </ControlContainer>
            <Box
              sx={{
                padding: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Skeleton height={40} circle />
                <Skeleton height={40} circle />
                <Skeleton height={40} circle />
              </Box>
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={100} />
            </Box>
            <ControlContainer>
              <SegmentedControl>
                <SegmentedControlButton>React</SegmentedControlButton>
                <SegmentedControlButton>Angular</SegmentedControlButton>
                <SegmentedControlButton>Vue</SegmentedControlButton>
                <SegmentedControlButton>Preact</SegmentedControlButton>
                <SegmentedControlButton>Svelte</SegmentedControlButton>
              </SegmentedControl>
              <SegmentedControl>
                <SegmentedControlButton leadingIcon={<CheckIcon />}>
                  React
                </SegmentedControlButton>
                <SegmentedControlButton
                  leadingIcon={<CreditCardIcon />}
                  disabled
                >
                  Angular
                </SegmentedControlButton>
                <SegmentedControlButton leadingIcon={<ForwardIcon />}>
                  Vue
                </SegmentedControlButton>

                <SegmentedControlButton leadingIcon={<BackwardIcon />}>
                  Vue
                </SegmentedControlButton>
              </SegmentedControl>
              <SegmentedControl>
                <SegmentedControlButton>
                  <CheckIcon />
                </SegmentedControlButton>
                <SegmentedControlButton>
                  <CreditCardIcon />
                </SegmentedControlButton>
                <SegmentedControlButton>
                  <ForwardIcon />
                </SegmentedControlButton>
              </SegmentedControl>
              <SegmentedControl>
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
            </ControlContainer>
            <ControlContainer>
              <RadioGroupView id="default_radio" options={options} />
              <RadioGroupView
                id="large_radio_options"
                options={largeRadioOptions}
              />
            </ControlContainer>
          </div>
        </div>
      </div>
    </>
  );
}
