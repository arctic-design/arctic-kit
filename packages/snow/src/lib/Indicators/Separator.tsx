import { styled, SxProp } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';

export type SeparatorProps = {
  sx?: SxProp;
};

const Container = styled.div<SeparatorProps>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.grey[400],
  })
);

export function Separator(props: SeparatorProps) {
  return <Container {...props} />;
}
