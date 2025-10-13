import { FirstMeeting } from "../FirstMeeting/FirstMeeting.tsx";
import { TodayMeeting } from "../TodayMeeting/TodayMeeting.tsx";

interface MeetingProps {
  meetingId: string;
  indexOfMeeting: number;
  amountOfMeetings: number;
  isHidden: boolean;
}

export const MeetingByRoom = ({
  meetingId,
  indexOfMeeting,
  amountOfMeetings,
  isHidden,
}: MeetingProps) => {
  return (
    <div>
      {indexOfMeeting === 0 ? (
        <FirstMeeting
          meetingId={meetingId}
          amountOfMeetings={amountOfMeetings}
        />
      ) : (
        <TodayMeeting
          meetingId={meetingId}
          indexOfMeeting={indexOfMeeting}
          isHidden={isHidden}
        />
      )}
    </div>
  );
};
