import { styled } from '@pigment-css/react';

const StyledButton = styled.button(({ theme }) => ({
  backgroundColor: theme.colors.primary.main,
  color: theme.colors.neutral[0],
}));

const StyledButton1 = styled.button`
  background-color: red;
  color: #fff;
`;

export type ButtonProps = {
  children: React.ReactNode;
};
export function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}
