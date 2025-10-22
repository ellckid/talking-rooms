import { useAppSelector } from "../../redux/store.ts";
import { selectMeetingById } from "../../redux/meetingsSlice.ts";
import { MeetingContainer } from "./MeetingContainer.tsx";
import { ContentContainer } from "./ContentContainer.tsx";
import { MeetingTitle } from "./MeetingTitle.tsx";
import { MeetingStatus } from "./MeetingStatus.tsx";
import { Image } from "./Image.tsx";
import clock from "../../assets/grayClock.svg";
import location from "../../assets/location.svg";
import { TextContainer } from "./TextContainer.tsx";
import { getMeetingRoomName } from "../../functions/getMeetingRoomName.tsx";
import { MeetingWho } from "./MeetingWho.tsx";
import { rules } from "../../rules/rules.ts";

interface MeetingProps {
  meetingId: string;
}

export const Meeting = ({ meetingId }: MeetingProps) => {
  const meeting = useAppSelector((state) =>
    selectMeetingById(state, meetingId),
  );

  const meetingStatus = rules.meetingStatus(meeting);

  return (
    <MeetingContainer>
      <ContentContainer>
        <MeetingTitle>
          {meeting?.title ? meeting.title : "Встреча"}
        </MeetingTitle>
        <MeetingStatus {...rules.statusColors(meetingStatus)}>
          {rules.statusName(meetingStatus)}
        </MeetingStatus>
      </ContentContainer>
      <ContentContainer>
        {/* TODO: инлайн свг как реакт компонент */}
        <Image src={clock} alt={""} />
        <TextContainer>
          {rules.timeRange(meeting?.startDate, meeting?.endDate)}
        </TextContainer>
        <Image src={location} alt={""}></Image>
        <TextContainer>{getMeetingRoomName(meeting?.calendarId)}</TextContainer>
      </ContentContainer>
      <MeetingWho>Организатор: {meeting?.who}</MeetingWho>
    </MeetingContainer>
  );
};
