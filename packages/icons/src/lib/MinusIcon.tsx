import { IconProps } from './types';

export default function MinusIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="minus"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12H19" />
    </svg>
  );
}
