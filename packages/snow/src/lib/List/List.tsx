import { Stack } from '../Layout';
import { LayoutSpacingType } from '../Layout/types';
export type ListProps = {
  spacing?: LayoutSpacingType;
  children: React.ReactNode;
};
export const List = ({ spacing = 6, children }: ListProps) => {
  return <Stack spacing={spacing}>{children}</Stack>;
};
