import { useAppSelector } from "../redux/store.ts";
import { selectMeetingById } from "../redux/meetingsSlice.ts";
import { getTimeRange } from "../functions/getTimeRange.ts";
import { getStatusOfMeeting } from "../functions/getStatusOfMeeting.ts";

interface MeetingProps {
  meetingId: string;
}

export const Meeting = ({ meetingId }: MeetingProps) => {
  const meeting = useAppSelector((state) =>
    selectMeetingById(state, meetingId),
  );

  return (
    <div>
      <span>{meeting?.title} </span>
      <span>{meeting?.who}</span>
      <span>{getTimeRange(meeting?.startDate, meeting?.endDate)}</span>
      <span> {getStatusOfMeeting(meeting?.startDate, meeting?.endDate)}</span>
    </div>
  );
};
