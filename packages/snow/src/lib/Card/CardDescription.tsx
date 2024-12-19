import { styled } from '@pigment-css/react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

const Container = styled.div({
  lineHeight: '20px',
});

export type CardDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
export const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>(
  function CardDescription({ children, className, ...props }, ref) {
    return (
      <Container
        ref={ref}
        className={clsx('description', className)}
        {...props}
      >
        {children}
      </Container>
    );
  }
);

CardDescription.displayName = 'CardDescription';
