import { ConferenceRoom } from "../../components/ConferenceRoom/ConferenceRoom.tsx";
import { AllMeetings } from "../../components/AllMeetings.tsx";
import { useEffect } from "react";
import { fetchMeetings } from "../../redux/thunks.ts";
import { useAppDispatch, useAppSelector } from "../../redux/store.ts";
import { selectMeetingsIdsByRoom } from "../../redux/meetingsSlice.ts";
import { meetingRoomA, meetingRoomB } from "../../data/meetingRoomsIds.ts";
import { Container } from "./Container.tsx";
import { Title } from "./Title.tsx";

export const MeetingPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMeetings());
  }, [dispatch]);
  const calendar = useAppSelector((state) =>
    selectMeetingsIdsByRoom(state, meetingRoomA.meetingRoomId),
  );
  console.log(calendar);

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
