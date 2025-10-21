import { createSelector, createSlice, EntityState } from "@reduxjs/toolkit";
import { meetingsAdapter } from "./adapters.ts";
import { Meeting, MeetingId } from "./Meeting.ts";
import { fetchMeetingsThunk } from "./thunks.ts";
import { isFuture, isPast, isToday } from "date-fns";

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
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeetingsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMeetingsThunk.fulfilled, (state, action) => {
        meetingsAdapter.upsertMany(state.meetings, action.payload);
        state.status = "fulfilled";
      })
      .addCase(fetchMeetingsThunk.rejected, (state) => {
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

export const selectMeetingsIdsByCalendarId = createSelector(
  [
    meetingsAdapterSelectors.selectAll,
    (_, calendarId: number | null) => calendarId,
  ],
  (meetings, calendarId) => {
    const filteredMeetings = calendarId
      ? meetings.filter((meeting) => meeting.calendarId === calendarId)
      : meetings;

    // TODO: array.reduce

    return filteredMeetings.map((meeting) => meeting.meetingId);
  },
);

export const selectNextTodayMeetingsIdsByCalendarId = createSelector(
  [meetingsAdapterSelectors.selectAll, (_, calendarId: number) => calendarId],
  (meetings, calendarId) => {
    if (calendarId) {
      return meetings
        .filter(
          (meeting) =>
            // TODO: в рулзы
            meeting.calendarId === calendarId &&
            isToday(meeting.startDate) &&
            (isFuture(meeting.startDate) ||
              (isPast(meeting.startDate) && isFuture(meeting.endDate))),
        )
        .map((meeting) => meeting.meetingId);
    }

    return null;
  },
);

export const selectMeetingById = createSelector(
  [
    meetingsAdapterSelectors.selectById,
    (_, meetingId: string | null) => meetingId,
  ],
  (meeting, meetingId) => {
    if (meetingId) {
      return meeting;
    }

    return undefined;
  },
);
