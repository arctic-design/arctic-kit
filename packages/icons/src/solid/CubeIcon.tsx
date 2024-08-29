import { IconProps } from './types';

export default function CubeIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="cube"
      {...props}
    >
      <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648z" />
    </svg>
  );
}