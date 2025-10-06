import { createEntityAdapter } from "@reduxjs/toolkit";
import { Meeting } from "./Meeting.ts";

export const meetingsAdapter = createEntityAdapter({
  selectId: (meeting: Meeting) => meeting.meetingId,
});
