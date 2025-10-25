import { useState } from "react";
import { MeetingByCalendarId } from "../MeetingByCalendarId/MeetingByCalendarId.tsx";
import * as S from "./ConferenceRoomMeetings.styled.ts";

interface ConferenceRoomMeetingsProps {
  meetingIdsByCalendarId: string[] | null;
}

export const ConferenceRoomMeetings = ({
  meetingIdsByCalendarId,
}: ConferenceRoomMeetingsProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const isMeetingsExist =
    meetingIdsByCalendarId && meetingIdsByCalendarId.length;

  return (
    <>
      {isMeetingsExist && (
        <>
          <S.VisibleMeetingsContainer isHidden={isHidden}>
            {meetingIdsByCalendarId.map((meetingId, index) => (
              <MeetingByCalendarId
                meetingId={meetingId}
                key={meetingId}
                indexOfMeeting={index}
                amountOfMeetings={meetingIdsByCalendarId.length}
              />
            ))}
          </S.VisibleMeetingsContainer>
          <S.Button onClick={() => setIsHidden((prev) => !prev)}>
            Посмотреть расписание
          </S.Button>
        </>
      )}
      {!isMeetingsExist && <span>сосамба нету митингов</span>}
    </>
  );
};
