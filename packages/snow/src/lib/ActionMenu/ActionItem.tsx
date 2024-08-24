import { styled } from '@pigment-css/react';
import { SnowColor, SnowColorValues, SnowSize, SnowSizeValues } from '../types';
import { SnowHeights, SnowSpacingMap } from '../constants';
import { SnowThemeArgs } from '../../core';

export const ActionItem = styled.button<{
  itemSize?: SnowSize;
  color?: SnowColor;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  outline: 0,
  backgroundColor: 'transparent',
  border: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
  '&.RootMenu, &.MenuItem': {
    fontSize: theme.font.size[100],
    fontFamily: theme.font.family.base,
    color: theme.colors.neutral[1000],
    svg: {
      width: 14,
    },
  },
  '&.RootMenu': {
    borderRadius: '4px',
    color: theme.colors.neutral[1000],
    backgroundColor: theme.colors.neutral[0],
    border: `1px solid ${theme.colors.grey[400]}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&[data-open], &:hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors.grey[50],
      borderColor: theme.colors.grey[700],
      svg: {
        color: theme.colors.neutral[1000],
      },
    },
    '&[aria-disabled="true"]': {
      backgroundColor: theme.colors.grey[100],
      borderColor: theme.colors.grey[400],
      color: theme.colors.grey[600],
      cursor: 'not-allowed',
      svg: {
        color: theme.colors.grey[600],
      },
    },
    position: 'relative',
    '&:focus::after': {
      content: '""',
      position: 'absolute',
      top: '-5px',
      left: '-5px',
      right: '-5px',
      bottom: '-5px',
      borderRadius: '6px',
      zIndex: 1,
      pointerEvents: 'none', // Ensure clicks pass through to the button
    },
    "&[data-no-border='true']": {
      border: 'none',
    },
  },

  '&.MenuItem': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'none',
    width: '100%',
    border: 'none',
    borderRadius: '4px',
    textAlign: 'left',
    lineHeight: 1.8,
    minWidth: '110px',
    margin: 0,
    outline: 0,
    '&:focus, &[data-nested][data-open]:not([data-focus-inside]), &[data-focus-inside][data-open]':
      {
        background: theme.colors.grey[200],
      },
    '&[disabled]': {
      color: theme.colors.grey[500],
      cursor: 'default',
    },
  },

  variants: [
    ...SnowColorValues.map((color) => ({
      props: { color: color },
      style: {
        '&.RootMenu, &.MenuItem': {
          color: theme.colors[color].main,
        },
        '&.RootMenu': {
          border: `1px solid ${theme.colors[color].main}`,
          svg: {
            color: theme.colors[color].main,
          },
          '&[data-open], &:hover': {
            borderColor: theme.colors[color][700],
            svg: {
              color: theme.colors[color][700],
            },
          },
          '&:focus::after': {
            border: `1px solid ${theme.colors[color][300]}`,
          },
        },
      },
    })),
    ...SnowSizeValues.map((size) => ({
      props: { itemSize: size },
      style: {
        '&.RootMenu, &.MenuItem': {
          height: `${SnowHeights[size]}px`,
          padding: `calc(${theme.spacings.main} * ${
            SnowSpacingMap[size]
          }) calc(${theme.spacings.main} * ${SnowSpacingMap[size] * 1.25});`,
        },
      },
    })),
  ],
}));
