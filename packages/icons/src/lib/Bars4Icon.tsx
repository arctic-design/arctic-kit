import { IconProps } from './types';

export default function Bars4Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="bars-4"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25H20.25M3.75 9.75H20.25M3.75 14.25H20.25M3.75 18.75H20.25"
      />
    </svg>
  );
}