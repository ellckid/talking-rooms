import { getHoursTime } from "./getHoursTime.ts";

export const getTimeRange = (
  startDate: string | undefined,
  endDate: string | undefined,
) => {
  if (startDate && endDate) {
    return `${getHoursTime(startDate)} - ${getHoursTime(endDate)}`;
  }
};
