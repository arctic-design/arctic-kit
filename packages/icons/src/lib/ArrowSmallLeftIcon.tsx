import { IconProps } from './types';

export default function ArrowSmallLeftIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="arrow-small-left"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12L4.5 12M4.5 12L11.25 18.75M4.5 12L11.25 5.25"
      />
    </svg>
  );
}