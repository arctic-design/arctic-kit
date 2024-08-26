'use client';
import { PropsWithChildren, forwardRef, ForwardedRef } from 'react';
import { styled } from '@pigment-css/react';
import { ButtonGroupContextProps } from './types';
import { ButtonGroupContext } from './ButtonGroupContext';

export type ButtonGroupProps = ButtonGroupContextProps & {
  orientation?: 'horizontal' | 'vertical';
};

const ButtonGroupContainer = styled.div<ButtonGroupProps>({
  display: 'flex',
  '&[data-orientation="horizontal"]': {
    button: {
      borderLeftWidth: 0,
      '&:not(:last-child)': {
        borderRightWidth: 1,
      },
      '&:first-of-type': {
        borderLeftWidth: 1,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      '&:last-of-type': {
        borderRightWidth: 1, // Add borderRight for the last child
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
      '&:not(:first-of-type):not(:last-of-type)': {
        borderRadius: 0,
      },
    },
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    button: {
      borderRadius: 0,
      borderBottomWidth: 0,
      margin: 0,
      '&:first-of-type': {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      },
      '&:last-of-type': {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomWidth: 1,
      },
    },
  },
});

const ButtonGroup = forwardRef(function ButtonGroup(
  {
    children,
    variant = 'outlined',
    disabled,
    orientation = 'horizontal',
    color,
    size = 'medium',
    id = 'button-group',
  }: PropsWithChildren<ButtonGroupProps>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const value = { variant, disabled, color, size };

  return (
    <ButtonGroupContainer
      data-orientation={orientation}
      variant={variant}
      ref={ref}
      role="group"
      id={id}
      data-testid={id}
    >
      <ButtonGroupContext.Provider value={value}>
        {children}
      </ButtonGroupContext.Provider>
    </ButtonGroupContainer>
  );
});

export { ButtonGroup };
