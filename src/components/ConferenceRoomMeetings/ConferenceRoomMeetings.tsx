import { useState } from "react";
import { VisibleMeetingsContainer } from "./VisibleMeetingsContainer.tsx";
import { MeetingByCalendarId } from "../MeetingByCalendarId/MeetingByCalendarId.tsx";
import { Button } from "./Button.tsx";

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
          <VisibleMeetingsContainer isHidden={isHidden}>
            {meetingIdsByCalendarId.map((meetingId, index) => (
              <MeetingByCalendarId
                meetingId={meetingId}
                key={meetingId}
                indexOfMeeting={index}
                amountOfMeetings={meetingIdsByCalendarId.length}
              />
            ))}
          </VisibleMeetingsContainer>
          <Button onClick={() => setIsHidden((prev) => !prev)}>
            Посмотреть расписание
          </Button>
        </>
      )}
      {!isMeetingsExist && <span>сосамба нету митингов</span>}
    </>
  );
};
