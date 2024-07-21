'use client';
import { SnowSize } from '../types';
import { useMemo } from 'react';
import { RadioSizes } from './types';
import { Variants } from 'framer-motion';

function getVariants({ multiplier }: { multiplier: number }): Variants {
  return {
    initial: {
      borderWidth: '1px',
      transition: {
        duration: 0.1,
      },
    },
    selected: {
      borderWidth: `${multiplier * 0.3}px`,
      transition: {
        duration: 0.1,
      },
    },
    hover: {
      transition: {
        duration: 0.1,
      },
    },
    disabled: {
      transition: {
        duration: 0.1,
      },
    },
    disabledSelected: {
      borderWidth: `${multiplier * 0.3}px`,
      transition: {
        duration: 0.1,
      },
    },
    error: {
      transition: {
        duration: 0.1,
      },
    },
    readOnly: {
      transition: {
        duration: 0.1,
      },
    },
    readOnlySelected: {
      borderWidth: `${multiplier * 0.3}px`,
      transition: {
        duration: 0.1,
      },
    },
  };
}

export function useRadioVariants(size: SnowSize = 'medium') {
  const variants = useMemo(
    () =>
      getVariants({
        multiplier: RadioSizes[size],
      }),
    [size]
  );

  return {
    variants,
  };
}
