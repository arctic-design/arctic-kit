'use client';
import React from 'react';
import { styled, SxProp } from '@pigment-css/react';
import { AccordionContext } from './AccordionContext';
import { SnowThemeArgs } from '../../core';

const Container = styled.div<{ spacing?: number; sx?: SxProp }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: ({ spacing = 0 }) => `${spacing}px`,
    svg: {
      width: 16,
    },
    variants: [
      {
        props: { spacing: 0 },
        style: {
          border: `1px solid ${theme.colors.grey[300]}`,
          borderRadius: '6px',
        },
      },
    ],
  })
);

export type AccordionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  spacing?: number;
  id?: string;
  sx?: SxProp;
};

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion(
    { children, spacing = 0, id = 'accordion', ...otherProps }: AccordionProps,
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
