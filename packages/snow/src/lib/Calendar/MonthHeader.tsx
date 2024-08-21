import DateUtilities from './DateUtilities';
import { ArrowLeftIcon, ArrowRightIcon } from '@arctic-kit/icons';
import {
  ArrowButton,
  MonthHeaderContainer,
  MonthYearView,
} from './StyledElements';

type MonthHeaderProps = {
  view: Date;
  enabled: boolean;
  onMove: (view: Date, isForward: boolean) => void;
  minDate?: Date;
  maxDate?: Date;
  onYearChange?: (year: number) => void;
  onMonthChange?: (month: number) => void;
  id?: string;
};
export function MonthHeader({
  id = 'month-header',
  ...props
}: MonthHeaderProps) {
  const moveBackward = () => {
    const view = DateUtilities.clone(props.view);
    view.setMonth(view.getMonth() - 1);
    move(view, false);
  };

  const moveForward = () => {
    const view = DateUtilities.clone(props.view);
    view.setMonth(view.getMonth() + 1);
    move(view, true);
  };

  const move = (view: Date, isForward: boolean) => {
    if (!props.enabled) return;

    props.onMove(view, isForward);
  };

  const { minDate, maxDate, enabled } = props;
  const isMoveLeftDisabled = enabled
    ? minDate
      ? DateUtilities.isMonthGreaterOrEqual(minDate, props.view)
      : false
    : false;
  const isMoveRightDisabled = enabled
    ? maxDate
      ? DateUtilities.isMonthGreaterOrEqual(props.view, maxDate)
      : false
    : false;

  const monthYearView = `${DateUtilities.toMonthString(
    props.view
  )} ${DateUtilities.toYearString(props.view)}`;

  return (
    <MonthHeaderContainer
      id={`${id}-container`}
      data-testid={`${id}-container`}
    >
      <ArrowButton
        id={`${id}-icon-left-container`}
        data-testid={`${id}-icon-left-container`}
        disabled={isMoveLeftDisabled}
        onClick={moveBackward}
      >
        <ArrowLeftIcon id={`${id}-icon-left`} data-testid={`${id}-icon-left`} />
      </ArrowButton>
      <MonthYearView id={`${id}-year-view`} data-testid={`${id}-year-view`}>
        {monthYearView}
      </MonthYearView>
      <ArrowButton
        id={`${id}-icon-right-container`}
        data-testid={`${id}-icon-right-container`}
        onClick={moveForward}
        disabled={isMoveRightDisabled}
      >
        <ArrowRightIcon
          id={`${id}-icon-right`}
          data-testid={`${id}-icon-right`}
        />
      </ArrowButton>
    </MonthHeaderContainer>
  );
}
