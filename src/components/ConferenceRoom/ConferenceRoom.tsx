import { useAppSelector } from "../../redux/store.ts";
import { selectNextTodayMeetingsIdsByCalendarId } from "../../redux/meetingsSlice.ts";
import { RoomStatus } from "../RoomStatus/RoomStatus.tsx";
import { ConferenceRoomMeetings } from "../ConferenceRoomMeetings/ConferenceRoomMeetings.tsx";
import { useTheme } from "@emotion/react";
import { MyTheme } from "../../theme/theme.ts";
import * as S from "./ConferenceRoom.styled.ts";

interface ConferenceRoomProps {
  meetingRoom: { calendarId: number; meetingRoomName: string };
}

export const ConferenceRoom = ({ meetingRoom }: ConferenceRoomProps) => {
  const theme: MyTheme = useTheme();
  const meetingIdsByCalendarId = useAppSelector((state) =>
    selectNextTodayMeetingsIdsByCalendarId(state, meetingRoom.calendarId),
  );

  return (
    <div style={theme.mainContainer}>
      <S.TitleContainer>
        <S.Title>{meetingRoom.meetingRoomName}</S.Title>
        {meetingIdsByCalendarId && (
          <RoomStatus meetingId={meetingIdsByCalendarId[0]} />
        )}
      </S.TitleContainer>
      <ConferenceRoomMeetings meetingIdsByCalendarId={meetingIdsByCalendarId} />
    </div>
  );
};
