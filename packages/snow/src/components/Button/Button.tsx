export type ButtonProps = {
  children: React.ReactNode;
};
export function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
