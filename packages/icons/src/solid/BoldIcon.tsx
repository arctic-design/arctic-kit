import { IconProps } from './types';

export default function BoldIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="bold"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.246 3.744a.75.75 0 0 1 .75-.75h7.125a4.875 4.875 0 0 1 3.346 8.422 5.25 5.25 0 0 1-2.97 9.58h-7.5a.75.75 0 0 1-.75-.75zm7.125 6.75a2.625 2.625 0 0 0 0-5.25H8.246v5.25zm-4.125 2.251v6h4.5a3 3 0 0 0 0-6z"
        clipRule="evenodd"
      />
    </svg>
  );
}