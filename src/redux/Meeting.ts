export type MeetingId = string;

export interface Meeting {
  meetingId: MeetingId;
  title: string;
  who: string;
  startDate: string;
  endDate: string;
  calendarId: number;
}
