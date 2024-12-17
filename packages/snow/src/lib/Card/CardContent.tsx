import { styled } from '@pigment-css/react';
import { forwardRef } from 'react';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: 24,
  paddingTop: 0,
});

export type CardContentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  function CardContent({ children, ...props }, ref) {
    return (
      <Container ref={ref} {...props}>
        {children}
      </Container>
    );
  }
);

CardContent.displayName = 'CardContent';
