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
} from '@arctic-kit/snow';
import { UndoActionMenuItem } from '../ui/UndoActionMenuItem';
import { MultipleCardStack } from '../ui/MultipleCardStack';
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
                <Box
                  key={size}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 8,
                    padding: 4,
                  }}
                >
                  <Button size={size as SnowSize}>Default{` - ${size}`}</Button>
                  <Button size={size as SnowSize} variant="outlined">
                    Outlined{` - ${size}`}
                  </Button>
                  <Button size={size as SnowSize} variant="text">
                    Text{` - ${size}`}
                  </Button>
                </Box>
              ))}
              {['small', 'medium', 'large'].map((size) => (
                <Box
                  key={size}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 8,
                    padding: 4,
                  }}
                >
                  <Loader size={size as SnowSize} type="dots" />
                  <Loader size={size as SnowSize} type="spinner" />
                </Box>
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                alignItems: 'center',
                padding: 8,
                gap: 12,
              }}
            >
              <Chip>Default</Chip>
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
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                alignItems: 'center',
                padding: 8,
                gap: 12,
              }}
            >
              <MultipleCardStack />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
