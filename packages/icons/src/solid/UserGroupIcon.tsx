import { IconProps } from './types';

export default function UserGroupIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="user-group"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0M2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0M6.31 15.118A6.75 6.75 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.7 12.7 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.8 6.8 0 0 1 1.019-4.38"
        clipRule="evenodd"
      />
      <path d="m5.082 14.254-.036.055a8.3 8.3 0 0 0-1.271 5.08 9.7 9.7 0 0 1-1.765-.44l-.115-.04a.56.56 0 0 1-.373-.487l-.01-.121Q1.5 18.15 1.5 18a3.75 3.75 0 0 1 3.582-3.746M20.226 19.389a8.3 8.3 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.56.56 0 0 1-.373.486l-.115.04q-.851.302-1.764.441" />
    </svg>
  );
}
