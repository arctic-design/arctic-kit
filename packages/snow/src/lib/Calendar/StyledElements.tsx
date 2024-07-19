import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';

export const CalendarContainer = styled.div(({ theme }: SnowThemeArgs) => ({
  display: 'flex',
  maxWidth: 300,
  minHeight: 305,
  overflowX: 'hidden',
  flexDirection: 'column',
  justifyContent: 'center',
  fontFamily: theme.font.family.base,
  fontStyle: 'normal',
  lineHeight: 'normal',
}));

export const MonthHeaderContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 4,
});

export const ArrowButton = styled.button(({ theme }: SnowThemeArgs) => ({
  padding: '0.25rem 0.5rem',
  height: '1.5rem',
  width: 'auto',
  borderRadius: '0.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.neutral[0],
  border: 'none',
  '&:hover': {
    backgroundColor: theme.colors.grey[100],
    cursor: 'pointer',
  },
  svg: {
    width: 20,
  },
}));

export const MonthYearView = styled.span(({ theme }: SnowThemeArgs) => ({
  fontSize: theme.font.size[100],
  fontStyle: 'normal',
  fontWeight: theme.font.weight.medium,
  lineHeight: 'normal',
}));

export const DayButton = styled.button(({ theme }: SnowThemeArgs) => ({
  fontFamily: theme.font.family.base,
  backgroundColor: theme.colors.neutral[0],
  borderRadius: 6,
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
    color: theme.colors.neutral[0],
  },
  '&.otherMonth': {
    color: '#AAA',
  },

  '&:disabled': {
    color: '#E0E0E0',
  },
}));
