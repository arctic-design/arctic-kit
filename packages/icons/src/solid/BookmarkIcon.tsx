import { IconProps } from './types';

export default function BookmarkIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="bookmark"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M6.32 2.577a49.3 49.3 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93"
        clipRule="evenodd"
      />
    </svg>
  );
}
