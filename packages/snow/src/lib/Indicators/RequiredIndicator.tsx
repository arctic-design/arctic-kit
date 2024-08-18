import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';

const Container = styled.div(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  display: 'inline-block',
  color: theme.colors.error[500],
  fontWeight: theme.font.weight.bold,
  fontSize: theme.font.size[100],
}));
export function RequiredIndicator({ required }: { required?: boolean }) {
  if (!required) {
    return null;
  }
  return <Container>*</Container>;
}
