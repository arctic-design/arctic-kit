import { styled, css } from '@pigment-css/react';
import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

import { SnowSize } from '../types';
import { SnowFontSizes } from '../constants';
import { SnowThemeArgs } from '../../core';

const typographyStyles = css(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  display: 'inline-block',
  fontFamily: theme.font.family.base,
  fontWeight: theme.font.weight.regular,
  fontStyle: 'normal',
  lineHeight: 'normal',
  "&[aria-disabled='true']": {
    color: theme.colors.grey[500],
  },
  "&[aria-readonly='true']": {
    cursor: 'default',
    color: theme.colors.grey[900],
  },
}));

const TypographyComponent = styled.div<{ size?: SnowSize }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    '&.h3': {
      fontSize: `${SnowFontSizes.medium * 0.875}px`,
    },
    '&.label': {
      color: theme.colors.neutral[1000],
      fontSize: `${SnowFontSizes.medium * 0.875}px`,

      lineHeight: '150%',
    },
    fontSize: `${SnowFontSizes.medium * 0.875}px`,
    variants: [
      ...['small', 'medium', 'large'].map((size) => ({
        props: { size: size as SnowSize },
        style: {
          '&.label, &.h3': {
            fontSize: `${SnowFontSizes[size as SnowSize] * 0.875}px`,
          },
        },
      })),
    ],
  })
);

export type TypographyProps = {
  as?: React.ElementType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  size?: SnowSize;
  htmlFor?: string;
  sx?: CSSProperties;
  id?: string;
  fontWeight?: number;
  'aria-disabled'?: boolean;
  'aria-readonly'?: boolean;
};

export function Typography({
  children,
  as = 'span',
  htmlFor,
  id,
  size,

  ...otherProps
}: PropsWithChildren<TypographyProps & HTMLAttributes<HTMLElement>>) {
  return (
    <TypographyComponent
      className={`${typographyStyles} ${as}`}
      as={as}
      htmlFor={htmlFor}
      id={id}
      size={size}
      {...otherProps}
    >
      {children}
    </TypographyComponent>
  );
}
