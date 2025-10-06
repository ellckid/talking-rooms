import { ConferenceRoom } from "../components/ConferenceRoom.tsx";
import { AllMeetings } from "../components/AllMeetings.tsx";
import { useEffect } from "react";
import { fetchMeetings } from "../redux/thunks.ts";
import { useAppDispatch } from "../redux/store.ts";

export const MeetingPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMeetings());
  }, [dispatch]);

  return (
    <div>
      <h1>Переговорки</h1>
      <ConferenceRoom />
      <ConferenceRoom />
      <AllMeetings />
    </div>
  );
};
