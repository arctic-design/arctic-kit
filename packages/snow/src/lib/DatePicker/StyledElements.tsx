import { styled } from '@pigment-css/react';
import { SnowSize, SnowSizeValues } from '../types';
import { SnowThemeArgs } from '../../core';
import { SnowHeights } from '../constants';

export const Container = styled.div<{ inputsize?: SnowSize }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    padding: 7,
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: theme.shadow.main,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
    flexShrink: 0,
    borderRadius: 4,
    border: `1px solid ${theme.colors.grey[400]}`,
    background: theme.colors.neutral[0],
    color: theme.colors.neutral[1000],
    transition: 'border-color 0.3s ease',
    fontSize: theme.font.size[50],
    fontWeight: 400,
    lineHeight: 'normal',
    cursor: 'pointer',

    minWidth: 200,
    '&:focus': {
      borderColor: theme.colors.grey[900],
      outline: 'none',
    },
    '&:hover': {
      borderColor: theme.colors.grey[700],
    },
    '&:disabled': {
      backgroundColor: theme.colors.grey[100],
      color: theme.colors.grey[500],
      borderColor: theme.colors.grey[400],
      outline: 'none',
      cursor: 'not-allowed',
    },
    '&.error': {
      borderColor: theme.colors.error[500],
    },
    variants: [
      ...SnowSizeValues.map((size) => ({
        props: { inputsize: size },
        style: {
          height: SnowHeights[size],
        },
      })),
    ],
    svg: {
      width: 16,
    },
  })
);

export const PlaceHolderContainer = styled.span({
  opacity: 0.5,
});
