'use client';
import { createContext, useContext } from 'react';
import { SnowColor, SnowSize } from '../types';

interface SegmentedControlContextValue {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  color?: SnowColor;
  size?: SnowSize;
}

export const SegmentedControlContext =
  createContext<SegmentedControlContextValue | null>(null);

export const useSegmentedControl = () => {
  const context = useContext(SegmentedControlContext);
  if (!context) {
    throw new Error(
      'useSegmentedControl must be used within a SegmentedControlProvider'
    );
  }
  return context;
};
