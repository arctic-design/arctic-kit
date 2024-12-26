import { PropsWithChildren, forwardRef } from 'react';
import { styled } from '@pigment-css/react';
import { SnowColor, SnowColorValues, SnowSize } from '../types';
import { SnowThemeArgs } from '../../core';

export type PaperVariant = 'elevation' | 'outlined';
export const PaperElevationValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
export type Elevation = (typeof PaperElevationValues)[number];
export type PaperProps = {
  elevation?: Elevation;
  square?: boolean;
  variant?: PaperVariant;
  style?: React.CSSProperties;
  className?: string;
  color?: SnowColor;
  onClick?: () => void;
  id?: string;
  noPadding?: boolean;
  size?: SnowSize;
  selected?: boolean;
};

type StyledBoxProps = Omit<
  PaperProps,
  'style' | 'className' | 'onClick' | 'id' | 'selected'
>;

const StyledBox = styled.div<StyledBoxProps>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    borderRadius: theme.border.radius.main,
    padding: '0.75rem',
    cursor: 'default',
    color: theme.colors.neutral[1000],
    backgroundColor: theme.colors.neutral[0],
    transition: 'background 0.3s ease, border-color 0.3s ease',
    "&[data-clickable='true']": {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.colors.grey[50],
      },
    },
    "&[data-selected='true']": {
      backgroundColor: theme.colors.grey[100],
      borderColor: theme.colors.grey[700],
    },
    variants: [
      {
        props: { variant: 'outlined' },
        style: {
          boxShadow: 'none',
          border: `${theme.border.width.main} solid ${theme.colors.grey[400]}`,
          backgroundColor: theme.colors.neutral[0],
        },
      },
      ...SnowColorValues.map((color) => ({
        props: { color },
        style: {
          boxShadow: 'none',
          border: `${theme.border.width.main} solid ${theme.colors[color][300]}`,
          backgroundColor: theme.colors[color].main,
          color: theme.colors.white,
          "&[data-clickable='true']": {
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: theme.colors[color][50],
            },
          },
          "&[data-selected='true']": {
            backgroundColor: theme.colors[color][100],
            borderColor: theme.colors[color][700],
          },
        },
      })),

      ...PaperElevationValues.map((elevation) => ({
        props: { elevation },
        style: {
          "&[data-variant='elevation']": {
            boxShadow: `0px ${elevation * 1}px ${elevation * 2}px ${
              theme.colors.grey[400]
            }`,
          },
        },
      })),
      {
        props: { square: true },
        style: {
          borderRadius: 0,
        },
      },
      {
        props: { noPadding: true },
        style: {
          padding: 0,
        },
      },
    ],
  })
);

export const Paper = forwardRef<HTMLDivElement, PropsWithChildren<PaperProps>>(
  function Paper(props, ref) {
    const {
      children,
      style = {},
      elevation = 1,
      variant = 'elevation',
      square = false,
      color,
      onClick,
      selected = undefined,
      ...rest
    } = props;
    return (
      <StyledBox
        ref={ref}
        onClick={onClick}
        elevation={elevation}
        data-variant={variant}
        data-clickable={!!onClick}
        data-selected={!!selected}
        variant={variant}
        square={square}
        color={color}
        style={style}
        {...rest}
      >
        {children}
      </StyledBox>
    );
  }
);

Paper.displayName = 'Paper';
