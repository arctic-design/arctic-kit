import { styled } from '@pigment-css/react';
import { HTMLAttributes, PropsWithChildren } from 'react';

export const Row = styled.div<{ gutterCompensation?: number }>({
  boxSizing: 'border-box',
  display: 'flex',
  flex: '0 1 auto',
  flexDirection: 'row',
  flexWrap: 'wrap',
  '&.reverse': {
    flexDirection: 'row-reverse',
  },
});
type GridRowProps = HTMLAttributes<HTMLDivElement>;
export function GridRow({
  children,
  ...restProps
}: PropsWithChildren<GridRowProps>) {
  return <Row {...restProps}>{children}</Row>;
}
