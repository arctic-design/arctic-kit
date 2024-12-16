import { styled } from '@pigment-css/react';
import { forwardRef } from 'react';
import { SnowThemeArgs } from '../../core';

const Container = styled.div(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  fontWeight: theme.font.weight.semibold,
  fontSize: theme.font.size[300],
  lineHeight: '24px',
}));

export type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(
  function CardTitle({ children, ...props }, ref) {
    return (
      <Container ref={ref} {...props}>
        {children}
      </Container>
    );
  }
);

CardTitle.displayName = 'CardTitle';
