import { DateString, Meeting } from "../redux/Meeting.ts";
import {
  format,
  getDay,
  isFuture,
  isPast,
  isToday,
  isValid,
  isWithinInterval,
} from "date-fns";

type MeetingStatus = "no meeting" | "current" | "previous" | "next" | undefined;

const isTodayNextMeeting = (startDate: DateString, endDate: DateString) => {
  return (
    isToday(startDate) &&
    (isFuture(startDate) || (isPast(startDate) && isFuture(endDate)))
  );
};

const isMeetingOngoing = (meeting: Meeting | undefined) => {
  if (!meeting) {
    return false;
  }

  if (
    isValid(new Date(meeting.startDate)) &&
    isValid(new Date(meeting.endDate))
  ) {
    return isWithinInterval(new Date(), {
      start: meeting.startDate,
      end: meeting.endDate,
    });
  }
};

const hoursTime = (date: string | undefined) => {
  if (date && isValid(new Date(date))) {
    return format(date, "HH:mm");
  }
};

const timeRange = (
  startDate: string | undefined,
  endDate: string | undefined,
) => {
  if (
    startDate &&
    endDate &&
    isValid(new Date(startDate)) &&
    isValid(new Date(endDate))
  ) {
    return `${rules.hoursTime(startDate)} - ${rules.hoursTime(endDate)}`;
  }
};

const meetingStatus = (meeting: Meeting | undefined): MeetingStatus => {
  const isOngoing = rules.isMeetingOngoing(meeting);
  if (!meeting) {
    return "no meeting";
  }
  const { startDate, endDate } = meeting;

  if (isValid(new Date(startDate)) && isValid(new Date(endDate))) {
    if (isOngoing) {
      return "current";
    } else if (isPast(startDate)) {
      return "previous";
    } else if (isFuture(endDate)) return "next";
  }
};

const statusName = (meetingStatus: MeetingStatus) => {
  switch (meetingStatus) {
    case "current":
      return "Текущая";
    case "next":
      return "Предстоящая";
    case "previous":
      return "Прошедшая";
  }
};

const statusColors = (meetingStatus: MeetingStatus) => {
  switch (meetingStatus) {
    case "previous":
      return {
        color: "#F3F4F6",
        fontColor: "#1D2939",
      };
    case "current":
      return {
        color: "#FFE2E2",
        fontColor: "#9F0811",
      };
    case "next":
      return {
        color: "#DBEAFE",
        fontColor: "#1A3CB9",
      };
    default:
      return {
        color: "#F3F4F6",
        fontColor: "#1D2939",
      };
  }
};

const getDayOfTheWeek = (date: DateString | undefined) => {
  if (date) {
    const dayOfTheWeek = getDay(date);

    switch (dayOfTheWeek) {
      case 1:
        return "пн.";
      case 2:
        return "вт.";
      case 3:
        return "ср.";
      case 4:
        return "чт.";
      case 5:
        return "пт.";
      case 6:
        return "сб.";
      case 7:
        return "вс. ";
    }
  }
};

export const rules = {
  isTodayNextMeeting,
  isMeetingOngoing,
  hoursTime,
  timeRange,
  meetingStatus,
  statusName,
  statusColors,
  getDayOfTheWeek,
};
