'use client';

import { Box, Button } from '@arctic-kit/snow';

export function ToggleColorScheme() {
  return (
    <Box sx={{ padding: 16, margin: 24 }}>
      <Button
        onClick={() => {
          document.documentElement.classList.toggle('theme-dark');
        }}
      >
        Toggle dark color scheme
      </Button>
    </Box>
  );
}
