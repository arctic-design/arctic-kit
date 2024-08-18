import { PropsWithChildren, forwardRef } from 'react';
import { styled } from '@pigment-css/react';
import { SnowColor, SnowColorValues } from '../types';
import { SnowThemeArgs } from '../../core';

export type PaperVariant = 'elevation' | 'outlined';
export const PaperElevationValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export type PaperProps = {
  elevation?: number;
  square?: boolean;
  variant?: PaperVariant;
  style?: React.CSSProperties;
  className?: string;
  color?: SnowColor;
  onClick?: () => void;
  id?: string;
};

type StyledBoxProps = {
  elevation?: number;
  variant?: PaperVariant;
  square?: boolean;
  color?: SnowColor;
};

const StyledBox = styled.div<StyledBoxProps>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    borderRadius: theme.border.radius.main,
    padding: '0.75rem',
    cursor: 'default',
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
          "&[data-variant='outlined']": {
            boxShadow: 'none',
            border: `${theme.border.width.main} solid ${theme.colors[color][300]}`,
            backgroundColor: theme.colors[color][50],
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
    ],
    "&[data-clickable='true']": {
      cursor: 'pointer',
    },
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
      ...rest
    } = props;
    return (
      <StyledBox
        ref={ref}
        onClick={onClick}
        elevation={elevation}
        data-variant={variant}
        data-clickable={!!onClick}
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
