import { forwardRef } from 'react';
import { Paper, PaperProps } from '../Paper';
import { styled, SxProp } from '@pigment-css/react';
import { SnowSize, SnowSizeValues } from '../types';
import { CardPaddingMap } from './constants';
import { SnowThemeArgs } from '../../core';
export type CardProps = Omit<PaperProps, 'noPadding' | 'color'> & {
  children: React.ReactNode;
  sx?: SxProp;
  size?: SnowSize;
};

const CardPaper = styled(Paper)(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    display: 'flex',
    flexDirection: 'column',
    '.header, .content, .footer': {
      padding: CardPaddingMap.medium,
    },
    '.content, .footer': {
      paddingTop: 0,
    },

    '.title': {
      fontWeight: theme.font.weight.semibold,
      fontSize: theme.font.size[300],
    },
    '.description': {
      color: theme.colors.grey[700],
      fontSize: theme.font.size[50],
    },
    variants: [
      ...SnowSizeValues.map((size) => ({
        props: { size },
        style: {
          '.header, .content, .footer': {
            padding: CardPaddingMap[size],
          },
          '.content, .footer': {
            paddingTop: 0,
          },
          '.title': {
            fontSize:
              size === 'small'
                ? theme.font.size[200]
                : size === 'large'
                ? theme.font.size[400]
                : theme.font.size[300],
          },
          '.description': {
            fontSize:
              size === 'small'
                ? theme.font.size[25]
                : size === 'large'
                ? theme.font.size[100]
                : theme.font.size[50],
          },
        },
      })),
    ],
  })
);

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, size = 'medium', ...props }: CardProps,
  ref
) {
  return (
    <CardPaper ref={ref} size={size} variant="outlined" {...props} noPadding>
      {children}
    </CardPaper>
  );
});

Card.displayName = 'Card';
