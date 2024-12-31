import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';
import { FloatingArrow as FloatingUIArrow } from '@floating-ui/react';

export const TooltipContentContainer = styled.div(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    backgroundColor: theme.colors.grey[900],
    color: theme.colors.grey[50],
    borderRadius: theme.border.radius.main,
    boxSizing: 'border-box',
    width: 'max-content',
    maxWidth: 'calc(100vw - 10px)',
    display: 'flex',
    paddingInline: 8,
    paddingBlock: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    fontFamily: theme.font.family.base,
    fontSize: theme.font.size[25],
    fontStyle: 'normal',
    fontWeight: theme.font.weight.regular,
    lineHeight: '1rem',
    outline: 0,
  })
);

export const FloatingArrow = styled(FloatingUIArrow)(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fill: theme.colors.grey[900],
  })
);
