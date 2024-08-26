import { styled } from '@pigment-css/react';
import { SnowColor, SnowColorValues } from '../types';
import { SnowThemeArgs } from '../../core';

export const Link = styled.a<{ color?: SnowColor }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    fontSize: theme.font.size[100],
    color: theme.colors.grey[900],
    textDecoration: 'none',
    transition: 'color 0.3s',
    '&:hover': {
      color: theme.colors.primary.main,
    },
    variants: [
      ...SnowColorValues.map((color) => ({
        props: { color },
        style: {
          '&:hover': {
            color: theme.colors[color].main,
          },
        },
      })),
    ],
  })
);
