import { IconProps } from './types';

export default function BellIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="bell"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243q.01.14.01.281a3.75 3.75 0 1 1-7.49-.28 24.6 24.6 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.206A8.22 8.22 0 0 0 5.25 9.75zm4.502 8.9-.002.1a2.25 2.25 0 1 0 4.498-.1 25 25 0 0 1-4.496 0"
        clipRule="evenodd"
      />
    </svg>
  );
}
