import { IconProps } from './types';

export default function ChatBubbleLeftIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="arctic-icon-medium solid"
      aria-label="chat-bubble-left"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.848 2.771A49 49 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97q-2.911.428-5.922.505a.4.4 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a49 49 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97"
        clipRule="evenodd"
      />
    </svg>
  );
}
