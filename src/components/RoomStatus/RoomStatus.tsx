import { useIsMeetingOngoingById } from "../../hooks/useIsMeetingOngoingById.ts";
import { RoomStatusTitle } from "./RoomStatusTitle.tsx";
import { MeetingId } from "../../redux/Meeting.ts";

interface RoomStatusProps {
  meetingId: MeetingId | null;
}

export const RoomStatus = ({ meetingId }: RoomStatusProps) => {
  const isOngoing = useIsMeetingOngoingById(meetingId);

  return isOngoing ? (
    <RoomStatusTitle ongoing>занято</RoomStatusTitle>
  ) : (
    <RoomStatusTitle>свободно</RoomStatusTitle>
  );
};
