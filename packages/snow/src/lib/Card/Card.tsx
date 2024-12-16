import { forwardRef } from 'react';
import { Paper, PaperProps } from '../Paper';
import { styled, SxProp } from '@pigment-css/react';

const CardPaper = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export type CardProps = Omit<PaperProps, 'noPadding'> & {
  children: React.ReactNode;
  sx?: SxProp;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, ...props }: CardProps,
  ref
) {
  return (
    <CardPaper ref={ref} variant="outlined" {...props} noPadding>
      {children}
    </CardPaper>
  );
});

Card.displayName = 'Card';
