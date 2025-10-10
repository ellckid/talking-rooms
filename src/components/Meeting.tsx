import { useAppSelector } from "../redux/store.ts";
import { selectMeetingById } from "../redux/meetingsSlice.ts";
import { isPast, isWithinInterval } from "date-fns";

interface MeetingProps {
  meetingId: string;
}

export const Meeting = ({ meetingId }: MeetingProps) => {
  const meeting = useAppSelector((state) =>
    selectMeetingById(state, meetingId),
  );

  const getStatusOfMeeting = (
    startDate: string | undefined,
    endDate: string | undefined,
  ) => {
    const isOngoing = isWithinInterval(new Date(), {
      start: startDate!,
      end: endDate!,
    });
    if (isOngoing) {
      return "Текущая";
    } else if (isPast(startDate!)) {
      return "Прошедщая";
    }

    return "Предстоящая";
  };

  return (
    <div>
      <span>{meeting?.title} </span>
      <span>{meeting?.who}</span>
      <span> {getStatusOfMeeting(meeting?.startDate, meeting?.endDate)}</span>
    </div>
  );
};
