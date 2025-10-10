import { useAppSelector } from "../redux/store.ts";
import { selectMeetingsIdsByRoom } from "../redux/meetingsSlice.ts";
import { Meeting } from "./Meeting.tsx";

interface ConferenceRoomProps {
  meetingRoom: { meetingRoomId: number; meetingRoomName: string };
}

export const ConferenceRoom = ({ meetingRoom }: ConferenceRoomProps) => {
  const meetingIdsByRoom = useAppSelector((state) =>
    selectMeetingsIdsByRoom(state, meetingRoom.meetingRoomId),
  );

  return (
    <div>
      <h2>{meetingRoom.meetingRoomName}</h2>
      {meetingIdsByRoom.map((meetingId) => (
        <Meeting meetingId={meetingId} key={meetingId} />
      ))}
    </div>
  );
};
