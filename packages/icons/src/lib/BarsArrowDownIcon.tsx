import { IconProps } from './types';

export default function BarsArrowDownIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="bars-arrow-down"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 4.5H17.25M3 9H12.75M3 13.5H12.75M17.25 9V21M17.25 21L13.5 17.25M17.25 21L21 17.25"
      />
    </svg>
  );
}
