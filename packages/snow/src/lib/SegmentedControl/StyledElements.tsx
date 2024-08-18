import { styled } from '@pigment-css/react';
import { SnowColor, SnowColorValues, SnowSize } from '../types';
import { SnowThemeArgs } from '../../core';
import { SnowHeights } from '../constants';

export const RootContainer = styled.div<{ size?: SnowSize }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    display: 'flex',
    background: theme.colors.grey[200],
    borderRadius: '4px',
    border: `1px solid ${theme.colors.grey[300]}`,
    width: 'fit-content',
    height: SnowHeights['medium'] - 2,
    variants: ['small', 'medium', 'large'].map((size) => ({
      props: { size: size as SnowSize },
      style: {
        height: SnowHeights[size as SnowSize] - 2,
      },
    })),
  })
);

export const Container = styled.div({
  display: 'flex',
  position: 'relative',
  border: 'none',
  gap: 4,
  margin: 2,
  overflow: 'hidden', // Ensures the animated div doesn't overflow the rounded borders
});

export const StyledIndicator = styled.div<{
  color?: SnowColor;
  hide?: boolean;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  margin: 0,
  top: 0,
  height: '100%',
  borderRadius: 4,
  border: `1px solid ${theme.colors.grey[400]}`,
  background: theme.colors.neutral[0],
  variants: [
    ...SnowColorValues.map((color) => ({
      props: { color },
      style: {
        border: `1px solid ${theme.colors[color].main}`,
        background: theme.colors[color].main,
      },
    })),
    {
      props: { hide: true },
      style: {
        border: 'none',
      },
    },
  ],
}));

export const Button = styled.button<{ color?: SnowColor }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    flex: 1,
    display: 'flex',
    gap: '8px',
    padding: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
    boxSizing: 'border-box',
    border: 'none',
    background: 'transparent',
    color: theme.colors.grey[900],
    fontFamily: theme.font.family.base,
    fontWeight: theme.font.weight.medium,
    fontSize: theme.font.size[100],
    fontStyle: 'normal',
    whiteSpace: 'nowrap',
    outline: 'none',
    position: 'relative',
    zIndex: 1,
    borderRadius: 4,
    '&[aria-selected="true"]': {
      color: theme.colors.grey[900],
    },
    '&:hover': {
      '&:not(:disabled)': {
        cursor: 'pointer',
        '&[aria-selected="false"]': {
          background: theme.colors.grey[400],
        },
      },
    },
    svg: {
      width: 15,
      height: 15,
    },
    '&:disabled': {
      backgroundColor: theme.colors.grey[100],
      borderColor: theme.colors.grey[400],
      color: theme.colors.grey[500],
      svg: {
        fill: theme.colors.grey[600],
      },
    },
    variants: [
      ...SnowColorValues.map((color) => ({
        props: { color },
        style: {
          '&[aria-selected="true"]': {
            color: theme.colors.neutral[0],
          },
          '&:disabled': {
            backgroundColor: theme.colors[color][100],
            borderColor: theme.colors[color][400],
            color: theme.colors.grey[500],
          },
        },
      })),
    ],
  })
);
