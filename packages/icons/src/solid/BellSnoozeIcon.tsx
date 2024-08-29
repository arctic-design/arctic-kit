import { IconProps } from './types';

export default function BellSnoozeIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="bell-snooze"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.22 8.22 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243q-.01.14-.01.281a3.75 3.75 0 1 0 7.49-.28 24.6 24.6 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.206 8.22 8.22 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25M9.75 18q0-.05.002-.1a25 25 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0m.75-10.5a.75.75 0 0 0 0 1.5h1.599l-2.223 3.334A.75.75 0 0 0 10.5 13.5h3a.75.75 0 0 0 0-1.5h-1.599l2.223-3.334A.75.75 0 0 0 13.5 7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
