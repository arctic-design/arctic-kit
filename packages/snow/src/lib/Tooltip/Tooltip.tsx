'use client';
import { Placement } from '@floating-ui/react';

import React, { PropsWithChildren } from 'react';
import { useTooltip, TooltipOptions } from './useTooltip';

import { TooltipContent } from './TooltipContent';
import { TooltipTrigger } from './TooltipTrigger';
import { TooltipContext } from './TooltipContext';

export function Tooltip({
  message,

  children,
  placement,
  id = 'tooltip',
}: PropsWithChildren<{
  message: string;

  placement?: Placement;
  id?: string;
}>) {
  return (
    <BaseTooltip placement={placement}>
      <TooltipTrigger id={`${id}-trigger`} asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent id={`${id}-content`} data-testid={`${id}-content`}>
        {message}
      </TooltipContent>
    </BaseTooltip>
  );
}

function BaseTooltip({
  children,
  ...options
}: { children: React.ReactNode } & TooltipOptions) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options);
  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
}
