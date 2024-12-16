import { Stack } from '../Layout';

export type ListItemProps = {
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};
export const ListItem = ({ children, prefix, suffix }: ListItemProps) => {
  return (
    <Stack
      justifyBetween
      direction="horizontal"
      spacing={6}
      sx={{ flexWrap: 'nowrap' }}
    >
      <Stack direction="horizontal" inline spacing={2}>
        {prefix}
        <Stack spacing={1}>{children}</Stack>
      </Stack>
      {suffix}
    </Stack>
  );
};
