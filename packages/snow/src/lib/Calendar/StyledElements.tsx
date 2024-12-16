import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';
import { IconButton } from '../IconButton';

export const CalendarContainer = styled.div(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    display: 'flex',
    maxWidth: 280,
    minWidth: 250,
    minHeight: 305,
    overflowX: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: theme.font.family.base,
    fontStyle: 'normal',
    lineHeight: 'normal',
  })
);

export const MonthHeaderContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 4,
});

export const ArrowButton = styled(IconButton)(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    outline: 'none',
    width: 28,
    height: 28,
    '&:focus': {
      '&:not(:disabled)': {
        outline: 'none',
      },
    },
  })
);

export const MonthYearView = styled.span(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontSize: theme.font.size[100],
    fontStyle: 'normal',
    fontWeight: theme.font.weight.medium,
    lineHeight: 'normal',
  })
);

export const DayButton = styled.button(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    backgroundColor: theme.colors.neutral[0],
    borderRadius: 6,
    color: theme.colors.neutral[1000],
    outline: 'none',

    '&:hover': {
      backgroundColor: theme.colors.grey[100],
      cursor: 'pointer',
    },
    '&.sameDay': {
      color: theme.colors.primary.main,
      fontWeight: theme.font.weight.bold,
    },
    '&.selected': {
      backgroundColor: theme.colors.primary.main,
      color: theme.colors.white,
    },
    '&.otherMonth': {
      color: '#AAA',
    },

    '&:disabled': {
      color: '#E0E0E0',
    },
  })
);
