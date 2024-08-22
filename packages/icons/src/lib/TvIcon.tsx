import { IconProps } from './types';

export default function TvIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="tv"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 20.25H18M10.5 17.25V20.25M13.5 17.25V20.25M3.375 17.25H20.625C21.2463 17.25 21.75 16.7463 21.75 16.125V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V16.125C2.25 16.7463 2.75368 17.25 3.375 17.25Z"
      />
    </svg>
  );
}