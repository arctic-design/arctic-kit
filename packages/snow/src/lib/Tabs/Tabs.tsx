import { styled } from '@pigment-css/react';
import { PropsWithChildren, useId } from 'react';
import { SnowColor, SnowColorValues } from '../types';
import { SnowThemeArgs } from '../../core';

export type TabsProps = {
  fullWidth?: boolean;
  color?: SnowColor;
  id?: string;
};

const Container = styled.div({
  width: '100%',
  padding: '2px 0',
});

const Nav = styled.div<TabsProps>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    borderRadius: '10px',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    borderBottom: `0.5px solid ${theme.colors.grey[100]}`,
    height: '44px',
    display: 'flex',

    ul: {
      listStyle: 'none',
      padding: 4,
      margin: '0 !important',
      display: 'flex',
      width: 'auto',
    },

    li: {
      flex: 'auto',
    },

    '.background': {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      width: '300px',
      background: theme.colors.neutral[0],
    },

    '.add-item': {
      width: '30px',
      height: '30px',
      background: '#eee',
      borderRadius: '50%',
      border: '0',
      cursor: 'pointer',
      alignSelf: 'center',

      '&:disabled': {
        opacity: '0.4',
        cursor: 'default',
        pointerEvents: 'none',
      },
    },

    '.underline': {
      background: theme.colors.primary.main,
    },
    variants: [
      {
        props: {
          fullWidth: true,
        },
        style: {
          ul: {
            width: '100%',
          },
          li: {
            flex: 1,
          },
        },
      },
      ...SnowColorValues.map((color) => ({
        props: { color },
        style: {
          '.underline': {
            background: theme.colors[color].main,
          },
        },
      })),
    ],
  })
);

export function Tabs(props: PropsWithChildren<TabsProps>) {
  const { children, fullWidth, color, id } = props;

  const uniqueId = useId();
  const controlId = id || uniqueId;

  return (
    <Container
      data-testid={`${controlId}-container`}
      id={`${controlId}-container`}
    >
      <Nav
        color={color}
        fullWidth={fullWidth}
        data-testid={`${controlId}-tab-nav`}
        id={`${controlId}-tab-nav`}
      >
        <ul data-testid={`${controlId}-ul`} id={`${controlId}-ul`}>
          {children}
        </ul>
      </Nav>
    </Container>
  );
}
