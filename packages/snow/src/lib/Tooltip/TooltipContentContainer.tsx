import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';
import { FloatingArrow as FloatingUIArrow } from '@floating-ui/react';

export const TooltipContentContainer = styled.div(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    backgroundColor: theme.colors.info[900],
    color: theme.colors.neutral[0],
    borderRadius: 4,
    boxSizing: 'border-box',
    width: 'max-content',
    maxWidth: 'calc(100vw - 10px)',
    display: 'flex',
    padding: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    fontFamily: theme.font.family.base,
    fontSize: theme.font.size[25],
    fontStyle: 'normal',
    fontWeight: theme.font.weight.regular,
    lineHeight: 'normal',
  })
);

export const FloatingArrow = styled(FloatingUIArrow)(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fill: theme.colors.info[900],
  })
);
