import { IconProps } from './types';

export default function HashtagIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="hashtag"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 8.25H20.25M3.75 15.75H18.75M16.95 2.25L13.05 21.75M10.9503 2.25L7.05029 21.75"
      />
    </svg>
  );
}
