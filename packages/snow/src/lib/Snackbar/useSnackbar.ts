'use client';
import { useContext } from 'react';

import SnackbarContext from './SnackbarContext';
import { type SnackbarContextProps } from './types';

const useSnackbar = (): SnackbarContextProps => useContext(SnackbarContext);

export { useSnackbar };
