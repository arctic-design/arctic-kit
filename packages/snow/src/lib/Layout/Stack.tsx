import { PropsWithChildren } from 'react';
import { styled, SxProp } from '@pigment-css/react';
import { LayoutType, LayoutSpacingType } from './types';
import { SnowColor, SnowColorValues } from '../types';
import { SnowThemeArgs } from '../../core';
import { SpacingMap } from './constants';

const Container = styled.div<{
  inline?: boolean;
  spacing?: LayoutSpacingType;
  color?: SnowColor;
  direction?: 'horizontal' | 'vertical';
  sx?: SxProp;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: 0,
  variants: [
    { props: { inline: true }, style: { display: 'inline-flex' } },
    ...SpacingMap.map((spacing) => ({
      props: { spacing },
      style: {
        gap: `${spacing * 4}px`,
      },
    })),
    ...SnowColorValues.map((color) => ({
      props: { color },
      style: {
        boxShadow: 'none',
        border: `${theme.border.width.main} solid ${theme.colors[color][300]}`,
        backgroundColor: theme.colors[color][50],
      },
    })),
    {
      props: { direction: 'horizontal' },
      style: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
      },
    },
    {
      props: { justifyBetween: true },
      style: {
        justifyContent: 'space-between',
      },
    },
  ],
}));

export type StackProps = LayoutType & {
  inline?: boolean;
  direction?: 'horizontal' | 'vertical';
  justifyBetween?: boolean;
  sx?: SxProp;
};

export const Stack = ({
  children,
  inline = false,
  spacing = 0,
  color,
  direction = 'vertical',
  ...otherProps
}: PropsWithChildren<StackProps>) => {
  return (
    <Container
      inline={inline}
      spacing={spacing}
      color={color}
      direction={direction}
      {...otherProps}
    >
      {children}
    </Container>
  );
};
