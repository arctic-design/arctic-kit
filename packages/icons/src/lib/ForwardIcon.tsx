import { IconProps } from './types';

export default function ForwardIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="forward"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8.68867C3 7.82487 3.93317 7.28334 4.68316 7.7119L11.7906 11.7733C12.5464 12.2052 12.5464 13.295 11.7906 13.7269L4.68316 17.7883C3.93317 18.2169 3 17.6753 3 16.8115V8.68867Z"
      />
    </svg>
  );
}