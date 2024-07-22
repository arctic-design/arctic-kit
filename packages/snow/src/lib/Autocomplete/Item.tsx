import { forwardRef, useId } from 'react';

interface ItemProps {
  children: React.ReactNode;
  active: boolean;
}

export const Item = forwardRef<
  HTMLDivElement,
  ItemProps & React.HTMLProps<HTMLDivElement>
>(({ children, active, ...rest }, ref) => {
  const id = useId();

  return (
    <div
      ref={ref}
      role='option'
      id={id}
      aria-selected={active}
      className='select-menu-item'
      {...rest}
      style={{
        ...rest.style,
      }}
    >
      {children}
    </div>
  );
});

Item.displayName = 'Item';
