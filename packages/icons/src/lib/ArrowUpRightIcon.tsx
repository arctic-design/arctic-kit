import { IconProps } from './types';

export default function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="arrow-up-right"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5L19.5 4.5M19.5 4.5L8.25 4.5M19.5 4.5V15.75"
      />
    </svg>
  );
}