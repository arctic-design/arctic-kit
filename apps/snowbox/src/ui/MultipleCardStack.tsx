'use client';
import {
  Accordion,
  AccordionItem,
  Box,
  CardStack,
  Chip,
} from '@arctic-kit/snow';
import { useState } from 'react';

function AccordionChild({
  activeIndex = 0,
  indexes,
  onClick,
}: {
  activeIndex?: number;
  indexes: number[];
  onClick?: (index: number) => void;
}) {
  return (
    <Accordion>
      <AccordionItem
        title="Title 1"
        subTitle="Sub-title1 text can be put here"
        active={indexes[0] === activeIndex}
        onToggle={() => onClick && onClick(indexes[0])}
        defaultExpanded={indexes[0] === activeIndex}
        titleFooter="Footer text1"
        leadingExpandSection={
          <Chip color="success" size="small">
            Success
          </Chip>
        }
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 4,
          }}
        >
          <Chip size="small">Option 1</Chip>
          <Chip size="small">Option 2</Chip>
          <Chip size="small">Option 3</Chip>
        </Box>
      </AccordionItem>
      <AccordionItem
        title="Title 2"
        subTitle="Sub-title2 text can be put here"
        titleFooter="Footer text2"
        active={indexes[1] === activeIndex}
        onToggle={() => onClick && onClick(indexes[1])}
        defaultExpanded={indexes[1] === activeIndex}
      >
        <Box
          sx={{
            padding: 12,
          }}
        >
          This is the content of the second section
        </Box>
      </AccordionItem>
      <AccordionItem
        title="Title 3"
        subTitle="Sub-title3 text can be put here"
        titleFooter="Footer text3"
        active={indexes[2] === activeIndex}
        onToggle={() => onClick && onClick(indexes[2])}
        defaultExpanded={indexes[2] === activeIndex}
      >
        This is the content of section 3.
      </AccordionItem>
    </Accordion>
  );
}

export function MultipleCardStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        flex: 1,
      }}
    >
      <CardStack
        totalItems={3}
        title="Group Header Title 1"
        onToggle={(collapsed) =>
          !collapsed && ![0, 1, 2].includes(activeIndex) && setActiveIndex(0)
        }
        initialCollapsed={false}
        active={[0, 1, 2].includes(activeIndex)}
      >
        <AccordionChild
          indexes={[0, 1, 2]}
          activeIndex={activeIndex}
          onClick={(index) => setActiveIndex(index)}
        />
      </CardStack>
      <CardStack
        totalItems={3}
        title="Group Header Title 2"
        onToggle={(collapsed) =>
          !collapsed && ![3, 4, 5].includes(activeIndex) && setActiveIndex(3)
        }
        active={[3, 4, 5].includes(activeIndex)}
      >
        <AccordionChild
          indexes={[3, 4, 5]}
          activeIndex={activeIndex}
          onClick={(index) => setActiveIndex(index)}
        />
      </CardStack>
      <Accordion>
        <AccordionItem
          title="Another Title1"
          subTitle="Subtitle1 text goes here..."
          active={6 === activeIndex}
          onToggle={() => setActiveIndex(6)}
          titleFooter="Footer text"
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 4,
            }}
          >
            <Chip size="small">Option A</Chip>
            <Chip size="small">Option B</Chip>
            <Chip size="small">Option C</Chip>
          </Box>
        </AccordionItem>
        <AccordionItem
          title="Another Title2"
          subTitle="Subtitle2 text goes here..."
          titleFooter="Footer"
          active={7 === activeIndex}
          onToggle={() => setActiveIndex(7)}
        >
          <Box sx={{ padding: 12 }}>
            This is the content of the second section
          </Box>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
