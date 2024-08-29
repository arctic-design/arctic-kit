import { IconProps } from './types';

export default function ChevronLeftIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="chevron-left"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}