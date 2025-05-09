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
  sx?: SxProp;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
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
  color,
  ...otherProps
}: PropsWithChildren<CenterProps>) => {
  return (
    <Container inline={inline} color={color} {...otherProps}>
      {children}
    </Container>
  );
};
