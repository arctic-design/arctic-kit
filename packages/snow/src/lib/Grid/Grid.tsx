'use client';
import { styled } from '@pigment-css/react';
import { HTMLAttributes, PropsWithChildren, useEffect, useState } from 'react';
import { GridContext } from './GridContext';

// A grid component using the following css as inspiration.
// https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
const Container = styled.div<{ gutterWidth?: number }>({
  boxSizing: 'border-box',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: '8px',
  paddingLeft: '8px',
  width: '100%',
});

export type GridProviderProps = {
  spacing?: number;
  gutterWidth?: number;
} & HTMLAttributes<HTMLDivElement>;

function Grid(props: PropsWithChildren<GridProviderProps>) {
  const { children, spacing = 0, gutterWidth = 0, ...restProps } = props;
  const [gridSpacing, setGridSpacing] = useState<number>();
  const [gutter, setGutter] = useState<number>(0);

  useEffect(() => {
    setGridSpacing(spacing);
  }, [spacing]);

  useEffect(() => {
    if (gutterWidth) {
      setGutter(gutterWidth);
    }
  }, [gutterWidth]);

  return (
    <GridContext.Provider
      value={{
        spacing: gridSpacing,
        gutterWidth: gutter,
        gutterCompensation: gutter * 0.5 * -1,
        halfGutterWidth: gutter * 0.5,
      }}
    >
      <Container gutterWidth={gutter} {...restProps}>
        {children}
      </Container>
    </GridContext.Provider>
  );
}

export { Grid };
