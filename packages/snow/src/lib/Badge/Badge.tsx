import { PropsWithChildren, forwardRef } from 'react';
import { SnowColor, SnowColorValues } from '../types';
import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';

export type BadgeProps = PropsWithChildren<{
  color?: SnowColor;
  id?: string;
}>;

const Container = styled.span<BadgeProps>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 4,
    fontFamily: theme.font.family.base,
    fontSize: theme.font.size[100],
    fontStyle: 'normal',
    fontWeight: theme.font.weight.semibold,
    lineHeight: 'normal',
    padding: '2px 4px',
    color: theme.colors.neutral[0],
    backgroundColor: theme.colors.primary.main,
    variants: SnowColorValues.map((color) => ({
      props: { color },
      style: {
        backgroundColor: theme.colors[color].main,
      },
    })),
  })
);

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (props: BadgeProps, ref) => {
    const { children, color = 'primary', id = 'badge' } = props;
    return (
      <Container ref={ref} color={color} id={id} data-testid={id}>
        {children}
      </Container>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
