import { styled } from '@pigment-css/react';
import { ComponentPropsWithoutRef, PropsWithChildren, forwardRef } from 'react';
import {
  DefaultSnowProps,
  SnowColor,
  SnowColorValues,
  SnowSize,
  SnowSizeValues,
} from '../types';
import { SnowHeights } from '../constants';
import { SnowThemeArgs } from '../../core';

export const Container = styled.span<{
  rounded?: boolean;
  color?: SnowColor;
  size?: SnowSize;
  disabled?: boolean;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  fontFamily: theme.font.family.base,
  fontSize: theme.font.size[100],
  fontStyle: 'normal',
  fontWeight: theme.font.weight.regular,
  lineHeight: 'normal',
  cursor: 'pointer',
  color: theme.colors.neutral[1000],
  border: `1px solid ${theme.colors.grey[400]}`,
  borderRadius: theme.border.radius.main,
  backgroundColor: theme.colors.neutral[0],
  svg: {
    width: 16,
  },
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 'none',
  height: SnowHeights['medium'],
  width: SnowHeights['medium'],
  boxSizing: 'border-box',

  '&:hover': {
    '&:not(:disabled)': {
      cursor: 'pointer',
      backgroundColor: theme.colors.grey[50],
      borderColor: theme.colors.grey[700],
    },
  },

  "&[aria-disabled='true']": {
    backgroundColor: theme.colors.grey[100],
    borderColor: theme.colors.grey[400],
    cursor: 'default',
    svg: {
      color: theme.colors.grey[400],
    },
  },

  variants: [
    ...SnowColorValues.map((color) => ({
      props: { color },
      style: {
        border: `1px solid ${theme.colors[color][400]}`,
        svg: {
          color: theme.colors[color].main,
        },
        '&:hover': {
          '&:not(:disabled)': {
            borderColor: theme.colors[color][700],
            svg: {
              color: theme.colors[color][700],
            },
          },
        },
      },
    })),
    ...SnowSizeValues.map((size) => ({
      props: { size },
      style: {
        height: SnowHeights[size],
        width: SnowHeights[size],
      },
    })),
    {
      props: { rounded: true },
      style: {
        borderRadius: '50%',
      },
    },
    {
      props: { noBorder: true },
      style: {
        border: 'none',
      },
    },
    {
      props: { size: 'small' },
      style: {
        svg: {
          width: '14px !important',
        },
      },
    },
  ],
}));

export type IconButtonProps = DefaultSnowProps & {
  rounded?: boolean;
  noBorder?: boolean;
} & ComponentPropsWithoutRef<'span'>;

export const IconButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<IconButtonProps>
>(({ children, disabled, size = 'medium', ...props }, ref) => {
  return (
    <Container
      ref={ref}
      aria-label="icon-button"
      tabIndex={0}
      aria-disabled={disabled}
      disabled={disabled}
      size={size}
      role="button"
      {...props}
    >
      {children}
    </Container>
  );
});

IconButton.displayName = 'IconButton';
