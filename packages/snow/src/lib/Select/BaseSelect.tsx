'use client';
import React, { useEffect, useRef, useState, useId } from 'react';
import { styled } from '@pigment-css/react';
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  useInteractions,
  FloatingFocusManager,
  offset,
  flip,
  size,
  autoUpdate,
  FloatingPortal,
} from '@floating-ui/react';

import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { SnowColor, SnowSize } from '../types';
import InputContainer from './InputContainer';
import { BaseSelectProps, SelectKeyValue } from './types';
import { Typography } from '../Typography';
import { HelperText } from '../HelperText';
import clsx from 'clsx';
import { RequiredIndicator } from '../Indicators';
import { SnowThemeArgs } from '../../core';
import {
  IconSeparator,
  SearchBox,
  SelectCloseContainer,
  SelectContainer,
  SelectIndicator,
  SelectIndicators,
  SelectInput,
  SelectInputContent,
  SelectInputTagItem,
  SelectInputTags,
  SelectMenu,
  SelectValueContainer,
  TagLabel,
} from './StyledElements';

const SelectControl = styled(InputContainer)<{
  color?: SnowColor;
  inputsize?: SnowSize;
  clearable?: boolean;
}>(({ theme }: SnowThemeArgs) => ({
  alignItems: 'center',
  cursor: 'default',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  position: 'relative',
  transition: 'all 100ms ease 0s',
  fontSize: '0.875rem',

  '&.error': {
    borderColor: theme.colors.error[500],
  },
}));

const TypeComparer = (option: SelectKeyValue, key: 'label' | 'value') =>
  typeof option === 'string' ? option : option[key];

const EqualityCheck = (option1: SelectKeyValue, option2: SelectKeyValue) =>
  TypeComparer(option1, 'value') === TypeComparer(option2, 'value');

const InEqualityCheck = (option1: SelectKeyValue, option2: SelectKeyValue) =>
  TypeComparer(option1, 'value') !== TypeComparer(option2, 'value');

