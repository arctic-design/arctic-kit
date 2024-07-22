import { styled } from '@pigment-css/react';
import { PropsWithChildren, useId } from 'react';
import { SnowThemeArgs } from '../../core';

const Container = styled.div(({ theme }: SnowThemeArgs) => ({
  fontFamily: theme.font.family.base,
  padding: 8,
  flexGrow: 1,
  userSelect: 'none',
  width: '100%',
}));

export type TabPanelsProps = {
  style?: React.CSSProperties;
  className?: string;
  id?: string;
};

export function TabPanels(props: PropsWithChildren<TabPanelsProps>) {
  const { children, id, ...otherProps } = props;
  const uniqueId = useId();
  const tabPanelsId = id || uniqueId;
  return (
    <Container id={tabPanelsId} data-testid={tabPanelsId} {...otherProps}>
      {children}
    </Container>
  );
}
