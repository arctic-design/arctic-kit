import { IconProps } from './types';

export default function ArrowUpLeftIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="arrow-up-left"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.25 6.31v9.44a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75h11.25a.75.75 0 0 1 0 1.5H6.31l13.72 13.72a.75.75 0 1 1-1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}
