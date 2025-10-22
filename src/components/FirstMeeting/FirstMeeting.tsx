import { useAppSelector } from "../../redux/store.ts";
import { selectMeetingById } from "../../redux/meetingsSlice.ts";
import { FirstMeetingContainer } from "./FirstMeetingContainer.tsx";
import { StatusContainer } from "./StatusContainer.tsx";
import { Image } from "./Image.tsx";
import clock from "../../assets/clock.svg";
import calendar from "../../assets/calendar.svg";
import { StatusTitle } from "./StatusTitle.tsx";
import { MeetingTitle } from "./MeetingTitle.tsx";
import { MeetingTime } from "./MeetingTime.tsx";
import { MeetingWho } from "./MeetingWho.tsx";
import { rules } from "../../rules/rules.ts";

interface MeetingProps {
  meetingId: string;
}

export const FirstMeeting = ({ meetingId }: MeetingProps) => {
  const meeting = useAppSelector((state) =>
    selectMeetingById(state, meetingId),
  );

  const isOngoing = rules.isMeetingOngoing(meeting);

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
        {rules.timeRange(meeting?.startDate, meeting?.endDate)}
      </MeetingTime>
      {meeting?.who ? (
        <MeetingWho>Организатор: {meeting.who}</MeetingWho>
      ) : (
        "Организатора нет"
      )}
    </FirstMeetingContainer>
  );
};
