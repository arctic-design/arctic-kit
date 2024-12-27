import { styled } from '@pigment-css/react';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { Row } from './GridRow';

// A grid component using the following css as inspiration.
// https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
const Container = styled.div<{
  gutterCompensation?: number;
  spacing?: number;
}>({
  boxSizing: 'border-box',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: '8px',
  paddingLeft: '8px',
  width: '100%',

  [`& ${Row}`]: {
    marginLeft: ({ gutterCompensation }) =>
      gutterCompensation !== undefined ? gutterCompensation : -8,
    marginRight: ({ gutterCompensation }) =>
      gutterCompensation !== undefined ? gutterCompensation : -8,
    [`.grid-col`]: {
      padding: ({ spacing }) => (spacing !== 0 && spacing ? spacing * 4 : 0),
    },
  },
});

export type GridProviderProps = {
  spacing?: number;
  gutterWidth?: number;
} & HTMLAttributes<HTMLDivElement>;

function Grid(props: PropsWithChildren<GridProviderProps>) {
  const {
    children,
    spacing = 0,
    gutterWidth: gutter = 0,
    ...restProps
  } = props;

  const gutterCompensation = gutter * 0.5 * -1;

  return (
    <Container
      gutterCompensation={gutterCompensation}
      spacing={spacing}
      {...restProps}
    >
      {children}
    </Container>
  );
}

export { Grid };
