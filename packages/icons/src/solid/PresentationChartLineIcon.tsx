import { IconProps } from './types';

export default function PresentationChartLineIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="presentation-chart-line"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5zm6.54 15h6.42l.5 1.5H8.29zm8.086-8.995a.75.75 0 1 0-.751-1.299 12.8 12.8 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.3 11.3 0 0 1 3.612-3.321"
        clipRule="evenodd"
      />
    </svg>
  );
}
