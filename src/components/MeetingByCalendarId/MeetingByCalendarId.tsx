import { FirstMeeting } from "../FirstMeeting/FirstMeeting.tsx";
import { TodayMeeting } from "../TodayMeeting/TodayMeeting.tsx";

interface MeetingProps {
  meetingId: string;
  indexOfMeeting: number;
  amountOfMeetings: number;
}

export const MeetingByCalendarId = ({
  meetingId,
  indexOfMeeting,
  amountOfMeetings,
}: MeetingProps) => {
  return (
    <div>
      {indexOfMeeting === 0 ? (
        <FirstMeeting
          meetingId={meetingId}
          amountOfMeetings={amountOfMeetings}
        />
      ) : (
        <TodayMeeting meetingId={meetingId} />
      )}
    </div>
  );
};
