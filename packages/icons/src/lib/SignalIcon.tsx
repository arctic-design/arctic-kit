import { IconProps } from './types';

export default function SignalIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="arctic-icon-medium"
      aria-label="signal"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.34835 14.6517C7.88388 13.1872 7.88388 10.8128 9.34835 9.34835M14.6517 9.34835C16.1161 10.8128 16.1161 13.1872 14.6517 14.6517M7.22703 16.773C4.59099 14.1369 4.59099 9.86307 7.22703 7.22703M16.773 7.22703C19.409 9.86307 19.409 14.1369 16.773 16.773M5.10571 18.8943C1.2981 15.0867 1.2981 8.91333 5.10571 5.10571M18.8943 5.10571C22.7019 8.91333 22.7019 15.0867 18.8943 18.8943M12 12H12.0075V12.0075H12V12ZM12.375 12C12.375 12.2071 12.2071 12.375 12 12.375C11.7929 12.375 11.625 12.2071 11.625 12C11.625 11.7929 11.7929 11.625 12 11.625C12.2071 11.625 12.375 11.7929 12.375 12Z"
      />
    </svg>
  );
}
