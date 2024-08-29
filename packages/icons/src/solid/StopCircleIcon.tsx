import { IconProps } from './types';

export default function StopCircleIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="stop-circle"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6-2.437c0-.725.588-1.313 1.313-1.313h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.312 1.313H9.561a1.31 1.31 0 0 1-1.312-1.312z"
        clipRule="evenodd"
      />
    </svg>
  );
}
