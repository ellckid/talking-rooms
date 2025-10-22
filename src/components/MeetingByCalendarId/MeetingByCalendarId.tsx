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
      {indexOfMeeting === 0 && (
        <>
          <FirstMeeting meetingId={meetingId} />
          <AmountOfMeetingsTitle>
            Расписание на сегодня (Встреч: {amountOfMeetings})
          </AmountOfMeetingsTitle>
        </>
      )}
      {indexOfMeeting !== 0 && <TodayMeeting meetingId={meetingId} />}
    </>
  );
};
