import { isPast, isWithinInterval } from "date-fns";
import { useAppSelector } from "../redux/store.ts";
import { selectMeetingById } from "../redux/meetingsSlice.ts";

export const useGetStatusOfMeeting = (meetingId: string) => {
  const meeting = useAppSelector((state) =>
    selectMeetingById(state, meetingId),
  );
  if (!meeting) {
    return "Встречи нет";
  }

  const { startDate, endDate } = meeting;

  if (startDate && endDate) {
    const isOngoing = isWithinInterval(new Date(), {
      start: startDate,
      end: endDate,
    });
    if (isOngoing) {
      return "текущая";
    } else if (isPast(startDate!)) {
      return "прошедшая";
    }

    return "предстоящая";
  }
};
