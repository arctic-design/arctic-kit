'use client';
import { useContext } from 'react';
import { ModalContext } from './ModalContext';

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context == null) {
    throw new Error('Modal components must be wrapped in <Modal />');
  }

  return context;
};
