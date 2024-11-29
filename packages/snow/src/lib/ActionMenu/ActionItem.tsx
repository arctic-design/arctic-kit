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

      svg: {
        color: theme.colors.neutral[1000],
      },

      '&:not(:disabled)': {
        '&.filled': {
          backgroundColor: theme.colors.primary[600],
          color: theme.colors.white,
          svg: {
            color: 'inherit',
          },
        },
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
      top: '-4px',
      left: '-4px',
      right: '-4px',
      bottom: '-4px',
      borderRadius: '6px',
      zIndex: 1,
      pointerEvents: 'none', // Ensure clicks pass through to the button
      borderStyle: 'solid',
      borderColor: theme.colors.grey[300],
    },
    "&[data-no-border='true']": {
      border: 'none',
    },

    '&.filled': {
      backgroundColor: theme.colors.primary.main,
      color: theme.colors.white,
      border: `1px solid ${theme.colors.primary.main}`,

      svg: {
        color: 'inherit',
      },

      '&:focus::after': {
        border: `1px solid ${theme.colors.primary[300]}`,
      },
    },
    '&.text': {
      border: 'none',
      '&:not(:disabled):hover, &:not(:disabled):focus': {
        backgroundColor: theme.colors.grey[100],
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.colors.grey[200],
      },

      svg: {
        color: 'inherit',
      },
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

          '&.filled': {
            backgroundColor: theme.colors[color].main,
            color: theme.colors.white,
            borderColor: theme.colors[color].main,
            svg: {
              color: 'inherit',
            },
            '&:focus::after': {
              border: `1px solid ${theme.colors[color][300]}`,
            },
          },
          '&.text': {
            border: 'none',
            backgroundColor: 'transparent',
            color: theme.colors[color][700],
            '&:not(:disabled):hover, &:not(:disabled):focus': {
              backgroundColor: theme.colors[color][50],
              color: theme.colors[color][900],
            },

            '&:not(:disabled):active': {
              backgroundColor: theme.colors[color][100],
              color: theme.colors[color][900],
            },

            svg: {
              color: 'inherit',
            },
          },
          '&[data-open], &:hover': {
            '&:not(:disabled)': {
              backgroundColor: theme.colors[color][50],
              svg: {
                color: theme.colors[color][700],
              },
              '&.filled': {
                backgroundColor: theme.colors[color][600],
                color: theme.colors.white,
                svg: {
                  color: 'inherit',
                },
              },
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
