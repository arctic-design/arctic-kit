import { Box } from '@arctic-kit/snow';
import { PropsWithChildren } from 'react';

export function ControlContainer({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 8,
        gap: 12,
      }}
    >
      {children}
    </Box>
  );
}
