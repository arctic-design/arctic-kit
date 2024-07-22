'use client';
import React from 'react';
import { useModal } from './useModal';

type ContextType =
  | (ReturnType<typeof useModal> & {
      setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
      setDescriptionId: React.Dispatch<
        React.SetStateAction<string | undefined>
      >;
    })
  | null;

export const ModalContext = React.createContext<ContextType>(null);
