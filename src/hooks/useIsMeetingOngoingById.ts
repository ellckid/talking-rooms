import { isValid, isWithinInterval } from "date-fns";
import { useAppSelector } from "../redux/store.ts";
import { selectMeetingById } from "../redux/meetingsSlice.ts";

export const useIsMeetingOngoingById = (
  meetingId: string | null | undefined,
) => {
  const meeting = useAppSelector((state) =>
    selectMeetingById(state, meetingId!),
  );

  if (!meetingId || !meeting) {
    return false;
  }

  if (
    meeting!.startDate &&
    meeting!.endDate &&
    isValid(new Date(meeting.startDate)) &&
    isValid(new Date(meeting.endDate))
  ) {
    return isWithinInterval(new Date(), {
      start: meeting!.startDate,
      end: meeting!.endDate,
    });
  }
};
