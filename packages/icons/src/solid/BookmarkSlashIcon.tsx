import { IconProps } from './types';

export default function BookmarkSlashIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="bookmark-slash"
      {...props}
    >
      <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06zM20.25 5.507v11.561L5.853 2.671q.225-.065.467-.094a49.3 49.3 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93M3.75 21V6.932l14.063 14.063L12 18.088l-7.165 3.583A.75.75 0 0 1 3.75 21" />
    </svg>
  );
}