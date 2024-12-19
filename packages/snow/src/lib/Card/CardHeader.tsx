import { styled, SxProp } from '@pigment-css/react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

const Container = styled.div<{ sx?: SxProp }>({
  display: 'flex',
  flexDirection: 'column',
});

export type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  sx?: SxProp;
};
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader({ children, className, ...props }, ref) {
    return (
      <Container ref={ref} className={clsx('header', className)} {...props}>
        {children}
      </Container>
    );
  }
);

CardHeader.displayName = 'CardHeader';
