import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';

const HeaderCloseButton = styled.button(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    appearance: 'none',
    backgroundColor: 'transparent',
    border: '0',
    color: 'inherit',
    cursor: 'pointer',
    textAlign: 'left',
    textDecoration: 'none',
    borderRadius: '50%',
    width: '2rem',
    height: '2rem',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: theme.colors.grey[50],
    },
    '&:disabled': {
      cursor: 'not-allowed',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    svg: {
      width: 20,
    },
  })
);
export { HeaderCloseButton };
