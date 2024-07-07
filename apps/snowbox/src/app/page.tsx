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
} from '@arctic-kit/snow';
import { UndoActionMenuItem } from '../ui/UndoActionMenuItem';
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
          </div>
        </div>
      </div>
    </>
  );
}