const BaseSelect: React.FC<BaseSelectProps> = (props: BaseSelectProps) => {
  const {
    placeholder,
    options,
    multiple,
    searchable,
    onChange,
    value,
    label,
    clearable = true,
    fullWidth = true,
    size: SelectSize,
    id = 'base-select',
    errorText,
    required,
  } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const [selectedValue, setSelectedValue] = useState<SelectKeyValue[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const error = !!errorText;

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-start',
    open: showMenu,
    onOpenChange: (_open: boolean, _event, reason) => {
      if (reason === 'outside-press' || reason === 'escape-key') {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    },
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const listRef = React.useRef<Array<HTMLElement | null>>([]);
  // const isTypingRef = React.useRef(false);
  const uniqueId = useId();
  const controlId = id || uniqueId;
  const click = useClick(context, { event: 'mousedown' });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,

    onNavigate: setActiveIndex,
    // This is a large list, allow looping.
    loop: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [dismiss, role, listNav, click]
  );

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
    }
  }, [value]);

  useEffect(() => {
    setSearchValue('');
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return <TagLabel className="single placeholder">{placeholder}</TagLabel>;
    }

    if (multiple) {
      return (
        <SelectInputTags>
          {selectedValue.map((option) => (
            <SelectInputTagItem
              key={TypeComparer(option, 'value')}
              inputsize={SelectSize}
            >
              <TagLabel>{TypeComparer(option, 'label')}</TagLabel>
              <SelectCloseContainer
                className="multiple"
                onClick={(e) => onTagRemove(e, option)}
              >
                <XMarkIcon />
              </SelectCloseContainer>
            </SelectInputTagItem>
          ))}
        </SelectInputTags>
      );
    }

    return (
      <TagLabel className="single">
        {TypeComparer(selectedValue[0], 'label')}
      </TagLabel>
    );
  };

  const onChangeHandler = (newValue: SelectKeyValue[]) => {
    onChange && onChange(newValue);
  };

  const onItemSelect = (option: SelectKeyValue) => {
    let newValue;

    if (multiple) {
      if (selectedValue.findIndex((o) => EqualityCheck(o, option)) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = [option];
    }

    setSelectedValue(newValue);
    onChangeHandler(newValue);
    setShowMenu(false);
  };

  const isSelected = (option: SelectKeyValue) => {
    if (multiple) {
      return selectedValue.filter((o) => EqualityCheck(o, option)).length > 0;
    }

    if (selectedValue.length === 0) {
      return false;
    }

    return EqualityCheck(selectedValue[0], option);
  };

  const removeOption = (option: SelectKeyValue) => {
    return selectedValue.filter((o) => InEqualityCheck(o, option));
  };

  const onTagRemove = (
    event: React.MouseEvent<HTMLElement>,
    option: SelectKeyValue
  ) => {
    event.preventDefault();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChangeHandler(newValue);
  };

  const onClearSelected = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setSelectedValue([]);
    onChangeHandler([]);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  const getOptions = () => {
    if (!searchValue) {
      return options;
    }
    return options.filter(
      (option) =>
        TypeComparer(option, 'label')
          .toLowerCase()
          .indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  return (
    <SelectContainer
      data-fullwidth={fullWidth}
      id={`${id}-container`}
      data-testid={`${id}-container`}
    >
      {label && (
        <Typography id={controlId} as="label">
          {label} <RequiredIndicator required={required} />
        </Typography>
      )}
      <SelectControl
        className={clsx({ 'menu-visible': showMenu, error })}
        inputsize={SelectSize}
        ref={refs.setReference}
        id={`${id}-control`}
        data-testid={`${id}-control`}
        aria-labelledby={label && `select-${controlId}`}
        clearable={clearable}
        {...getReferenceProps()}
        role="button"
      >
        <SelectValueContainer
          id={`${id}-value-container`}
          data-testid={`${id}-value-container`}
        >
          <SelectInput id={`${id}-input`} data-testid={`${id}-input`}>
            <SelectInputContent
              tabIndex={0}
              ref={refs.setReference}
              aria-label={`select-input-content-${controlId}`}
              id={`${id}-input-content`}
              data-testid={`${id}-input-content`}
              {...getReferenceProps()}
            >
              {getDisplay()}
            </SelectInputContent>
          </SelectInput>
        </SelectValueContainer>
        {showMenu && (
          <FloatingPortal>
            <FloatingFocusManager context={context} modal={false}>
              <SelectMenu
                ref={refs.setFloating}
                inputsize={SelectSize}
                style={{
                  ...floatingStyles,
                  minWidth: 100,
                  outline: 0,
                }}
                id={`${id}-menu`}
                data-testid={`${id}-menu`}
                {...getFloatingProps()}
              >
                {searchable && (
                  <SearchBox
                    id={`${id}-menu-search-box`}
                    data-testid={`${id}-menu-search-box`}
                  >
                    <input
                      onChange={onSearch}
                      value={searchValue}
                      ref={searchRef}
                      id={`${id}-menu-search-box-input`}
                      data-testid={`${id}-menu-search-box-input`}
                    />
                  </SearchBox>
                )}
                {getOptions().map((option: SelectKeyValue, index: number) => (
                  <div
                    ref={(node) => {
                      listRef.current[index] = node;
                    }}
                    role="option"
                    tabIndex={index === activeIndex ? 0 : -1}
                    aria-selected={isSelected(option)}
                    key={TypeComparer(option, 'value') + index}
                    className={`select-menu-item ${
                      isSelected(option) && 'selected'
                    }`}
                    id={`${id}-menu-item-${index}`}
                    data-testid={`${id}-menu-item-${index}`}
                    {...getItemProps({
                      // Handle pointer select.
                      onClick: () => {
                        onItemSelect(option);
                      },

                      // Handle keyboard select.
                      onKeyDown(event) {
                        if (event.key === 'Enter') {
                          event.preventDefault();

                          onItemSelect(option);
                        }

                        if (event.key === ' ') {
                          event.preventDefault();

                          onItemSelect(option);
                        }
                      },
                    })}
                  >
                    {TypeComparer(option, 'label')}
                  </div>
                ))}
              </SelectMenu>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
        <SelectIndicators
          id={`${id}-indicators`}
          data-testid={`${id}-indicators`}
        >
          {selectedValue.length > 0 && clearable && (
            <>
              <SelectIndicator
                id={`${id}-indicator-clear-container`}
                data-testid={`${id}-indicator-clear-container`}
              >
                <SelectCloseContainer
                  onClick={onClearSelected}
                  role="button"
                  aria-hidden="true"
                  id={`${id}-indicator-clear`}
                  data-testid={`${id}-indicator-clear`}
                >
                  <XMarkIcon
                    id={`${id}-indicator-clear-icon`}
                    data-testid={`${id}-indicator-clear-icon`}
                  />
                </SelectCloseContainer>
              </SelectIndicator>
              <IconSeparator />
            </>
          )}

          <SelectIndicator
            id={`${id}-indicator-down-container`}
            data-testid={`${id}-indicator-down-container`}
          >
            <ChevronDownIcon
              id={`${id}-indicator-down-icon`}
              data-testid={`${id}-indicator-down-icon`}
            />
          </SelectIndicator>
        </SelectIndicators>
      </SelectControl>
      {errorText && <HelperText>{errorText}</HelperText>}
    </SelectContainer>
  );
};

export { BaseSelect };
