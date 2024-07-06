import {
  CSSProperties,
  PropsWithChildren,
  forwardRef,
  ForwardedRef,
} from 'react';
import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';

export type BoxProps = {
  as?: React.ElementType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  'data-testid'?: string;
  'aria-labelledby'?: string; // to fix tooltip passing these props
  'aria-describedby'?: string; // to fix tooltip passing these props
  'data-state'?: string; // to fix tooltip passing these props
  sx?: CSSProperties;
} & React.HTMLProps<HTMLElement>;

const Root = styled('div')(({ theme }: SnowThemeArgs) => ({
  fontFamily: theme.font.family.base,
}));

const Box = forwardRef(
  (
    {
      children,
      className,
      as = 'div',
      'data-testid': testId = 'box-component',
      id = 'box-component',
      ...props
    }: PropsWithChildren<BoxProps>,
    ref: ForwardedRef<HTMLElement>
  ) => {
    const dataTestId = id || testId;

    return (
      <Root
        ref={ref}
        className={className}
        data-testid={dataTestId}
        id={id}
        {...props}
        as={as}
      >
        {children}
      </Root>
    );
  }
);

Box.displayName = 'Box';

export { Box };
