import { styled } from '@pigment-css/react';
import { SnowColor } from '../types';
import { SnowThemeArgs } from '../../core';
import { PropsWithChildren, forwardRef } from 'react';

export type HelperTextProps = {
  color?: SnowColor;
  id?: string;
};

const Container = styled.span<{ color?: SnowColor }>(
  ({ theme }: SnowThemeArgs) => ({
    paddingLeft: 2,
    fontSize: theme.font.size[25],
    lineHeight: '18px',
    height: 18,
    variants: [
      'primary',
      'secondary',
      'success',
      'error',
      'warning',
      'info',
    ].map((variantColor) => ({
      props: { color: variantColor as SnowColor },
      style: { color: theme.colors[variantColor as SnowColor].main },
    })),
  })
);

export const HelperText = forwardRef<
  HTMLSpanElement,
  PropsWithChildren<HelperTextProps>
>(function HelperText({ color = 'error', children, id }, ref) {
  return (
    <Container id={id} ref={ref} color={color}>
      {children}
    </Container>
  );
});
