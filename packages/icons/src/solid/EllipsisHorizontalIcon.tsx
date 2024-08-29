import { IconProps } from './types';

export default function EllipsisHorizontalIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="ellipsis-horizontal"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
        clipRule="evenodd"
      />
    </svg>
  );
}
