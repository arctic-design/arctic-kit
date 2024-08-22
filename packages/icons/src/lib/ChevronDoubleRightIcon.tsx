import { IconProps } from './types';

export default function ChevronDoubleRightIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="chevron-double-right"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 4.5L12.75 12L5.25 19.5M11.25 4.5L18.75 12L11.25 19.5"
      />
    </svg>
  );
}