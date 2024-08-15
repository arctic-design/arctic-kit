'use client';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import {
  autoUpdate,
  size,
  flip,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  FloatingFocusManager,
  FloatingPortal,
} from '@floating-ui/react';

import { TextInput, TextInputProps } from '../TextInput';
import { SelectMenu } from '../Select/StyledElements';
import { OptionType } from '../types';
import { Item } from './Item';

export type AutocompleteProps = Omit<TextInputProps, 'onChange'> & {
  options: ReadonlyArray<string | OptionType>;
  onChange?: (value: string) => void;
};

export function Autocomplete({
  placeholder = 'Type to search',
  size: inputSize = 'medium',
  options = [],
  value,
  onChange,
  disabled,
  readOnly,
  ...otherProps
}: AutocompleteProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const listRef = useRef<Array<HTMLElement | null>>([]);

  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      flip({ padding: 10 }),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const role = useRole(context, { role: 'listbox' });
  const dismiss = useDismiss(context);
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, dismiss, listNav]
  );

  useEffect(() => {
    if (!open && inputValue) {
      const filteredItems = options.map((item) =>
        typeof item === 'string' ? item : item.value
      );

      if (filteredItems.includes(inputValue)) {
        setInputValue(inputValue);
        onChange?.(inputValue);
      } else {
        setInputValue('');
        onChange?.('');
      }
    }
  }, [open, inputValue, onChange, options]);

  const onInputValueChange = useCallback((option: string | OptionType) => {
    const value = typeof option === 'string' ? option : option.value;
    setInputValue(value);
  }, []);

  const onTextChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);

      if (value) {
        setOpen(true);
        setActiveIndex(0);
      } else {
        setOpen(false);
      }
    },
    []
  );

  const items = useMemo(
    () =>
      options.filter((option) =>
        typeof option === 'string'
          ? option.toLowerCase().includes(inputValue.toLowerCase())
          : option.label.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [options, inputValue]
  );

  return (
    <>
      <TextInput
        {...getReferenceProps({
          ref: refs.setReference,
          onChange: onTextChange,
          value: inputValue,
          placeholder,
          disabled,

          role: 'textbox',
          'aria-autocomplete': 'none',
          autoComplete: 'off',
          onKeyDown(event) {
            if (
              event.key === 'Enter' &&
              activeIndex != null &&
              items[activeIndex]
            ) {
              onInputValueChange(items[activeIndex]);

              setActiveIndex(null);
              setOpen(false);
            }
          },
          onClick() {
            setOpen(true);
          },
        })}
        size={inputSize}
        readOnly={readOnly}
        {...otherProps}
      />

      <FloatingPortal>
        {open && !readOnly && (
          <FloatingFocusManager
            context={context}
            initialFocus={-1}
            visuallyHiddenDismiss
          >
            <SelectMenu
              inputsize={inputSize}
              {...getFloatingProps({
                ref: refs.setFloating,
                style: {
                  ...floatingStyles,
                },
              })}
            >
              {items.map((item, index) => {
                const key = typeof item === 'string' ? item : item.value;
                const itemProps = {
                  ...getItemProps({
                    ref(node) {
                      listRef.current[index] = node;
                    },
                    onClick() {
                      onInputValueChange(item);
                      setOpen(false);
                      refs.domReference.current?.focus();
                    },
                  }),
                };

                return (
                  <Item key={key} {...itemProps} active={activeIndex === index}>
                    {typeof item === 'string' ? item : item.label}
                  </Item>
                );
              })}
            </SelectMenu>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
}
