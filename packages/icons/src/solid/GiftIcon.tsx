import { IconProps } from './types';

export default function GiftIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="gift"
      {...props}
    >
      <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.754a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035-.001 1.875.838 1.875 1.874v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3M11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6zM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75z" />
    </svg>
  );
}
