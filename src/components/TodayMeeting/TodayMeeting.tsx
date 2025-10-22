import { useAppSelector } from "../../redux/store.ts";
import { selectMeetingById } from "../../redux/meetingsSlice.ts";
import { MeetingContainer } from "./MeetingContainer.tsx";
import { TextContainer } from "./TextContainer.tsx";
import { MeetingName } from "./MeetingName.tsx";
import { MeetingOrganizer } from "./MeetingOrganizer.tsx";
import { MeetingTime } from "./MeetingTime.tsx";
import { rules } from "../../rules/rules.ts";

interface TodayMeetingProps {
  meetingId: string;
}

export const TodayMeeting = ({ meetingId }: TodayMeetingProps) => {
  const meeting = useAppSelector((state) =>
    selectMeetingById(state, meetingId),
  );

  return (
    <MeetingContainer>
      <TextContainer>
        <MeetingName>{meeting?.title ? meeting.title : "Встреча"}</MeetingName>
        <MeetingOrganizer>{meeting?.who}</MeetingOrganizer>
      </TextContainer>
      <TextContainer>
        <MeetingTime>{rules.hoursTime(meeting?.startDate)}</MeetingTime>
        <MeetingTime>{rules.hoursTime(meeting?.endDate)}</MeetingTime>
      </TextContainer>
    </MeetingContainer>
  );
};
