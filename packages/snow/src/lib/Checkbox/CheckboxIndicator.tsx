'use client';
import { motion } from 'framer-motion';
import { DefaultSnowProps, ThemeSize } from '../types';
import { ELEVATION_STYLE } from '../constants';

import {
  IndicatorContainer,
  StyledCheckboxInput,
  SvgContainer,
} from './StyledElements';

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const CheckboxInput = motion(StyledCheckboxInput);

type CheckboxIndicatorProps = DefaultSnowProps & {
  name: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  readOnly?: boolean;
  error?: boolean;
};
export function CheckboxIndicator({
  name,
  id = 'checkbox-indicator',
  checked = false,
  onChange,
  color,
  size,
  disabled = false,
  readOnly = false,
  error = false,
}: CheckboxIndicatorProps) {
  return (
    <IndicatorContainer
      id={`${id}-container`}
      data-testid={`${id}-container`}
      aria-disabled={disabled}
      aria-readonly={readOnly ? 'true' : undefined}
    >
      <CheckboxInput
        type="checkbox"
        onChange={() => !readOnly && onChange && onChange(!checked)}
        id={id}
        data-testid={id}
        name={name}
        className={checked ? 'checked' : 'unchecked'}
        color={color}
        inputsize={size}
        whileHover={!disabled && !readOnly ? ELEVATION_STYLE : {}}
        disabled={disabled}
        aria-disabled={disabled}
        checked={checked}
        readOnly={readOnly}
        aria-readonly={readOnly ? 'true' : undefined}
        data-readonly={readOnly}
        error={error}
      />
      <SvgContainer
        checked={checked}
        aria-readonly={readOnly ? 'true' : undefined}
        aria-disabled={disabled}
      >
        <motion.svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
            variants={tickVariants}
          />
        </motion.svg>
      </SvgContainer>
    </IndicatorContainer>
  );
}
