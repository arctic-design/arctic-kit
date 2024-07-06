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
  '[data-orientation="horizontal"]': {
    button: {
      borderRadius: 0,
      '&:first-of-type': {
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px',
      },
      '&:last-of-type': {
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
      },
    },
  },
  '[data-orientation="vertical"]': {
    flexDirection: 'column',
    button: {
      borderRadius: 0,
      margin: 0,
      '&:first-of-type': {
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
      },
      '&:last-of-type': {
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
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
