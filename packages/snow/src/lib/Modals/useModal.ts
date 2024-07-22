'use client';
import { useMemo, useState } from 'react';
import { BaseModalOptions } from './types';
import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';

export function useModal({
  initialOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  disableOutsidePressAndEscape = false,
}: BaseModalOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const [labelId, setLabelId] = useState<string | undefined>();
  const [descriptionId, setDescriptionId] = useState<string | undefined>();

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    open,
    onOpenChange: (openValue) => {
      if (!disableOutsidePressAndEscape) {
        setOpen(openValue);
      }
    },
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context, {
    outsidePressEvent: 'mousedown',
    outsidePress: !disableOutsidePressAndEscape,
  });
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
    }),
    [open, setOpen, interactions, data, labelId, descriptionId]
  );
}
