import dayjs from "dayjs";
import { TeamCalendar } from "@/types/types";

export const formatDate = (utcDate: string | number): string => {
  return dayjs(utcDate).format("YYYY-MM-DD");
};

export const formatDateRange = (start: string, end: string): string[] | [] => {
  const startDateParse = Date.parse(start);
  const endDateParse = Date.parse(end);
  const result = [];

  for (let i = startDateParse; i < endDateParse; i = i + 24 * 60 * 60 * 1000) {
    result.push(formatDate(i));
  }
  return result;
};

export const filterCalendarForDate = (
  start: string,
  end: string,
  list: Array<TeamCalendar>,
  dateRange: string[]
): TeamCalendar[] => {
  return list?.filter((el) => {
    for (let i = 0; i < dateRange.length; i += 1) {
      const date: string | null = dateRange[i];
      if (formatDate(el.utcDate).includes(date)) return list;
    }
  });
};
