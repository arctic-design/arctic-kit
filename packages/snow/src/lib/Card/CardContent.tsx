import { styled, SxProp } from '@pigment-css/react';
import { forwardRef } from 'react';
import { SnowSize } from '../types';
import { clsx } from 'clsx';

const Container = styled.div<{ sx?: SxProp }>({
  display: 'flex',
  flexDirection: 'column',
});

export type CardContentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: SnowSize;
  sx?: SxProp;
};
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  function CardContent({ children, className, ...props }, ref) {
    return (
      <Container ref={ref} className={clsx('content', className)} {...props}>
        {children}
      </Container>
    );
  }
);

CardContent.displayName = 'CardContent';
