import { FirstMeeting } from "../FirstMeeting/FirstMeeting.tsx";
import { TodayMeeting } from "../TodayMeeting/TodayMeeting.tsx";
import * as S from "./MeetingByCalendarId.styled.ts";

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
          <S.AmountOfMeetingsTitle>
            Расписание на сегодня (Встреч: {amountOfMeetings})
          </S.AmountOfMeetingsTitle>
        </>
      )}
      {indexOfMeeting !== 0 && <TodayMeeting meetingId={meetingId} />}
    </>
  );
};
