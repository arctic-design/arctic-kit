import { clsx } from 'clsx';
import { forwardRef } from 'react';

export type CardFooterProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  function CardFooter({ children, className, ...props }, ref) {
    return (
      <div ref={ref} className={clsx('footer', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';
