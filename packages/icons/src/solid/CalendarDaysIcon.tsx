import { IconProps } from './types';

export default function CalendarDaysIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="calendar-days"
      {...props}
    >
      <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
      <path
        fillRule="evenodd"
        d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75m13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
