import { ConferenceRoom } from "../../components/ConferenceRoom/ConferenceRoom.tsx";
import { AllMeetings } from "../../components/AllMeetings/AllMeetings.tsx";
import { useEffect } from "react";
import { fetchMeetingsThunk } from "../../redux/thunks.ts";
import { useAppDispatch } from "../../redux/store.ts";
import { meetingRoomA, meetingRoomB } from "../../data/meetingRoomsIds.ts";
import { Container } from "./Container.styled.ts";
import { Title } from "./Title.tsx";

export const MeetingPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMeetingsThunk());
  }, [dispatch]);

  return (
    <div>
      <Title>Переговорки</Title>
      <Container>
        <ConferenceRoom meetingRoom={meetingRoomA} />
        <ConferenceRoom meetingRoom={meetingRoomB} />
      </Container>
      <AllMeetings />
    </div>
  );
};
