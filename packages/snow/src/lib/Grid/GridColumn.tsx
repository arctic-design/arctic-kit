'use client';
import { styled } from '@pigment-css/react';
import { mq } from './utils';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { useGrid } from './useGrid';
type DefaultColProps = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};
type ColProps = DefaultColProps & {
  gutterWidth?: number;
  halfGutterWidth?: number;
  spacing?: number;
};

const GridSizeMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Col = styled.div<ColProps>({
  boxSizing: 'border-box',
  flex: '0 0 auto',
  flexBasis: '100%',
  padding: (props: ColProps) =>
    props.spacing !== 0 && props.spacing ? props.spacing * 4 : 0,
  maxWidth: '100%',
  flexGrow: 1,

  '&.reverse': {
    flexDirection: 'column-reverse',
  },

  variants: [
    ...GridSizeMap.map((xs) => ({
      props: { xs },
      style: {
        flexBasis: `calc(${(100 / 12) * xs}%)`,
        maxWidth: `calc(${(100 / 12) * xs}%)`,
      },
    })),
    ...GridSizeMap.map((sm) => ({
      props: { sm },
      style: {
        [`${mq('sm')}`]: {
          flexBasis: `calc(${(100 / 12) * sm}%)`,
          maxWidth: `calc(${(100 / 12) * sm}%)`,
        },
      },
    })),
    ...GridSizeMap.map((md) => ({
      props: { md },
      style: {
        [`${mq('md')}`]: {
          flexBasis: `calc(${(100 / 12) * md}%)`,
          maxWidth: `calc(${(100 / 12) * md}%)`,
        },
      },
    })),
    ...GridSizeMap.map((lg) => ({
      props: { lg },
      style: {
        [`${mq('lg')}`]: {
          flexBasis: `calc(${(100 / 12) * lg}%)`,
          maxWidth: `calc(${(100 / 12) * lg}%)`,
        },
      },
    })),
    ...GridSizeMap.map((xl) => ({
      props: { xl },
      style: {
        [`${mq('xl')}`]: {
          flexBasis: `calc(${(100 / 12) * xl}%)`,
          maxWidth: `calc(${(100 / 12) * xl}%)`,
        },
      },
    })),
    ...GridSizeMap.map((xxl) => ({
      props: { xxl },
      style: {
        [`${mq('xxl')}`]: {
          flexBasis: `calc(${(100 / 12) * xxl}%)`,
          maxWidth: `calc(${(100 / 12) * xxl}%)`,
        },
      },
    })),
  ],
});

type GridColumnProps = DefaultColProps & HTMLAttributes<HTMLDivElement>;
export function GridColumn({
  children,
  ...restProps
}: PropsWithChildren<GridColumnProps>) {
  const { gutterWidth, halfGutterWidth, spacing } = useGrid();
  return (
    <Col
      gutterWidth={gutterWidth}
      halfGutterWidth={halfGutterWidth}
      spacing={spacing}
      {...restProps}
    >
      {children}
    </Col>
  );
}
