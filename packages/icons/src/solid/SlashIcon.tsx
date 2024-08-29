import { IconProps } from './types';

export default function SlashIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="slash"
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M15.256 3.042a.75.75 0 0 1 .449.962l-6 16.5a.75.75 0 1 1-1.41-.513l6-16.5a.75.75 0 0 1 .961-.449"
        clipRule="evenodd"
      />
    </svg>
  );
}
