import { useAppSelector } from "../../redux/store.ts";
import { selectMeetingById } from "../../redux/meetingsSlice.ts";
import { useIsMeetingOngoingById } from "../../hooks/useIsMeetingOngoingById.ts";
import { FirstMeetingContainer } from "./FirstMeetingContainer.tsx";
import { StatusContainer } from "./StatusContainer.tsx";
import { Image } from "./Image.tsx";
import clock from "../../assets/clock.svg";
import calendar from "../../assets/calendar.svg";
import { StatusTitle } from "./StatusTitle.tsx";
import { MeetingTitle } from "./MeetingTitle.tsx";
import { MeetingTime } from "./MeetingTime.tsx";
import { getTimeRange } from "../../functions/getTimeRange.ts";
import { MeetingWho } from "./MeetingWho.tsx";

interface MeetingProps {
  meetingId: string;
}

export const FirstMeeting = ({ meetingId }: MeetingProps) => {
  const meeting = useAppSelector((state) =>
    selectMeetingById(state, meetingId),
  );

  const isOngoing = useIsMeetingOngoingById(meeting?.meetingId);

  return (
    <FirstMeetingContainer ongoing={isOngoing}>
      <StatusContainer>
        <Image src={isOngoing ? clock : calendar} alt={"clock"} />
        <StatusTitle ongoing={isOngoing}>
          {/* TODO: * i18n */}
          {isOngoing ? "Сейчас используется" : "Следующая встреча"}
        </StatusTitle>
      </StatusContainer>
      <MeetingTitle>{meeting?.title ? meeting.title : "Встреча"}</MeetingTitle>
      <MeetingTime>
        {getTimeRange(meeting?.startDate, meeting?.endDate)}
      </MeetingTime>
      {meeting?.who ? (
        <MeetingWho>Организатор: {meeting.who}</MeetingWho>
      ) : (
        "Организатора нет"
      )}
    </FirstMeetingContainer>
  );
};
