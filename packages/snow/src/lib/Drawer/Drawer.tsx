import { PropsWithChildren } from 'react';
import { BaseModal } from '../Modals/BaseModal';
import { DrawerContent } from './DrawerContent';
import { DrawerPosition, DrawerSize } from './types';
import { DrawerHeading } from './DrawerHeading';
import { styled } from '@pigment-css/react';
import { SnowSize } from '../types';
import { ModalFooter } from '../Modals/ModalFooter';
import { Box } from '../Box';

export type DrawerProps = {
  title?: string;
  titleFooter?: React.ReactNode;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  onAction?: () => void;
  onCancel?: () => void;
  size?: DrawerSize;
  cancelLabel?: string;
  actionLabel?: string;
  position?: DrawerPosition;
  onClose?: () => void;
  id?: string;
  actionSize?: SnowSize;
  hideHeader?: boolean;
  hideFooter?: boolean;
  disableOutsidePressAndEscape?: boolean;
  loading?: boolean;
};

const ContentBody = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  flex: 1,
  overflowY: 'auto',
});
export function Drawer(props: PropsWithChildren<DrawerProps>) {
  const {
    open,
    onOpenChange,
    children,
    title,
    size = 'medium',
    position = 'left',
    onClose,
    onAction,
    onCancel,
    cancelLabel,
    actionLabel,
    id = 'drawer',
    actionSize,
    titleFooter,
    hideHeader = false,
    hideFooter = false,
    disableOutsidePressAndEscape = false,
    loading = false,
  } = props;
  return (
    <BaseModal
      open={open}
      onOpenChange={onOpenChange}
      data-testid={id}
      disableOutsidePressAndEscape={disableOutsidePressAndEscape || loading}
    >
      <DrawerContent id={`${id}-content`} size={size} position={position}>
        {!hideHeader && (
          <DrawerHeading
            id={`${id}-heading`}
            data-testid={`${id}-heading`}
            onClose={onClose}
            footer={titleFooter}
          >
            {title}
          </DrawerHeading>
        )}
        <ContentBody
          id={`${id}-content-body`}
          data-testid={`${id}-content-body`}
        >
          {children}
        </ContentBody>
        {!hideFooter && (
          <Box width="100%">
            <ModalFooter
              cancelLabel={cancelLabel}
              actionLabel={actionLabel}
              onAction={onAction}
              onCancel={onCancel}
              id={`${id}-footer`}
              size={actionSize}
              loading={loading}
            />
          </Box>
        )}
      </DrawerContent>
    </BaseModal>
  );
}
