import { RoomStatusTitle } from "./RoomStatusTitle.tsx";
import { MeetingId } from "../../redux/Meeting.ts";
import { useAppSelector } from "../../redux/store.ts";
import { selectMeetingById } from "../../redux/meetingsSlice.ts";
import { rules } from "../../rules/rules.ts";

interface RoomStatusProps {
  meetingId: MeetingId;
}

export const RoomStatus = ({ meetingId }: RoomStatusProps) => {
  const meeting = useAppSelector((state) =>
    selectMeetingById(state, meetingId),
  );
  const isOngoing = rules.isMeetingOngoing(meeting);

  return isOngoing ? (
    <RoomStatusTitle ongoing>занято</RoomStatusTitle>
  ) : (
    <RoomStatusTitle>свободно</RoomStatusTitle>
  );
};
