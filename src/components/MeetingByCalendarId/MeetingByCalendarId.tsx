import { FirstMeeting } from "../FirstMeeting/FirstMeeting.tsx";
import { TodayMeeting } from "../TodayMeeting/TodayMeeting.tsx";
import { AmountOfMeetingsTitle } from "../FirstMeeting/AmountOfMeetingsTitle.tsx";

interface MeetingByCalendarIdProps {
  meetingId: string;
  indexOfMeeting: number;
  amountOfMeetings: number;
}

export const MeetingByCalendarId = ({
  meetingId,
  indexOfMeeting,
  amountOfMeetings,
}: MeetingByCalendarIdProps) => {
  return (
    <>
      {/* TODO: со звездочкой, можно на чистом css */}
      {indexOfMeeting === 0 ? (
        <>
          <FirstMeeting meetingId={meetingId} />
          <AmountOfMeetingsTitle>
            Расписание на сегодня (Встреч: {amountOfMeetings})
          </AmountOfMeetingsTitle>
        </>
      ) : (
        <TodayMeeting meetingId={meetingId} />
      )}
    </>
  );
};
