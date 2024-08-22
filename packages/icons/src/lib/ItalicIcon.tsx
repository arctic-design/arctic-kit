import { IconProps } from './types';

export default function ItalicIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="italic"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.24756 20.2457H9.05106M9.05106 20.2457H12.7474M9.05106 20.2457L14.9438 3.74414M14.9438 3.74414H11.2474M14.9438 3.74414H18.7473"
      />
    </svg>
  );
}