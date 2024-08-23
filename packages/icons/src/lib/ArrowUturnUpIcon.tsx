import { IconProps } from './types';

export default function ArrowUturnUpIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="arrow-uturn-up"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9L15 3M15 3L21 9M15 3L15 15C15 18.3137 12.3137 21 9 21C5.68629 21 3 18.3137 3 15L3 12"
      />
    </svg>
  );
}
