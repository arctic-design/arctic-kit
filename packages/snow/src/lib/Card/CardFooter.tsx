import { styled } from '@pigment-css/react';
import { forwardRef } from 'react';

const Container = styled.div(() => ({
  padding: 24,
  paddingTop: 0,
}));

export type CardFooterProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  function CardFooter({ children, ...props }, ref) {
    return (
      <Container ref={ref} {...props}>
        {children}
      </Container>
    );
  }
);

CardFooter.displayName = 'CardFooter';
