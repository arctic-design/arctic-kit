'use client';
import { styled, SxProp } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';
import { LayoutSpacingType, Stack } from '../Layout';
import { SpacingMap } from '../Layout/constants';
import { createContext, useContext, useState } from 'react';
import { SnowColor, SnowColorValues } from '../types';
export type ToggleGroupProps = {
  children: React.ReactNode;
  spacing?: LayoutSpacingType;
  sx?: SxProp;
  withBorder?: boolean;
  singleSelect?: boolean;
  color?: SnowColor;
};

interface ToggleGroupContextProps {
  selectedValues: string[];
  toggleValue: (value: string) => void;
  singleSelect: boolean;
}

const ToggleGroupContext = createContext<ToggleGroupContextProps | undefined>(
  undefined
);

const Container = styled.div<
  Omit<ToggleGroupProps, 'children'> & { role: string }
>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'stretch',
  gap: 0,
  color: theme.colors.grey[800],
  '.item': {
    cursor: 'pointer',
    borderRadius: theme.border.radius.main,
    padding: `${4 * 2}px`,
    '&:hover': {
      backgroundColor: theme.colors.grey[200],
    },

    '&.active': {
      backgroundColor: theme.colors.grey[200],
      color: theme.colors.grey[900],
    },
  },
  variants: [
    ...SpacingMap.filter((item) => item > 0).map((spacing) => ({
      props: { spacing },
      style: {
        gap: `${spacing * 4}px`,
        '.item': {
          padding: `${spacing * 4 * 2}px`,
        },
      },
    })),
    ...SpacingMap.filter((item) => item > 0).map((spacing) => ({
      props: { spacing, withBorder: true },
      style: {
        '.item': {
          border: `2px solid ${theme.colors.grey[200]}`,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },

          '&.active': {
            borderColor: theme.colors.grey[800],
            backgroundColor: 'transparent',
          },
        },
      },
    })),
    {
      props: { spacing: 0, withBorder: false },
      style: {
        borderRadius: theme.border.radius.main,
        '.item': {
          borderWidth: 0,
          borderRightWidth: 2,
          borderRadius: 0,

          '&:last-child': {
            borderRightWidth: 0,
            borderTopRightRadius: theme.border.radius.main,
            borderBottomRightRadius: theme.border.radius.main,
          },
          '&:first-child': {
            borderTopLeftRadius: theme.border.radius.main,
            borderBottomLeftRadius: theme.border.radius.main,
          },
        },
      },
    },
    {
      props: { spacing: 0, withBorder: true },
      style: {
        borderRadius: theme.border.radius.main,
        border: `2px solid ${theme.colors.grey[200]}`,
        '.item': {
          borderRadius: 0,
        },
      },
    },

    ...SnowColorValues.map((color) => ({
      props: { color },
      style: {
        color: theme.colors[color][800],
        '.item': {
          '&:hover': {
            backgroundColor: theme.colors[color][50],
          },

          '&.active': {
            backgroundColor: theme.colors[color][100],
            color: theme.colors[color][800],
          },
        },
      },
    })),
    ...SnowColorValues.map((color) => ({
      props: { color, withBorder: true },
      style: {
        '.item': {
          borderColor: theme.colors[color][200],
          borderWidth: 0.5,
          '&.active': {
            borderColor: theme.colors[color][700],
          },
        },
      },
    })),
    ...SnowColorValues.map((color) => ({
      props: { color, withBorder: true, spacing: 0 },
      style: {
        borderColor: theme.colors[color][200],
        borderRadius: theme.border.radius.main,
        borderWidth: 0.5,
        '.item': {
          borderColor: 'none',
          borderWidth: 0,
          borderRadius: 0,

          '&:last-child': {
            borderRightWidth: 0.5,
            borderTopRightRadius: theme.border.radius.main,
            borderBottomRightRadius: theme.border.radius.main,
          },
          '&:first-child': {
            borderTopLeftRadius: theme.border.radius.main,
            borderBottomLeftRadius: theme.border.radius.main,
          },
          '&.active': {
            borderColor: theme.colors[color][700],
          },
        },
      },
    })),
  ],
}));

const ToggleGroupItemContainer = styled(Stack)<{
  onClick: () => void;
  role: string;
  'aria-pressed'?: boolean;
  'aria-checked'?: boolean;
}>({
  flex: 1,
  transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
  variants: [
    ...SpacingMap.map((spacing) => ({
      props: { spacing },
      style: {
        padding: `${spacing * 4}px`,
      },
    })),
  ],
});

export type ToggleGroupItemProps = {
  children: React.ReactNode;
  spacing?: LayoutSpacingType;
  value: string;
};

export function ToggleGroup({
  children,
  spacing = 0,
  singleSelect = false,
  ...otherProps
}: ToggleGroupProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const toggleValue = (value: string) => {
    setSelectedValues((prev) => {
      if (singleSelect) {
        // If singleSelect is true, allow only one selection
        return prev.includes(value) ? [] : [value];
      } else {
        // If multiple selection is allowed
        return prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value];
      }
    });
  };

  const contextValue: ToggleGroupContextProps = {
    selectedValues,
    toggleValue,
    singleSelect,
  };

  const role = singleSelect ? 'radiogroup' : 'group';

  return (
    <ToggleGroupContext.Provider value={contextValue}>
      <Container
        spacing={spacing}
        role={role}
        aria-label="Toggle Group"
        {...otherProps}
      >
        {children}
      </Container>
    </ToggleGroupContext.Provider>
  );
}

export function ToggleGroupItem({
  children,
  spacing,
  value,
}: Omit<ToggleGroupItemProps, 'sx'>) {
  const context = useContext(ToggleGroupContext);
  if (!context) {
    throw new Error('ToggleGroupItem must be used within a ToggleGroup');
  }

  const { selectedValues, toggleValue, singleSelect } = context;

  const isActive = selectedValues.includes(value);

  const handleClick = () => {
    toggleValue(value);
  };

  const roleAttr = singleSelect ? 'radio' : 'button';
  const ariaPressed = singleSelect ? undefined : isActive;
  const ariaChecked = singleSelect ? isActive : undefined;

  return (
    <ToggleGroupItemContainer
      spacing={spacing}
      className={`item${isActive ? ' active' : ''}`}
      onClick={handleClick}
      role={roleAttr}
      aria-pressed={ariaPressed}
      aria-checked={ariaChecked}
      tabIndex={0}
      centerAlign
      onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      data-testid={`toggle-item-${value}`}
    >
      {children}
    </ToggleGroupItemContainer>
  );
}
