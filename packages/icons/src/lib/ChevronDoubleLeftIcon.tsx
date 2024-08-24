import { IconProps } from './types';

export default function ChevronDoubleLeftIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="chevron-double-left"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.75 4.5L11.25 12L18.75 19.5M12.75 4.5L5.25 12L12.75 19.5"
      />
    </svg>
  );
}
