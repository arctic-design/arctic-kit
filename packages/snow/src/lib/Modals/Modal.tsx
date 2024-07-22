import React from 'react';
import { ModalContent } from './ModalContent';
import { ModalHeading } from './ModalHeading';
import { ModalDescription } from './ModalDescription';
import { ModalFooter } from './ModalFooter';
import { BaseModal } from './BaseModal';
import { ModalSize } from './types';
import { SnowSize } from '../types';

export type ModalProps = {
  title?: string;
  titleFooter?: React.ReactNode;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  onAction?: () => void;
  onCancel?: () => void;
  size?: ModalSize;
  cancelLabel?: string;
  actionLabel?: string;
  id?: string;
  actionSize?: SnowSize;
  hideHeader?: boolean;
  hideFooter?: boolean;
  disableOutsidePressAndEscape?: boolean;
  loading?: boolean;
};
export function Modal({
  open = false,
  onOpenChange,
  title,
  titleFooter,
  children,
  onAction,
  size,
  cancelLabel,
  actionLabel,
  id = 'modal',
  actionSize = 'medium',
  onCancel,
  hideHeader = false,
  hideFooter = false,
  disableOutsidePressAndEscape = false,
  loading = false,
}: React.PropsWithChildren<ModalProps>) {
  return (
    <BaseModal
      open={open}
      onOpenChange={onOpenChange}
      disableOutsidePressAndEscape={disableOutsidePressAndEscape || loading}
    >
      <ModalContent id={`${id}-content`} size={size}>
        {!hideHeader && (
          <ModalHeading
            disabled={loading}
            id={`${id}-heading`}
            footer={titleFooter}
          >
            {title}
          </ModalHeading>
        )}
        <ModalDescription id={`${id}-description`}>{children}</ModalDescription>
        {!hideFooter && (
          <ModalFooter
            cancelLabel={cancelLabel}
            actionLabel={actionLabel}
            onAction={onAction}
            onCancel={onCancel}
            id={`${id}-footer`}
            size={actionSize}
            loading={loading}
          />
        )}
      </ModalContent>
    </BaseModal>
  );
}
