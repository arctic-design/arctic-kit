'use client';
import { CalendarDaysIcon } from '@arctic-kit/icons/solid';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import { useState } from 'react';
import { Calendar } from '../Calendar/Calendar';

import DateUtilities from '../Calendar/DateUtilities';
import { Container, PlaceHolderContainer } from './StyledElements';

export type DatePickerProps = {
  value?: Date;
  onChange?: (date?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  id?: string;
};
export function DatePicker({
  value,
  onChange,
  minDate,
  maxDate,
  id = 'date-input',
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  const handleDaySelect = (selectedDate: Date) => {
    onChange && onChange(selectedDate);

    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen} placement="bottom-end">
      <PopoverTrigger onClick={() => setOpen((v) => !v)} asChild>
        <Container id={`${id}-trigger`} data-testid={`${id}-trigger`}>
          {!value ? (
            <PlaceHolderContainer>MM/DD/YYYY</PlaceHolderContainer>
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
  );
}
