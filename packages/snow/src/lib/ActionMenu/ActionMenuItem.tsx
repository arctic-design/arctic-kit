'use client';
import { forwardRef, useContext } from 'react';
import { ActionMenuContext } from './ActionMenuContext';
import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react';
import { ActionItem } from './ActionItem';
import { SnowColor, SnowSize } from '../types';
import { ButtonGroupContext } from '../ButtonGroup/ButtonGroupContext';
import { Center } from '../Layout';

export interface ActionMenuItemProps {
  label: string;
  disabled?: boolean;
  color?: SnowColor;
  size?: SnowSize;
  id?: string;
  prefix?: React.ReactNode;
}

export const ActionMenuItem = forwardRef<
  HTMLButtonElement,
  ActionMenuItemProps &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'>
>(
  (
    {
      label,
      disabled,
      id = 'action-menu-item',
      size = 'medium',
      prefix,
      ...props
    },
    forwardedRef
  ) => {
    const menu = useContext(ActionMenuContext);
    const item = useListItem({ label: disabled ? null : label });
    const tree = useFloatingTree();
    const isActive = item.index === menu.activeIndex;

    const { size: grpSize } = useContext(ButtonGroupContext);

    return (
      <ActionItem
        {...props}
        ref={useMergeRefs([item.ref, forwardedRef])}
        type="button"
        role="menuitem"
        className="MenuItem"
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        id={`${id}-${item.index}`}
        data-testid={`${id}-${item.index}`}
        itemSize={grpSize || size}
        {...menu.getItemProps?.({
          onClick(event: React.MouseEvent<HTMLButtonElement>) {
            props.onClick?.(event);
            tree?.events.emit('click');
          },
          onFocus(event: React.FocusEvent<HTMLButtonElement>) {
            props.onFocus?.(event);
            menu.setHasFocusInside?.(true);
          },
        })}
      >
        <Center inline>
          {prefix}
          {label}
        </Center>
      </ActionItem>
    );
  }
);
