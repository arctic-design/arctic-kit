import { IconProps } from './types';

export default function CpuChipIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="cpu-chip"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 3V4.5M4.5 8.25H3M21 8.25H19.5M4.5 12H3M21 12H19.5M4.5 15.75H3M21 15.75H19.5M8.25 19.5V21M12 3V4.5M12 19.5V21M15.75 3V4.5M15.75 19.5V21M6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75C5.50736 4.5 4.5 5.50736 4.5 6.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5ZM7.5 7.5H16.5V16.5H7.5V7.5Z"
      />
    </svg>
  );
}