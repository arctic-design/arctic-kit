import { IconProps } from './types';

export default function ChevronDoubleDownIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="chevron-double-down"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 5.25L12 12.75L19.5 5.25M4.5 11.25L12 18.75L19.5 11.25"
      />
    </svg>
  );
}