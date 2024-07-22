'use client';
import React from 'react';
import { useModalContext } from './useModalContext';
import { useMergeRefs } from '@floating-ui/react';

interface ModalTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const ModalTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & ModalTriggerProps
>(function ModalTrigger({ children, asChild = false, ...props }, propRef) {
  const context = useModalContext();
  const childrenRef = (children as any).ref; /* eslint-disable-line */
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed',
      })
    );
  }

  return (
    <button
      ref={ref}
      // The user can style the trigger based on the state
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </button>
  );
});
