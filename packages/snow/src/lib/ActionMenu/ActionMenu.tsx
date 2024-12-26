'use client';
import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react';
import { forwardRef, useContext } from 'react';
import { ActionMenuComponent } from './ActionMenuComponent';
import { ActionMenuProps } from './types';
import { ButtonGroupContext } from '../ButtonGroup/ButtonGroupContext';

export const ActionMenu = forwardRef<HTMLButtonElement, ActionMenuProps>(
  (
    {
      placement = 'bottom-start',
      itemSize = 'medium',
      id = 'action-menu',
      variant,
      disabled,
      color,
      fullWidth,
      ...props
    }: ActionMenuProps,
    ref
  ) => {
    const parentId = useFloatingParentNodeId();
    const {
      disabled: grpDisabled,
      size: grpSize,
      color: grpColor,
      variant: grpVariant,
    } = useContext(ButtonGroupContext);

    if (parentId === null) {
      return (
        <FloatingTree>
          <ActionMenuComponent
            placement={placement}
            itemSize={grpSize || itemSize}
            color={grpColor || color}
            disabled={grpDisabled || disabled}
            id={id}
            data-testid={id}
            variant={grpVariant || variant}
            fullWidth={fullWidth}
            {...props}
            ref={ref}
          />
        </FloatingTree>
      );
    }

    return (
      <ActionMenuComponent
        id={`${id}-${parentId}`}
        data-testid={`${id}-${parentId}`}
        itemSize={grpSize || itemSize}
        disabled={disabled}
        color={color}
        variant={variant}
        {...props}
        ref={ref}
      />
    );
  }
);
