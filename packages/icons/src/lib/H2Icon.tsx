import { IconProps } from './types';

export default function H2Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="h2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.7501 19.5008H16.5001V17.8914C16.5001 17.0391 16.9816 16.26 17.7439 15.8789L20.6335 14.4341C21.285 14.1083 21.7501 13.4791 21.7501 12.7507C21.7501 12.2525 21.7096 11.7637 21.6318 11.2875C21.497 10.463 20.7972 9.86577 19.9644 9.79906C19.5639 9.76697 19.1589 9.75061 18.7501 9.75061C17.9854 9.75061 17.2341 9.80784 16.5001 9.91824M2.24316 4.49316V11.9939M2.24316 11.9939V19.4946M2.24316 11.9939L12.7434 11.9946M12.7434 4.49389V11.9946M12.7434 11.9946V19.4953"
      />
    </svg>
  );
}