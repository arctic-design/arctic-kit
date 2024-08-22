import { IconProps } from './types';

export default function ArrowTrendingDownIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="arrow-trending-down"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6L9 12.75L13.2862 8.46383C15.3217 10.0166 16.8781 12.23 17.5919 14.8941L18.3684 17.7919M18.3684 17.7919L21.5504 12.2806M18.3684 17.7919L12.857 14.6099"
      />
    </svg>
  );
}