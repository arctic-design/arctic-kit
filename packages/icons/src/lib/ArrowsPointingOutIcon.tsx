import { IconProps } from './types';

export default function ArrowsPointingOutIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="arrows-pointing-out"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3.75V8.25M3.75 3.75H8.25M3.75 3.75L9 9M3.75 20.25V15.75M3.75 20.25H8.25M3.75 20.25L9 15M20.25 3.75L15.75 3.75M20.25 3.75V8.25M20.25 3.75L15 9M20.25 20.25H15.75M20.25 20.25V15.75M20.25 20.25L15 15"
      />
    </svg>
  );
}