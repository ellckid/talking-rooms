import { createSelector, createSlice, EntityState } from "@reduxjs/toolkit";
import { meetingsAdapter } from "./adapters.ts";
import { Meeting, MeetingId } from "./Meeting.ts";
import { fetchMeetings } from "./thunks.ts";
import { RootState } from "./store.ts";

type StatusType = "error" | "loading" | "fulfilled";

interface MeetingsState {
  meetings: EntityState<Meeting, MeetingId>;
  status?: StatusType;
}

const initialState: MeetingsState = {
  meetings: meetingsAdapter.getInitialState(),
};

export const meetingsSlice = createSlice({
  name: "meeting",
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
  (state: RootState) => meetingsSelectors.meetings(state),
);

export const selectMeetingsByRoom = createSelector(
  [meetingsAdapterSelectors.selectAll, (_, calenderId: number) => calenderId],
  (meetings, calendarId) => {
    if (calendarId) {
      return meetings.filter((meeting) => meeting.calendarId === calendarId);
    }
  },
);

export const meetingById = createSelector(
  [
    meetingsAdapterSelectors.selectById,
    (_, meetingId: MeetingId | undefined) => meetingId,
  ],
  (meeting, meetingId) => {
    if (meetingId) {
      return meeting;
    }

    return undefined;
  },
);
