'use client';
import {
  useFloatingTree,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useListItem,
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  useHover,
  safePolygon,
  useClick,
  useRole,
  useDismiss,
  useListNavigation,
  useTypeahead,
  useInteractions,
  FloatingNode,
  useMergeRefs,
  FloatingList,
  FloatingPortal,
  FloatingFocusManager,
} from '@floating-ui/react';

import { ChevronRightIcon, ChevronDownIcon } from '@arctic-kit/icons';
import { forwardRef, useContext, useEffect, useRef, useState } from 'react';

import { ActionMenuContext } from './ActionMenuContext';
import { ActionItem } from './ActionItem';
import { ActionMenuProps } from './types';

import { styled } from '@pigment-css/react';

import { Box } from '../Box';
import { SnowThemeArgs } from '../../core';
import { Center } from '../Layout';

const ActionMenuContainer = styled.div(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    padding: '4px',
    outline: 0,
    borderRadius: '4px',
    boxShadow: theme.shadow[200],
    zIndex: 1,
  })
);

export const ActionMenuComponent = forwardRef<
  HTMLButtonElement,
  ActionMenuProps & Omit<React.HTMLProps<HTMLButtonElement>, 'prefix'>
>(
  (
    {
      children,
      label,
      renderContent,
      disabled,
      color,
      placement = 'bottom-start',
      itemSize,
      id = 'action-menu',
      prefix,
      noBorder,
      variant = 'outlined',
      ...props
    },
    forwardedRef
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasFocusInside, setHasFocusInside] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const elementsRef = useRef<Array<HTMLButtonElement | null>>([]);
    const labelsRef = useRef<Array<string | null>>([]);
    const parent = useContext(ActionMenuContext);

    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    const item = useListItem();

    const isNested = parentId != null;

    const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
      nodeId,
      open: isOpen,
      onOpenChange: setIsOpen,
      placement: isNested ? 'right-start' : placement,
      middleware: [
        offset({
          mainAxis: isNested ? 0 : 4,
          alignmentAxis: isNested ? -4 : 0,
        }),
        flip(),
        shift(),
      ],
      whileElementsMounted: autoUpdate,
    });

    const hover = useHover(context, {
      enabled: isNested,
      delay: { open: 75 },
      handleClose: safePolygon({ blockPointerEvents: true }),
    });
    const click = useClick(context, {
      event: 'mousedown',
      toggle: !isNested,
      ignoreMouse: isNested,
    });
    const role = useRole(context, { role: 'menu' });
    const dismiss = useDismiss(context, { bubbles: true });
    const listNavigation = useListNavigation(context, {
      listRef: elementsRef,
      activeIndex,
      nested: isNested,
      onNavigate: setActiveIndex,
    });
    const typeahead = useTypeahead(context, {
      listRef: labelsRef,
      onMatch: isOpen ? setActiveIndex : undefined,
      activeIndex,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([hover, click, role, dismiss, listNavigation, typeahead]);

    // Event emitter allows you to communicate across tree components.
    // This effect closes all menus when an item gets clicked anywhere
    // in the tree.
    useEffect(() => {
      if (!tree) return;

      function handleTreeClick() {
        setIsOpen(false);
      }

      function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
        if (event.nodeId !== nodeId && event.parentId === parentId) {
          setIsOpen(false);
        }
      }

      tree.events.on('click', handleTreeClick);
      tree.events.on('menuopen', onSubMenuOpen);

      return () => {
        tree.events.off('click', handleTreeClick);
        tree.events.off('menuopen', onSubMenuOpen);
      };
    }, [tree, nodeId, parentId]);

    useEffect(() => {
      if (isOpen && tree) {
        tree.events.emit('menuopen', { parentId, nodeId });
      }
    }, [tree, isOpen, nodeId, parentId]);

    const rootId = `${id}-${isNested ? 'menu-item' : 'root-menu'}`;

    return (
      <FloatingNode id={nodeId}>
        <ActionItem
          ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
          tabIndex={
            !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1
          }
          role={isNested ? 'menuitem' : undefined}
          data-open={isOpen ? '' : undefined}
          data-nested={isNested ? '' : undefined}
          data-focus-inside={hasFocusInside ? '' : undefined}
          id={rootId}
          data-testid={rootId}
          className={`${
            isNested ? 'MenuItem' : !renderContent ? 'RootMenu' : ''
          } ${variant}`}
          disabled={disabled}
          aria-disabled={disabled}
          color={color}
          itemSize={itemSize}
          data-no-border={noBorder}
          {...getReferenceProps(
            parent.getItemProps?.({
              ...props,
              onFocus(event: React.FocusEvent<HTMLButtonElement>) {
                props.onFocus?.(event);
                setHasFocusInside(false);
                parent.setHasFocusInside?.(true);
              },
            })
          )}
        >
          <Box
            id={`${rootId}-content`}
            data-testid={`${rootId}-content`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            {renderContent ? (
              renderContent
            ) : (
              <>
                {label && (
                  <Box
                    data-testid={`${rootId}-content-label`}
                    id={`${rootId}-content-label`}
                    fontSize={itemSize}
                  >
                    <Center>
                      {prefix}
                      {label}
                    </Center>
                  </Box>
                )}
                {!isNested && (
                  <Box
                    id={`${rootId}-content-label-icon-container`}
                    as="span"
                    sx={{
                      display: 'inline-flex',
                      fontSize: 10,
                    }}
                  >
                    <ChevronDownIcon
                      data-testid={`${rootId}-content-label-icon`}
                      id={`${rootId}-content-label-icon`}
                      strokeWidth={2}
                    />
                  </Box>
                )}
              </>
            )}
          </Box>

          {isNested && (
            <Box
              as="span"
              aria-hidden
              sx={{
                marginLeft: 10,
                fontSize: 12,
                display: 'inline-flex',
              }}
              id={`${rootId}-content-label-icon`}
            >
              <ChevronRightIcon
                data-testid={`${rootId}-content-icon`}
                id={`${rootId}-content-icon`}
                strokeWidth={2}
              />
            </Box>
          )}
        </ActionItem>
        <ActionMenuContext.Provider
          value={{
            activeIndex,
            setActiveIndex,
            getItemProps,
            setHasFocusInside,
            isOpen,
          }}
        >
          <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
            {isOpen && (
              <FloatingPortal>
                <FloatingFocusManager
                  context={context}
                  modal={false}
                  initialFocus={isNested ? -1 : 0}
                  returnFocus={!isNested}
                >
                  <ActionMenuContainer
                    ref={refs.setFloating}
                    style={floatingStyles}
                    id={`${id}-menu-container`}
                    data-testid={`${id}-menu-container`}
                    {...getFloatingProps()}
                  >
                    {children}
                  </ActionMenuContainer>
                </FloatingFocusManager>
              </FloatingPortal>
            )}
          </FloatingList>
        </ActionMenuContext.Provider>
      </FloatingNode>
    );
  }
);
