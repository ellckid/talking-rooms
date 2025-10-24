import { isPast } from "date-fns";
import { useAppSelector } from "../redux/store.ts";
import { selectMeetingById } from "../redux/meetingsSlice.ts";
import { useIsMeetingOngoingById } from "./useIsMeetingOngoingById.ts";

export const useGetStatusOfMeeting = (meetingId: string) => {
  const meeting = useAppSelector((state) =>
    selectMeetingById(state, meetingId),
  );
  const isOngoing = useIsMeetingOngoingById(meetingId);
  if (!meeting) {
    return "Встречи нет";
  }
  const { startDate, endDate } = meeting;

  if (startDate && endDate) {
    if (isOngoing) {
      return "текущая";
    } else if (isPast(startDate!)) {
      return "прошедшая";
    }

    return "предстоящая";
  }
};
