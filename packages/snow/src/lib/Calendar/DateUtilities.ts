const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DateUtilities = {
  pad: (value: string, length: number) => {
    while (value.length < length) value = '0' + value;
    return value;
  },

  clone: (date: Date) => {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    );
  },

  toString: (date?: Date) => {
    if (!date) {
      return '';
    }
    return (
      DateUtilities.pad((date.getMonth() + 1).toString(), 2) +
      '/' +
      DateUtilities.pad(date.getDate().toString(), 2) +
      '/' +
      date.getFullYear()
    );
  },

  toDayOfMonthString: (date: Date) => {
    return DateUtilities.pad(date.getDate().toString(), 0);
  },

  toMonthAndYearString: (date: Date) => {
    return months[date.getMonth()] + ' ' + date.getFullYear();
  },
  toMonthString: (date: Date) => {
    return months[date.getMonth()];
  },

  toYearString: (date: Date) => {
    return date.getFullYear();
  },

  moveToDayOfWeek: (date: Date, dayOfWeek: number) => {
    while (date.getDay() !== dayOfWeek) date.setDate(date.getDate() - 1);
    return date;
  },

  isSameDay: (first: Date, second: Date) => {
    return (
      first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth() &&
      first.getDate() === second.getDate()
    );
  },

  isBefore: (first: Date, second: Date) => {
    return first.getTime() < second.getTime();
  },

  isAfter: (first: Date, second: Date) => {
    return first.getTime() > second.getTime();
  },
  isMonthGreaterOrEqual: (date1: Date, date2: Date) => {
    const formattedDate1 = new Date(date1.getFullYear(), date1.getMonth(), 1);
    const formattedDate2 = new Date(date2.getFullYear(), date2.getMonth(), 1);
    return formattedDate1 >= formattedDate2;
  },
  getPreviousYears: (startYear?: number) => {
    const currentYear = new Date().getFullYear();
    const years = [];
    let beginYear = startYear || 1980;
    while (beginYear <= currentYear) {
      years.push(beginYear++);
    }

    return years;
  },
  getAllMonths: () => {
    return months;
  },
  getTimeFromDate: (date: string) => {
    const length = date.length;
    const time = date.slice(length - 4, length);
    const hh = time.slice(0, 2);
    const ss = time.slice(2, 4);
    return hh + ':' + ss;
  },
};

export default DateUtilities;
