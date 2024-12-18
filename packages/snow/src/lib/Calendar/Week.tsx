import { clsx } from 'clsx';
import DateUtilities from './DateUtilities';
import { dayStyles } from './commonStyles';
import { Box } from '../Box';
import { DayButton } from './StyledElements';
import { SnowColor } from '../types';

const isDisabled = (day: Date, minDate?: Date, maxDate?: Date) => {
  return (
    (minDate && DateUtilities.isBefore(day, minDate)) ||
    (maxDate && DateUtilities.isAfter(day, maxDate))
  );
};

function getDayStyles(day: Date, month: number, selected?: Date) {
  const dayStyleClasses = [];

  if (DateUtilities.isSameDay(day, new Date())) {
    dayStyleClasses.push('sameDay');
  }
  if (month !== day.getMonth()) {
    dayStyleClasses.push('otherMonth');
  }
  if (selected && DateUtilities.isSameDay(day, selected)) {
    dayStyleClasses.push('selected');
  }

  return dayStyleClasses;
}

type WeekProps = {
  month: number;
  selected?: Date;
  start: Date;
  onSelect: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  id?: string;
  color?: SnowColor;
};

function Week({
  month,
  selected,
  start,
  minDate,
  maxDate,
  color,
  onSelect,
}: WeekProps) {
  const buildDays = (startDate: Date) => {
    const days = [DateUtilities.clone(startDate)];
    let clone = DateUtilities.clone(startDate);
    for (let i = 1; i <= 6; i++) {
      clone = DateUtilities.clone(clone);
      clone.setDate(clone.getDate() + 1);
      days.push(clone);
    }
    return days;
  };

  const onSelectHandler = (day: Date) => {
    if (!isDisabled(day, minDate, maxDate)) {
      onSelect(day);
    }
  };

  const days = buildDays(start);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {days.map((day, i) => {
        const dayStyleClasses = getDayStyles(day, month, selected);
        const disabled = isDisabled(day, minDate, maxDate);
        return (
          <div key={i}>
            <DayButton
              onClick={() => onSelectHandler(day)}
              disabled={disabled}
              aria-disabled={disabled}
              className={clsx(dayStyleClasses, dayStyles)}
              color={color}
            >
              {DateUtilities.toDayOfMonthString(day)}
            </DayButton>
          </div>
        );
      })}
    </Box>
  );
}

export { Week };
