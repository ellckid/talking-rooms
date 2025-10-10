import { createSelector, createSlice, EntityState } from "@reduxjs/toolkit";
import { meetingsAdapter } from "./adapters.ts";
import { Meeting, MeetingId } from "./Meeting.ts";
import { fetchMeetings } from "./thunks.ts";

type StatusType = "error" | "loading" | "fulfilled";

interface MeetingsState {
  meetings: EntityState<Meeting, MeetingId>;
  status?: StatusType;
}

const initialState: MeetingsState = {
  meetings: meetingsAdapter.getInitialState(),
};

export const meetingsSlice = createSlice({
  name: "meetings",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeetings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMeetings.fulfilled, (state, action) => {
        meetingsAdapter.upsertMany(state.meetings, action.payload);
        state.status = "fulfilled";
      })
      .addCase(fetchMeetings.rejected, (state) => {
        state.status = "error";
      });
  },
  selectors: {
    meetings: (state) => state.meetings,
  },
});

export const { selectors: meetingsSelectors } = meetingsSlice;

export const meetingsAdapterSelectors = meetingsAdapter.getSelectors(
  meetingsSelectors.meetings,
);

export const selectMeetingsIdsByRoom = createSelector(
  [
    meetingsAdapterSelectors.selectAll,
    (_, calenderId: number | null) => calenderId,
  ],
  (meetings, calendarId) => {
    if (calendarId) {
      return meetings
        .filter((meeting) => meeting.calendarId === calendarId)
        .map((meeting) => meeting.meetingId);
    }

    return meetings.map((meeting) => meeting.meetingId);
  },
);

// export const selectAllIds = createSelector(
//   [meetingsAdapterSelectors.selectIds],
//   (meetingIds) => {
//     return meetingIds;
//   },
// );

export const selectMeetingById = createSelector(
  [
    meetingsAdapterSelectors.selectById,
    (_, meetingId: string | undefined) => meetingId,
  ],
  (meeting, meetingId) => {
    if (meetingId) {
      return meeting;
    }

    return undefined;
  },
);
