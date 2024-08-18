'use client';
import React from 'react';
import { styled } from '@pigment-css/react';
import { AccordionContext } from './AccordionContext';
import { SnowThemeArgs } from '../../core';

const Container = styled.div<{ spacing?: number }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: ({ spacing = 0 }) => `${spacing}px`,
    svg: {
      width: 20,
    },
  })
);

export type AccordionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  spacing?: number;
  id?: string;
};

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion(
    { children, spacing = 4, id = 'accordion', ...otherProps }: AccordionProps,
    ref
  ) {
    return (
      <Container
        id={id}
        data-testid={id}
        {...otherProps}
        spacing={spacing}
        ref={ref}
      >
        <AccordionContext.Provider value={{ spacing }}>
          {children}
        </AccordionContext.Provider>
      </Container>
    );
  }
);

Accordion.displayName = 'Accordion';

export { Accordion };
