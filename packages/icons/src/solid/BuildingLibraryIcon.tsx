import { IconProps } from './types';

export default function BuildingLibraryIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="building-library"
      {...props}
    >
      <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248z" />
      <path
        fillRule="evenodd"
        d="M20.25 10.333v9.917H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.917a.75.75 0 0 1 .634-.741A49 49 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74m-7.5 2.417a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75M9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
      <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25" />
    </svg>
  );
}
