import { PropsWithChildren } from 'react';
import { styled } from '@pigment-css/react';
import { LayoutType } from './types';
import { SnowColor, SnowColorValues } from '../types';
import { SnowThemeArgs } from '../../core';
import { SpacingMap } from './constants';

const Container = styled.div<{
  inline?: boolean;
  spacing?: number;
  color?: SnowColor;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: 0,
  svg: {
    width: 20,
  },
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
  ],
}));

export type StackProps = LayoutType & {
  inline?: boolean;
};

export const Stack = ({
  children,
  inline = false,
  spacing = 0,
  color,
}: PropsWithChildren<StackProps>) => {
  return (
    <Container inline={inline} spacing={spacing} color={color}>
      {children}
    </Container>
  );
};
