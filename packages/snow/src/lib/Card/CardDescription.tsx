import { forwardRef } from 'react';
import { clsx } from 'clsx';

export type CardDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
export const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>(
  function CardDescription({ children, className, ...props }, ref) {
    return (
      <div ref={ref} className={clsx('description', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardDescription.displayName = 'CardDescription';
