'use client';
import { useContext } from 'react';
import { GridContext } from './GridContext';

export function useGrid() {
  const context = useContext(GridContext);
  return context;
}
