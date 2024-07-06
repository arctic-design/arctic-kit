import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';

const StyledButton = styled.button(({ theme }: SnowThemeArgs) => ({
  backgroundColor: theme.colors.primary.main,
  color: theme.colors.neutral[0],
}));

export type ButtonProps = {
  children: React.ReactNode;
};
export function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}
