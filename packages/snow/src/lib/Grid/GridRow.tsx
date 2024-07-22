'use client';
import { styled } from '@pigment-css/react';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { useGrid } from './useGrid';

const Row = styled.div<{ gutterCompensation?: number }>({
  boxSizing: 'border-box',
  display: 'flex',
  flex: '0 1 auto',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginLeft: (props) =>
    props.gutterCompensation !== undefined ? props.gutterCompensation : -8,
  marginRight: (props) =>
    props.gutterCompensation !== undefined ? props.gutterCompensation : -8,
  '&.reverse': {
    flexDirection: 'row-reverse',
  },
});
type GridRowProps = HTMLAttributes<HTMLDivElement>;
export function GridRow({
  children,
  ...restProps
}: PropsWithChildren<GridRowProps>) {
  const { gutterCompensation } = useGrid();
  return (
    <Row gutterCompensation={gutterCompensation} {...restProps}>
      {children}
    </Row>
  );
}
