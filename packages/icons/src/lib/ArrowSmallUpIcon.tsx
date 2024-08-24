import { IconProps } from './types';

export default function ArrowSmallUpIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="arrow-small-up"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19.5L12 4.5M12 4.5L5.25 11.25M12 4.5L18.75 11.25"
      />
    </svg>
  );
}
