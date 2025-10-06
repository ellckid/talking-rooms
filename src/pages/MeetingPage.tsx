import { ConferenceRoom } from "../components/ConferenceRoom.tsx";
import { AllMeetings } from "../components/AllMeetings.tsx";
import { useEffect } from "react";
import { fetchMeetings } from "../redux/thunks.ts";
import { useAppDispatch, useAppSelector } from "../redux/store.ts";
import { selectMeetingsByRoom } from "../redux/meetingsSlice.ts";

export const MeetingPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMeetings());
  }, [dispatch]);
  const calendar = useAppSelector((state) =>
    selectMeetingsByRoom(state, 14312107),
  );
  console.log(calendar);

  return (
    <div>
      <h1>Переговорки</h1>
      <ConferenceRoom />
      <ConferenceRoom />
      <AllMeetings />
    </div>
  );
};
