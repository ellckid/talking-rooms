import { isPast, isWithinInterval } from "date-fns";

export const getStatusOfMeeting = (
  startDate: string | undefined,
  endDate: string | undefined,
) => {
  if (startDate && endDate) {
    const isOngoing = isWithinInterval(new Date(), {
      start: startDate,
      end: endDate,
    });
    if (isOngoing) {
      return "текущая";
    } else if (isPast(startDate!)) {
      return "прошедщая";
    }

    return "предстоящая";
  }

  return "Встречи нет";
};
