import { styled } from '@pigment-css/react';
import { PropsWithChildren, forwardRef } from 'react';
import { DefaultSnowProps, SnowColorValues, SnowSizeValues } from '../types';
import { SnowHeights } from '../constants';
import { Loader } from '../Loader';
import { SnowThemeArgs } from '../../core';

const noOp = () => {
  return '';
};

export type ChipProps = DefaultSnowProps & {
  selected?: boolean;
  onClick?: () => void;
  loading?: boolean;
  readOnly?: boolean;
  interactive?: boolean;
};

const ChipContainer = styled.button<ChipProps>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    fontSize: theme.font.size[100],
    fontWeight: theme.font.weight.medium,
    fontStyle: 'normal',
    lineHeight: 'normal',

    height: SnowHeights.medium,
    display: 'inline-flex',
    paddingInline: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    outline: 'none',
    gap: 8,
    borderRadius: 100,
    border: `1px solid ${theme.colors.grey[400]}`,
    borderColor: 'transparent',
    backgroundColor: theme.colors.grey[300],
    color: theme.colors.grey[900],
    cursor: 'inherit',
    '&:disabled': {
      backgroundColor: theme.colors.grey[200],
      color: theme.colors.grey[600],
      border: 'none',
    },
    variants: [
      ...SnowSizeValues.map((size) => ({
        props: { size },
        style: {
          height: SnowHeights[size],
        },
      })),
      ...SnowColorValues.map((color) => ({
        props: { color },
        style: {
          backgroundColor: theme.colors[color].main,
          color: theme.colors.white,
          '&:disabled': {
            backgroundColor: theme.colors[color][300],
            color: theme.colors.grey[200],
          },
          "&[aria-readonly='true']": {
            backgroundColor: theme.colors[color][400],
            color: theme.colors.grey[200],
            '&:hover': {
              cursor: 'inherit',
            },
          },
          "&[data-interactive='true']": {
            color: theme.colors.grey[900],
            backgroundColor: theme.colors.grey[300],
            '&:hover': {
              '&:not(:disabled)': {
                backgroundColor: theme.colors.grey[400],
                cursor: 'pointer',
              },
            },
            '&:disabled': {
              color: theme.colors.grey[700],
            },
            "&[aria-readonly='true']": {
              backgroundColor: theme.colors.grey[400],
              color: theme.colors.grey[900],
              '&:hover': {
                cursor: 'inherit',
              },
            },

            "&[aria-selected='true']": {
              backgroundColor: theme.colors[color].main,
              color: theme.colors.white,
              '&:hover': {
                '&:not(:disabled)': {
                  backgroundColor: theme.colors[color][700],
                  cursor: 'pointer',
                },
              },
              '&:disabled': {
                color: theme.colors[color][200],
              },

              "&[aria-readonly='true']": {
                backgroundColor: theme.colors[color][400],
                color: theme.colors.white,
                '&:hover': {
                  backgroundColor: theme.colors[color][400],
                  color: theme.colors.white,
                  cursor: 'inherit',
                },
              },
            },
          },
        },
      })),
    ],
  })
);
const Chip = forwardRef<HTMLButtonElement, PropsWithChildren<ChipProps>>(
  (
    {
      interactive = false,
      children,
      disabled = false,
      size = 'medium',
      selected = false,
      id = 'chip',
      loading,
      readOnly = false,
      onClick,
      color,
    }: PropsWithChildren<ChipProps>,
    ref
  ) => (
    <ChipContainer
      ref={ref}
      size={size}
      disabled={disabled}
      selected={selected}
      aria-selected={selected}
      aria-disabled={disabled}
      data-interactive={interactive}
      id={id}
      data-testid={id}
      aria-readonly={readOnly}
      readOnly={readOnly}
      onClick={!readOnly && !disabled ? onClick : noOp}
      color={color}
    >
      {loading && <Loader size="extraSmall" disabled={loading} />}
      {children}
    </ChipContainer>
  )
);
Chip.displayName = 'Chip';
export { Chip };
