import { IconProps } from './types';

export default function SpeakerWaveIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="speaker-wave"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.114 5.63597C22.6287 9.15069 22.6287 14.8492 19.114 18.3639M16.4626 8.28771C18.5129 10.338 18.5129 13.6621 16.4626 15.7123M6.75 8.24999L11.4697 3.53032C11.9421 3.05784 12.75 3.39247 12.75 4.06065V19.9393C12.75 20.6075 11.9421 20.9421 11.4697 20.4697L6.75 15.75H4.50905C3.62971 15.75 2.8059 15.2435 2.57237 14.3957C2.36224 13.6329 2.25 12.8296 2.25 12C2.25 11.1704 2.36224 10.367 2.57237 9.60423C2.8059 8.75646 3.62971 8.24999 4.50905 8.24999H6.75Z"
      />
    </svg>
  );
}