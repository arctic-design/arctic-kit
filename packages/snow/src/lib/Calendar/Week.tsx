import { clsx } from 'clsx';
import DateUtilities from './DateUtilities';
import { dayStyles } from './commonStyles';
import { Box } from '../Box';
import { DayButton } from './StyledElements';

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
};

function Week(props: WeekProps) {
  const buildDays = (start: Date) => {
    const days = [DateUtilities.clone(start)];
    let clone = DateUtilities.clone(start);
    for (let i = 1; i <= 6; i++) {
      clone = DateUtilities.clone(clone);
      clone.setDate(clone.getDate() + 1);
      days.push(clone);
    }
    return days;
  };

  const onSelect = (day: Date) => {
    if (!isDisabled(day, props.minDate, props.maxDate)) {
      props.onSelect(day);
    }
  };

  const days = buildDays(props.start);

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
        const dayStyleClasses = getDayStyles(day, props.month, props.selected);
        const disabled = isDisabled(day, props.minDate, props.maxDate);
        return (
          <div key={i}>
            <DayButton
              onClick={() => onSelect(day)}
              disabled={disabled}
              aria-disabled={disabled}
              className={clsx(dayStyleClasses, dayStyles)}
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
