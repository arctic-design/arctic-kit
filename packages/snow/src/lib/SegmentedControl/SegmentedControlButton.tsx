'use client';
import { ReactNode, forwardRef } from 'react';
import { Button } from './StyledElements';
import { useSegmentedControl } from './SegmentedControlContext';
import { Tooltip } from '../Tooltip';

export interface SegmentedControlButtonProps {
  index?: number;
  children: ReactNode;
  onClick?: () => void;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  disabled?: boolean;
  tooltipMessage?: string;
}

const SegmentedControlButton = forwardRef<
  HTMLButtonElement,
  SegmentedControlButtonProps
>(
  (
    {
      children,
      index,
      leadingIcon,
      trailingIcon,
      onClick,
      disabled = false,
      tooltipMessage,
      ...otherProps
    }: SegmentedControlButtonProps,
    ref
  ) => {
    const { selectedIndex, setSelectedIndex, color } = useSegmentedControl();
    const isActive = index === selectedIndex;

    const handleClick = () => {
      if (index !== undefined) {
        setSelectedIndex(index);
      }
      onClick?.();
    };

    const buttonElement = (
      <Button
        ref={ref}
        onClick={handleClick}
        color={color}
        aria-selected={isActive}
        disabled={disabled}
        id={`segmented-control-button-${index}`}
        data-testid={`segmented-control-button-${index}`}
        {...otherProps}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </Button>
    );

    return tooltipMessage ? (
      <Tooltip
        id={`segmented-control-tooltip-${index}`}
        message={tooltipMessage}
      >
        {buttonElement}
      </Tooltip>
    ) : (
      buttonElement
    );
  }
);

SegmentedControlButton.displayName = 'SegmentedControlButton';

export { SegmentedControlButton };
