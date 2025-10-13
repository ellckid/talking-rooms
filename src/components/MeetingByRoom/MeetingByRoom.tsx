import { useAppSelector } from "../../redux/store.ts";
import { selectMeetingById } from "../../redux/meetingsSlice.ts";
import { useIsMeetingOngoingById } from "../../hooks/useIsMeetingOngoing.ts";
import { FirstMeetingContainer } from "./FirstMeetingContainer.tsx";
import { StatusContainer } from "./StatusContainer.tsx";
import { StatusTitle } from "./StatusTitle.tsx";
import clock from "../../assets/clock.svg";
import calendar from "../../assets/calendar.svg";
import { MeetingTitle } from "./MeetingTitle.tsx";
import { MeetingTime } from "./MeetingTime.tsx";
import { getTimeRange } from "../../functions/getTimeRange.ts";
import { MeetingOrganizer } from "./MeetingOrganizer.tsx";
import { Image } from "./Image.tsx";

interface MeetingProps {
  meetingId: string;
  indexOfMeeting: number;
}

export const MeetingByRoom = ({ meetingId, indexOfMeeting }: MeetingProps) => {
  const meeting = useAppSelector((state) =>
    selectMeetingById(state, meetingId),
  );

  const isOngoing =
    useIsMeetingOngoingById(meeting?.meetingId) && indexOfMeeting === 0;

  return (
    <div>
      <FirstMeetingContainer ongoing={isOngoing}>
        <StatusContainer>
          <Image src={isOngoing ? clock : calendar} alt={"clock"} />
          <StatusTitle ongoing={isOngoing}>
            {isOngoing ? "Сейчас используется" : "Следующая встреча"}
          </StatusTitle>
        </StatusContainer>
        <MeetingTitle>
          {meeting?.title ? meeting.title : "Встреча"}
        </MeetingTitle>
        <MeetingTime>
          {getTimeRange(meeting?.startDate, meeting?.endDate)}
        </MeetingTime>
        {meeting?.who ? (
          <MeetingOrganizer>Организатор: {meeting.who}</MeetingOrganizer>
        ) : (
          "Организатора нет"
        )}
      </FirstMeetingContainer>
    </div>
  );
};
