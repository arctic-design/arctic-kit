import { PropsWithChildren } from 'react';
import { BaseModal } from './BaseModal';
import { ModalContent } from './ModalContent';
import { ModalHeading } from './ModalHeading';
import { ModalDescription } from './ModalDescription';
import { ModalFooter } from './ModalFooter';
import { SnowSize } from '../types';

export type ConfirmationModalProps = {
  title?: string;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  onAction?: () => void;
  size?: SnowSize;
  id?: string;
};
export function ConfirmationModal(
  props: PropsWithChildren<ConfirmationModalProps>
) {
  const {
    open,
    onOpenChange,
    children,
    title,
    onAction,
    size,
    id = 'confirmation-modal',
  } = props;
  return (
    <BaseModal open={open} onOpenChange={onOpenChange}>
      <ModalContent id={`${id}-content`} size={size ?? 'extraSmall'}>
        <ModalHeading id={`${id}-heading`}>{title}</ModalHeading>
        <ModalDescription id={`${id}-description`}>{children}</ModalDescription>
        <ModalFooter
          id={`${id}-footer`}
          cancelLabel="No"
          actionLabel="Yes"
          onAction={onAction}
          onCancel={() => onOpenChange?.(false)}
        />
      </ModalContent>
    </BaseModal>
  );
}
