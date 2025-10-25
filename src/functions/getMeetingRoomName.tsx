import { meetingRoomA, meetingRoomB } from "../data/meetingRoomsIds.ts";

export const getMeetingRoomName = (meetingRoomId: number | undefined) => {
  if (meetingRoomId) {
    if (meetingRoomA.calendarId === meetingRoomId) {
      return meetingRoomA.meetingRoomName;
    }

    return meetingRoomB.meetingRoomName;
  }
};
