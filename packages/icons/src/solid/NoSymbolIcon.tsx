import { IconProps } from './types';

export default function NoSymbolIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="no-symbol"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66m10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62M5.105 5.106c3.807-3.808 9.98-3.808 13.788 0s3.808 9.98 0 13.788-9.98 3.808-13.788 0-3.808-9.98 0-13.788"
        clipRule="evenodd"
      />
    </svg>
  );
}
