import { IconProps } from './types';

export default function RocketLaunchIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="rocket-launch"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436q.083.52.084 1.064a6.75 6.75 0 0 1-6.75 6.75.75.75 0 0 1-.75-.75v-4.131l-.027-.021A15.8 15.8 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666M15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
      <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.24 5.24 0 0 0-2.05 5.022.75.75 0 0 0 .625.627q.398.061.812.062a5.24 5.24 0 0 0 4.21-2.113.75.75 0 1 0-1.202-.897 3.74 3.74 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008" />
    </svg>
  );
}
