import { Alert, Accordion, AccordionItem, Box } from '@arctic-kit/snow';
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
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
