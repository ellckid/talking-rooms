import { useAppSelector } from "../../redux/store.ts";
import { selectNextTodayMeetingsIdsByCalendarId } from "../../redux/meetingsSlice.ts";
import { MeetingByCalendarId } from "../MeetingByCalendarId/MeetingByCalendarId.tsx";
import { BlockContainer } from "./BlockContainer.tsx";
import { TitleContainer } from "./TitleContainer.tsx";
import { Title } from "./Title.tsx";
import { Button } from "./Button.tsx";
import { useState } from "react";
import { VisibleMeetingsContainer } from "./VisibleMeetingsContainer.tsx";
import { RoomStatus } from "../RoomStatus/RoomStatus.tsx";

interface ConferenceRoomProps {
  meetingRoom: { calendarId: number; meetingRoomName: string };
}

export const ConferenceRoom = ({ meetingRoom }: ConferenceRoomProps) => {
  const meetingIdsByCalendarId = useAppSelector((state) =>
    selectNextTodayMeetingsIdsByCalendarId(state, meetingRoom.calendarId),
  );
  const [isHidden, setIsHidden] = useState(true);

  return (
    <BlockContainer>
      <TitleContainer>
        <Title>{meetingRoom.meetingRoomName}</Title>
        <RoomStatus meetingId={meetingIdsByCalendarId![0]} />
      </TitleContainer>
      {meetingIdsByCalendarId && meetingIdsByCalendarId.length > 0 ? (
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
      ) : (
        <span>сосамба нету митингов</span>
      )}
    </BlockContainer>
  );
};
