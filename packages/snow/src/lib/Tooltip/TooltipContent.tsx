'use client';
import { forwardRef } from 'react';
import { useTooltipContext } from './useTooltipContext';
import { FloatingPortal, useMergeRefs } from '@floating-ui/react';

import {
  FloatingArrow,
  TooltipContentContainer,
} from './TooltipContentContainer';

const TooltipContent = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function TooltipContent({ style, children, ...props }, propRef) {
  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!context.open) return null;

  return (
    <FloatingPortal>
      <TooltipContentContainer
        ref={ref}
        style={{
          ...context.floatingStyles,
          ...style,
        }}
        {...context.getFloatingProps(props)}
      >
        {children}

        <FloatingArrow
          ref={context.arrowRef}
          context={context as any /* eslint-disable-line */}
        />
      </TooltipContentContainer>
    </FloatingPortal>
  );
});

export { TooltipContent };
