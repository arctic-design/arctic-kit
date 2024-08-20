import { PropsWithChildren } from 'react';
import { styled } from '@pigment-css/react';
import { LayoutType } from './types';
import { SnowColor, SnowColorValues } from '../types';
import { SnowThemeArgs } from '../../core';

const SpacingMap = [1, 2, 3, 4, 5, 6, 7, 8];

const Container = styled.div<{
  inline?: boolean;
  spacing?: number;
  color?: SnowColor;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  svg: {
    width: 20,
  },
  variants: [
    { props: { inline: true }, style: { display: 'inline-flex' } },
    ...SpacingMap.map((spacing) => ({
      props: { spacing },
      style: {
        padding: `${spacing * 0.5 * 16}px`,
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

export type CenterProps = LayoutType & {
  inline?: boolean;
};

export const Center = ({
  children,
  inline = false,
  spacing = 0,
  color,
}: PropsWithChildren<CenterProps>) => {
  return (
    <Container inline={inline} spacing={spacing} color={color}>
      {children}
    </Container>
  );
};
