'use client';
import { ModalContext } from './ModalContext';
import { BaseModalOptions } from './types';
import { useModal } from './useModal';

export function BaseModal({
  children,
  ...options
}: {
  children: React.ReactNode;
} & BaseModalOptions) {
  const dialog = useModal(options);
  return (
    <ModalContext.Provider value={dialog}>{children}</ModalContext.Provider>
  );
}
