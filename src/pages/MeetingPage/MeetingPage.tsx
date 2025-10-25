import { ConferenceRoom } from "../../components/ConferenceRoom/ConferenceRoom.tsx";
import { AllMeetings } from "../../components/AllMeetings/AllMeetings.tsx";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/store.ts";
import { meetingRoomA, meetingRoomB } from "../../data/meetingRoomsIds.ts";
import { api } from "../../api/api.ts";
import * as S from "./MeetingPage.styled.ts";

export const MeetingPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(api.fetchMeetingsThunk());
  }, [dispatch]);

  return (
    <div>
      <S.Title>Переговорки</S.Title>
      <S.Container>
        <ConferenceRoom meetingRoom={meetingRoomA} />
        <ConferenceRoom meetingRoom={meetingRoomB} />
      </S.Container>
      <AllMeetings />
    </div>
  );
};
