import { IconProps } from './types';

export default function ArrowLeftStartOnRectangleIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="arrow-left-start-on-rectangle"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 9V5.25C8.25 4.00736 9.25736 3 10.5 3H16.5C17.7426 3 18.75 4.00736 18.75 5.25V18.75C18.75 19.9926 17.7426 21 16.5 21H10.5C9.25736 21 8.25 19.9926 8.25 18.75V15M5.25 15L2.25 12M2.25 12L5.25 9M2.25 12L15 12"
      />
    </svg>
  );
}
