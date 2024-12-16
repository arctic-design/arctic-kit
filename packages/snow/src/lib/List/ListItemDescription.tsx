import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';
import { SnowSize } from '../types';

export type ListItemDescriptionProps = {
  fontSize?: SnowSize;
  children: React.ReactNode;
};
const Container = styled.div<Omit<ListItemDescriptionProps, 'children'>>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontSize: theme.font.size[25],
    color: theme.colors.grey[700],
    variants: [
      {
        props: { fontSize: 'small' },
        style: {
          fontSize: theme.font.size[25],
        },
      },
      {
        props: { fontSize: 'medium' },
        style: {
          fontSize: theme.font.size[50],
        },
      },
      {
        props: { fontSize: 'large' },
        style: {
          fontSize: theme.font.size[100],
        },
      },
    ],
  })
);
export function ListItemDescription({
  children,
  fontSize,
}: ListItemDescriptionProps) {
  return <Container fontSize={fontSize}>{children}</Container>;
}
