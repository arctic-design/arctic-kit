'use client';
import { createContext } from 'react';
import { SnackbarContextProps } from './types';

const noOp = () => {
  return '';
};

const SnackbarContext = createContext<SnackbarContextProps>({
  snacks: [],
  enqueueSnackbar: noOp,
  closeSnackbar: noOp,
});

export default SnackbarContext;
