import { useAppSelector } from "../redux/store.ts";
import { selectMeetingsIdsByRoom } from "../redux/meetingsSlice.ts";
import { Meeting } from "./Meeting.tsx";

export const AllMeetings = () => {
  const meetingIds = useAppSelector((state) =>
    selectMeetingsIdsByRoom(state, null),
  );

  return (
    <div>
      <h3>Все встречи</h3>
      <ul>
        {meetingIds.map((meetingId) => (
          <Meeting meetingId={meetingId} key={meetingId} />
        ))}
      </ul>
    </div>
  );
};
