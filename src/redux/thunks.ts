import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dto } from "./dto.ts";

const url = import.meta.env.VITE_REACT_APP_API_KEY;

// TODO: вынести апи в отдельный хелпер
// TODO: типизировать то что возвращает санк (провалиться в санк и посмотреть какая у него сигнатура внутри )
export const fetchMeetingsThunk = createAsyncThunk(
  "meetings/fetchMeetings",
  async () => {
    const response = await fetch(url);
    const result: Dto = await response.json();

    return result.body.events.map((meeting) => ({
      meetingId: meeting.id,
      title: meeting.title,
      who: meeting.who,
      startDate: meeting.start_dt,
      endDate: meeting.end_dt,
      calendarId: meeting.subcalendar_id,
    }));
  },
);
