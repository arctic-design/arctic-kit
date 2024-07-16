import { styled } from '@pigment-css/react';

const Container = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.colors.error[500]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size[100]};
`;
export function RequiredIndicator({ required }: { required?: boolean }) {
  if (!required) {
    return null;
  }
  return <Container>*</Container>;
}
