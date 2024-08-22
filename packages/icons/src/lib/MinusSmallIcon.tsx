import { IconProps } from './types';

export default function MinusSmallIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="minus-small"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 12L6 12"
      />
    </svg>
  );
}