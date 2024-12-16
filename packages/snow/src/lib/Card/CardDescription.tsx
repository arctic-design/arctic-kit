import { styled } from '@pigment-css/react';
import { forwardRef } from 'react';
import { SnowThemeArgs } from '../../core';

const Container = styled.div(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  color: theme.colors.grey[700],
  fontSize: theme.font.size[100],
  lineHeight: '20px',
}));

export type CardDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
export const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>(
  function CardDescription({ children, ...props }, ref) {
    return (
      <Container ref={ref} {...props}>
        {children}
      </Container>
    );
  }
);

CardDescription.displayName = 'CardDescription';
