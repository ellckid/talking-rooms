import { useAppSelector } from "../../redux/store.ts";
import { selectNextTodayMeetingsIdsByCalendarId } from "../../redux/meetingsSlice.ts";
import { BlockContainer } from "./BlockContainer.tsx";
import { TitleContainer } from "./TitleContainer.tsx";
import { Title } from "./Title.tsx";
import { RoomStatus } from "../RoomStatus/RoomStatus.tsx";
import { ConferenceRoomMeetings } from "../ConferenceRoomMeetings/ConferenceRoomMeetings.tsx";

interface ClassNameProps {
  className?: string;
}

interface ConferenceRoomProps extends ClassNameProps {
  meetingRoom: { calendarId: number; meetingRoomName: string };
}

export const ConferenceRoom = ({
  meetingRoom,
  className,
}: ConferenceRoomProps) => {
  const meetingIdsByCalendarId = useAppSelector((state) =>
    selectNextTodayMeetingsIdsByCalendarId(state, meetingRoom.calendarId),
  );

  return (
    <BlockContainer className={className}>
      <TitleContainer>
        <Title>{meetingRoom.meetingRoomName}</Title>
        {meetingIdsByCalendarId && (
          <RoomStatus meetingId={meetingIdsByCalendarId[0]} />
        )}
      </TitleContainer>
      <ConferenceRoomMeetings meetingIdsByCalendarId={meetingIdsByCalendarId} />
    </BlockContainer>
  );
};
