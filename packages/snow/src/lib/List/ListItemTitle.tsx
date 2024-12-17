import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';
import { SnowSize } from '../types';

export type ListItemTitleProps = {
  fontSize?: SnowSize;
  children: React.ReactNode;
};
const ListItemTitleContainer = styled.div<Omit<ListItemTitleProps, 'children'>>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontSize: theme.font.size[50],
    fontWeight: theme.font.weight.medium,
    variants: [
      {
        props: { fontSize: 'small' },
        style: {
          fontSize: theme.font.size[50],
        },
      },
      {
        props: { fontSize: 'medium' },
        style: {
          fontSize: theme.font.size[100],
        },
      },
      {
        props: { fontSize: 'large' },
        style: {
          fontSize: theme.font.size[200],
        },
      },
    ],
  })
);
export function ListItemTitle({ children, fontSize }: ListItemTitleProps) {
  return (
    <ListItemTitleContainer fontSize={fontSize}>
      {children}
    </ListItemTitleContainer>
  );
}
