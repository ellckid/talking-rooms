import { ConferenceRoom } from "../../components/ConferenceRoom/ConferenceRoom.tsx";
import { AllMeetings } from "../../components/AllMeetings/AllMeetings.tsx";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/store.ts";
import { meetingRoomA, meetingRoomB } from "../../data/meetingRoomsIds.ts";
import { Container } from "./Container.styled.ts";
import { Title } from "./Title.tsx";
import { api } from "../../api/api.ts";

export const MeetingPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(api.fetchMeetingsThunk());
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
