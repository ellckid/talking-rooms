import { useAppSelector } from "../../redux/store.ts";
import { selectMeetingsIdsByCalendarId } from "../../redux/meetingsSlice.ts";
import { Meeting } from "../Meeting/Meeting.tsx";
import { ContentContainer } from "./ContentContainer.tsx";
import { AllMeetingsContainer } from "./AllMeetingsContainer.tsx";
import { TitleContainer } from "./TitleContainer.tsx";
import { MeetingsContainer } from "./MeetingsContainer.tsx";

export const AllMeetings = () => {
  const meetingIds = useAppSelector((state) =>
    selectMeetingsIdsByCalendarId(state, null),
  );

  return (
    <AllMeetingsContainer>
      {/* TODO: как будто одним*/}
      <ContentContainer>
        <TitleContainer>Все встречи</TitleContainer>
        <MeetingsContainer>
          {meetingIds.map((meetingId) => (
            <Meeting meetingId={meetingId} key={meetingId} />
          ))}
        </MeetingsContainer>
      </ContentContainer>
    </AllMeetingsContainer>
  );
};
