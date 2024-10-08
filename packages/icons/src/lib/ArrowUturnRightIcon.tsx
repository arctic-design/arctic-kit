import { IconProps } from './types';

export default function ArrowUturnRightIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="arrow-uturn-right"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 15L21 9M21 9L15 3M21 9H9C5.68629 9 3 11.6863 3 15C3 18.3137 5.68629 21 9 21H12"
      />
    </svg>
  );
}
