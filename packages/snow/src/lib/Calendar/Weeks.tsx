import { Stack } from '../Layout';
import { SnowColor } from '../types';
import DateUtilities from './DateUtilities';
import { Week } from './Week';

type Props = {
  view: Date;
  selected?: Date;
  onSelect: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  id?: string;
  color?: SnowColor;
};

const getWeekStartDates = (view: Date) => {
  view.setDate(1);
  view = DateUtilities.moveToDayOfWeek(DateUtilities.clone(view), 0);

  const current = DateUtilities.clone(view);
  current.setDate(current.getDate() + 7);

  const starts = [view],
    month = current.getMonth();

  while (current.getMonth() === month) {
    starts.push(DateUtilities.clone(current));
    current.setDate(current.getDate() + 7);
  }

  return starts;
};

const WeeksRenderer = ({
  view,
  className,
  selected,
  onSelect,
  minDate,
  maxDate,
  color,
}: {
  view: Date;
  className?: string;
  selected?: Date;
  onSelect: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  color?: SnowColor;
}) => {
  const starts = getWeekStartDates(view);
  const month = starts[1].getMonth();

  return starts.map((s, i) => (
    <Week
      key={i}
      start={s}
      month={month}
      selected={selected}
      onSelect={onSelect}
      minDate={minDate}
      maxDate={maxDate}
      className={className}
      id={`week-${i}`}
      data-testid={`week-${i}`}
      color={color}
    />
  ));
};

export function Weeks({ id = 'weeks', ...props }: Props) {
  const currentClassName = 'weeks current';

  return (
    <Stack
      className={currentClassName}
      id={`${id}-container`}
      data-testid={`${id}-container`}
      spacing={1}
    >
      <WeeksRenderer {...props} />
    </Stack>
  );
}
