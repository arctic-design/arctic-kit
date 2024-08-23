import { IconProps } from './types';

export default function ArrowDownLeftIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="arrow-down-left"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 4.5L4.5 19.5M4.5 19.5L15.75 19.5M4.5 19.5L4.5 8.25"
      />
    </svg>
  );
}
