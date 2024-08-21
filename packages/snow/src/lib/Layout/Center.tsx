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
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
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

export type CenterProps = LayoutType & {
  inline?: boolean;
};

export const Center = ({
  children,
  inline = false,
  spacing = 0,
  color,
  ...otherProps
}: PropsWithChildren<CenterProps>) => {
  return (
    <Container inline={inline} spacing={spacing} color={color} {...otherProps}>
      {children}
    </Container>
  );
};
