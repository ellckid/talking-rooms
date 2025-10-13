import { useAppSelector } from "../../redux/store.ts";
import { selectMeetingsIdsByRoom } from "../../redux/meetingsSlice.ts";
import { Meeting } from "../Meeting.tsx";
import { ContentContainer } from "./ContentContainer.tsx";
import { AllMeetingsContainer } from "./AllMeetingsContainer.tsx";
import { TitleContainer } from "./TitleContainer.tsx";
import { MeetingsContainer } from "./MeetingsContainer.tsx";

export const AllMeetings = () => {
  const meetingIds = useAppSelector((state) =>
    selectMeetingsIdsByRoom(state, null),
  );

  return (
    <AllMeetingsContainer>
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
