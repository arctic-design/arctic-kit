import { IconProps } from './types';

export default function CloudIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="cloud"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.5 9.75a6 6 0 0 1 11.573-2.226q.21-.024.427-.024a3.75 3.75 0 0 1 3.706 4.327A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6 6 0 0 1-.02-.496"
        clipRule="evenodd"
      />
    </svg>
  );
}
