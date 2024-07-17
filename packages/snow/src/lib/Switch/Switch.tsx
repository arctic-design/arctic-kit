'use client';
import { motion } from 'framer-motion';
import { styled } from '@pigment-css/react';
import { DefaultSnowProps, SnowColor, SnowColorValues } from '../types';
import { ELEVATION_STYLE } from '../constants';
import { SnowThemeArgs } from '../../core';

const DefaultSize = 20;
const SwitchSizeMap = {
  small: DefaultSize - 4,
  medium: DefaultSize,
  large: DefaultSize + 4,
};

const Container = styled.div(({ theme }: SnowThemeArgs) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: theme.font.family.base,
  fontSize: theme.font.size[100],
}));

const SwitchContainer = styled.div<{
  switched: boolean;
  height: number;
  color?: SnowColor;
}>(({ theme }: SnowThemeArgs) => ({
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  width: ({ height }) => height * 2,
  height: ({ height }) => height,
  borderRadius: ({ height }) => height / 2,

  margin: 8,
  border: 'none',

  '&:hover': {
    borderColor: theme.colors.grey[700],
  },
  variants: [
    ...SnowColorValues.map((color) => ({
      props: { color },
      style: {
        background: theme.colors[color].main,
        "&[aria-disabled='true']": {
          background: theme.colors[color][200],
          borderColor: theme.colors.grey[400],
        },
        "&[aria-readonly='true']": {
          background: theme.colors[color][300],
          borderColor: theme.colors.grey[400],
        },
      },
    })),
    {
      props: { switched: false },
      style: {
        backgroundColor: theme.colors.neutral[0],
        border: `1px solid ${theme.colors.grey[400]}`,
        "&[aria-disabled='true']": {
          background: theme.colors.grey[100],
        },
        "&[aria-readonly='true']": {
          background: theme.colors.grey[200],
          borderColor: theme.colors.grey[400],
        },
      },
    },
  ],
}));

const SwitchElement = styled.div<{ switched: boolean }>({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  padding: 2,
  cursor: 'pointer',
  alignItems: 'center',
  "&[aria-disabled='true']": {
    cursor: 'not-allowed',
  },

  "&[aria-readonly='true']": {
    cursor: 'default',
  },
  variants: [
    {
      props: { switched: true },
      style: {
        justifyContent: 'flex-end',
      },
    },
  ],
});

const HandleElement = styled.div<{
  height: number;
  switched: boolean;
  color?: SnowColor;
}>(({ theme }: SnowThemeArgs) => ({
  width: ({ height }) => height - 6,
  height: ({ height }) => height - 6,
  backgroundColor: theme.colors.grey[900],

  borderRadius: '50%',
  "&[aria-disabled='true']": {
    borderColor: theme.colors.grey[400],
  },
  variants: [
    {
      props: { switched: true },
      style: {
        backgroundColor: theme.colors.neutral[0],
        "&[aria-disabled='true']": {
          borderColor: theme.colors.grey[100],
        },
      },
    },
  ],
}));

const MotionSwitchContainer = motion(SwitchContainer);
const MotionHandleElement = motion(HandleElement);

const noOp = () => {
  return '';
};

export type SwitchProps = DefaultSnowProps & {
  label?: string;
  checked?: boolean;
  onToggle?: () => void;
  readOnly?: boolean;
};

function Switch({
  label = '',
  size = 'medium',
  color = 'primary',
  checked = false,
  onToggle,
  disabled = false,
  id = 'switch',
  readOnly = false,
}: SwitchProps) {
  const height = size ? SwitchSizeMap[size] : DefaultSize;

  return (
    <Container data-testid={`${id}-container`} id={`${id}-container`}>
      <MotionSwitchContainer
        switched={checked}
        height={height}
        color={color}
        whileHover={!disabled ? ELEVATION_STYLE : {}}
        aria-disabled={disabled}
        data-testid={`motion-${id}-container`}
        id={`motion-${id}-container`}
        aria-readonly={readOnly ? 'true' : undefined}
      >
        <SwitchElement
          switched={checked}
          aria-disabled={disabled}
          aria-readonly={readOnly ? 'true' : undefined}
          onClick={!disabled && !readOnly ? onToggle : noOp}
          role="button"
          data-testid={`${id}-element`}
          id={`${id}-element`}
        >
          <MotionHandleElement
            switched={checked}
            height={height}
            layout
            transition={!disabled ? spring : {}}
            aria-disabled={disabled}
            data-testid={`${id}-handle-element`}
            id={`${id}-handle-element`}
          />
        </SwitchElement>
      </MotionSwitchContainer>
      {label && (
        <span data-testid={`${id}-label`} id={`${id}-label`}>
          {label}
        </span>
      )}
    </Container>
  );
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export { Switch };
