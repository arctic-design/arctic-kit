import { IconProps } from './types';

export default function BookOpenIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="book-open"
      {...props}
    >
      <path d="M11.25 4.533A9.7 9.7 0 0 0 6 3a9.7 9.7 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.2 8.2 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886zM12.75 20.636A8.2 8.2 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.7 9.7 0 0 0 18 3a9.7 9.7 0 0 0-5.25 1.533z" />
    </svg>
  );
}
