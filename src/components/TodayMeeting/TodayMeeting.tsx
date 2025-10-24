import { useAppSelector } from "../../redux/store.ts";
import { selectMeetingById } from "../../redux/meetingsSlice.ts";
import { MeetingContainer } from "./MeetingContainer.tsx";
import { ContentContainer } from "./ContentContainer.tsx";
import { TextContainer } from "./TextContainer.tsx";
import { MeetingName } from "./MeetingName.tsx";
import { MeetingOrganizer } from "./MeetingOrganizer.tsx";
import { MeetingTime } from "./MeetingTime.tsx";
import { getHoursTime } from "../../functions/getHoursTime.ts";

interface TodayMeetingProps {
  meetingId: string;
}

export const TodayMeeting = ({ meetingId }: TodayMeetingProps) => {
  const meeting = useAppSelector((state) =>
    selectMeetingById(state, meetingId),
  );

  return (
    <MeetingContainer>
      <ContentContainer>
        <TextContainer>
          <MeetingName>
            {meeting?.title ? meeting.title : "Встреча"}
          </MeetingName>
          <MeetingOrganizer>{meeting?.who}</MeetingOrganizer>
        </TextContainer>
        <TextContainer>
          <MeetingTime>{getHoursTime(meeting?.startDate)}</MeetingTime>
          <MeetingTime>{getHoursTime(meeting?.endDate)}</MeetingTime>
        </TextContainer>
      </ContentContainer>
    </MeetingContainer>
  );
};
