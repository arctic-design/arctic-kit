import { styled, SxProp } from '@pigment-css/react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

const Container = styled.div<{ sx?: SxProp }>({});

export type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  sx?: SxProp;
};
export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(
  function CardTitle({ children, className, ...props }, ref) {
    return (
      <Container ref={ref} className={clsx('title', className)} {...props}>
        {children}
      </Container>
    );
  }
);

CardTitle.displayName = 'CardTitle';
