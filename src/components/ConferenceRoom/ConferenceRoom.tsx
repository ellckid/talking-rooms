import { useAppSelector } from "../../redux/store.ts";
import { selectNextTodayMeetingsIdsByRoom } from "../../redux/meetingsSlice.ts";
import { MeetingByRoom } from "../MeetingByRoom/MeetingByRoom.tsx";
import { BlockContainer } from "./BlockContainer.tsx";
import { TitleContainer } from "./TitleContainer.tsx";
import { Title } from "./Title.tsx";
import { RoomStatus } from "./RoomStatus.tsx";
import { useIsMeetingOngoingById } from "../../hooks/useIsMeetingOngoing.ts";
import { Button } from "./Button.tsx";
import { useState } from "react";

interface ConferenceRoomProps {
  meetingRoom: { meetingRoomId: number; meetingRoomName: string };
}

export const ConferenceRoom = ({ meetingRoom }: ConferenceRoomProps) => {
  const meetingIdsByRoom = useAppSelector((state) =>
    selectNextTodayMeetingsIdsByRoom(state, meetingRoom.meetingRoomId),
  );
  const [isHidden, setIsHidden] = useState(true);

  return (
    <BlockContainer>
      <TitleContainer>
        <Title>{meetingRoom.meetingRoomName}</Title>
        {useIsMeetingOngoingById(meetingIdsByRoom![0]) ? (
          <RoomStatus ongoing>занято</RoomStatus>
        ) : (
          <RoomStatus>свободно</RoomStatus>
        )}
      </TitleContainer>
      {meetingIdsByRoom && meetingIdsByRoom.length > 0 ? (
        <>
          {meetingIdsByRoom.map((meetingId, index) => (
            <MeetingByRoom
              meetingId={meetingId}
              key={meetingId}
              indexOfMeeting={index}
              amountOfMeetings={meetingIdsByRoom.length}
              isHidden={isHidden}
            />
          ))}
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
