import { styled } from '@pigment-css/react';
import { Stack } from '../Layout';
import { SnowThemeArgs } from '../../core';

const Container = styled(Stack)<{ selected?: boolean; clickable?: boolean }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    flexWrap: 'nowrap',
    transition: 'background 0.3s ease, color 0.3s ease',
    variants: [
      {
        props: { selected: true },
        style: {
          backgroundColor: theme.colors.grey[200],
        },
      },
      {
        props: { clickable: true },
        style: {
          cursor: 'pointer',
          borderRadius: theme.border.radius.main,
          padding: '8px 12px',
          flex: 1,

          '.clickable': {
            flex: 1,
          },
        },
      },

      {
        props: { clickable: true, selected: false },
        style: {
          '&:hover': {
            backgroundColor: theme.colors.grey[100],
          },
        },
      },
    ],
  })
);

export type ListItemProps = {
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  clickable?: boolean;
};
export const ListItem = ({
  children,
  prefix,
  suffix,
  selected = false,
  onClick,
  clickable = false,
}: ListItemProps) => {
  const itemClickable = !!onClick || clickable;
  return (
    <Container
      justifyBetween
      direction="horizontal"
      spacing={6}
      selected={selected}
      clickable={itemClickable}
      onClick={onClick}
    >
      <Stack
        direction="horizontal"
        inline
        spacing={2}
        sx={{
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flex: 1,
        }}
      >
        {prefix}
        <Stack spacing={1} className={itemClickable ? 'clickable' : undefined}>
          {children}
        </Stack>
      </Stack>
      {suffix}
    </Container>
  );
};
