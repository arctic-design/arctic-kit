'use client';
import { Calendar, DatePicker } from '@arctic-kit/snow';
import { useState } from 'react';

export function CalendarView() {
  const [value, setValue] = useState(new Date());

  const handleDaySelect = (selectedDate: Date) => {
    setValue(selectedDate);
  };

  return (
    <>
      <Calendar selected={value} onSelect={handleDaySelect} />
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <DatePicker
          value={value}
          onChange={(changedValue) =>
            handleDaySelect(changedValue ?? new Date())
          }
        />
      </div>
    </>
  );
}
