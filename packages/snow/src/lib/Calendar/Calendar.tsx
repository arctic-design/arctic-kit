'use client';
import { useState, useEffect, useCallback } from 'react';
import { MonthHeader } from './MonthHeader';
import { WeekHeader } from './WeekHeader';
import { Weeks } from './Weeks';
import DateUtilities from './DateUtilities';
import { Paper } from '../Paper';
import { CalendarContainer } from './StyledElements';

export type CalendarProps = {
  className?: string;
  style?: React.CSSProperties;
  hasBorder?: boolean;
  selected?: Date;
  onSelect: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  onYearChange?: (year: number) => void;
  onMonthChange?: (month: number) => void;
  id?: string;
};

function Calendar({
  className,
  style,
  hasBorder = true,
  id = 'calendar',
  onYearChange,
  onMonthChange,
  selected,
  minDate,
  maxDate,
  onSelect,
}: CalendarProps) {
  const [calendarView, setCalendarView] = useState(new Date());
  useEffect(() => {
    if (selected) {
      setCalendarView(DateUtilities.clone(selected));
    }
  }, [selected]);

  const onMove = useCallback((view: Date) => {
    setCalendarView(view);
  }, []);

  const onYearChangeHandler = useCallback(
    (year: number) => {
      const newView = new Date(year, calendarView.getMonth());

      setCalendarView(newView);

      onYearChange && onYearChange(year);
    },
    [onYearChange, calendarView]
  );
  const onMonthChangeHandler = useCallback(
    (month: number) => {
      const newView = new Date(calendarView.getFullYear(), month);

      setCalendarView(newView);

      onMonthChange && onMonthChange(month);
    },
    [onMonthChange, calendarView]
  );

  return (
    <CalendarContainer
      id={`${id}-container`}
      data-testid={`${id}-container`}
      className={className}
      style={style}
    >
      <Paper
        variant={hasBorder ? 'outlined' : 'elevation'}
        elevation={hasBorder ? 1 : 0}
      >
        <div id={`${id}-header`} data-testid={`${id}-header`}>
          <MonthHeader
            view={calendarView}
            onMove={onMove}
            enabled={true}
            minDate={minDate}
            maxDate={maxDate}
            onYearChange={onYearChangeHandler}
            onMonthChange={onMonthChangeHandler}
          />
          <WeekHeader />
        </div>
        <Weeks
          view={calendarView}
          selected={selected}
          onSelect={onSelect}
          minDate={minDate}
          maxDate={maxDate}
        />
      </Paper>
    </CalendarContainer>
  );
}

export { Calendar };
