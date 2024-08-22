import { IconProps } from './types';

export default function ArrowSmallRightIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="arrow-small-right"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12L19.5 12M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
      />
    </svg>
  );
}