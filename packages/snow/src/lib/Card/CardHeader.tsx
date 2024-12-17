import { styled } from '@pigment-css/react';
import { forwardRef } from 'react';

const Container = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 24,
}));

export type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader({ children, ...props }, ref) {
    return (
      <Container ref={ref} {...props}>
        {children}
      </Container>
    );
  }
);

CardHeader.displayName = 'CardHeader';
