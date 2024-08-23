import { IconProps } from './types';

export default function PresentationChartBarIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="presentation-chart-bar"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3V14.25C3.75 15.4926 4.75736 16.5 6 16.5H8.25M3.75 3H2.25M3.75 3H20.25M20.25 3H21.75M20.25 3V14.25C20.25 15.4926 19.2426 16.5 18 16.5H15.75M8.25 16.5H15.75M8.25 16.5L7.25 19.5M15.75 16.5L16.75 19.5M16.75 19.5L17.25 21M16.75 19.5H7.25M7.25 19.5L6.75 21M9 11.25V12.75M12 9V12.75M15 6.75V12.75"
      />
    </svg>
  );
}
