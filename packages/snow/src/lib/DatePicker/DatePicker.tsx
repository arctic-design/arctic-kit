'use client';
import { CalendarDaysIcon } from '@arctic-kit/icons/solid';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import { useId, useState } from 'react';
import { Calendar } from '../Calendar/Calendar';

import DateUtilities from '../Calendar/DateUtilities';
import { Container, PlaceHolderContainer } from './StyledElements';
import { Typography } from '../Typography';
import { Stack } from '../Layout';
import { SnowSize } from '../types';

export type DatePickerProps = {
  value?: Date;
  onChange?: (date?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  id?: string;
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  size?: SnowSize;
};
export function DatePicker({
  value,
  onChange,
  minDate,
  maxDate,
  id = 'date-input',
  label,
  disabled,
  readOnly,
  placeholder,
  size,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  const handleDaySelect = (selectedDate: Date) => {
    onChange && onChange(selectedDate);

    setOpen(false);
  };

  const uniqueId = useId();
  const fieldId = id || uniqueId;

  return (
    <Stack>
      <Typography
        htmlFor={fieldId}
        as="label"
        aria-disabled={disabled}
        aria-readonly={readOnly ? true : undefined}
      >
        {label}
      </Typography>
      <Popover open={open} onOpenChange={setOpen} placement="bottom-end">
        <PopoverTrigger onClick={() => setOpen((v) => !v)} asChild>
          <Container
            id={`${id}-trigger`}
            data-testid={`${id}-trigger`}
            size={size}
          >
            {!value ? (
              <PlaceHolderContainer>
                {placeholder || 'MM/DD/YYYY'}
              </PlaceHolderContainer>
            ) : (
              DateUtilities.toString(value)
            )}
            <CalendarDaysIcon />
          </Container>
        </PopoverTrigger>
        <PopoverContent id={`${id}-content`}>
          <Calendar
            minDate={minDate}
            maxDate={maxDate}
            selected={value}
            onSelect={handleDaySelect}
            hasBorder={false}
            id={`${id}-content-calendar`}
          />
        </PopoverContent>
      </Popover>
    </Stack>
  );
}
