import { styled, SxProp } from '@pigment-css/react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

const ContainerWrapper = styled.div<{ sx?: SxProp }>({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: 12,
});

const Container = styled.div<{ sx?: SxProp }>({
  display: 'grid',
  gap: 4,
  flex: 1,
});

export type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  sx?: SxProp;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader({ children, className, prefix, suffix, ...props }, ref) {
    return (
      <ContainerWrapper ref={ref} className={clsx('header', className)}>
        {prefix}
        <Container {...props}>{children}</Container>
        {suffix}
      </ContainerWrapper>
    );
  }
);

CardHeader.displayName = 'CardHeader';
