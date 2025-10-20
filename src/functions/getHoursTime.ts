import { format } from "date-fns";

export const getHoursTime = (date: string | undefined) => {
  if (date) {
    return format(date, "HH:mm");
  }
};
