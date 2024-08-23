import { IconProps } from './types';

export default function ArrowSmallDownIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="arrow-small-down"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5V19.5M12 19.5L18.75 12.75M12 19.5L5.25 12.75"
      />
    </svg>
  );
}
