import { useAppSelector } from "../../redux/store.ts";
import { selectMeetingsIdsByFilter } from "../../redux/meetingsSlice.ts";
import { Meeting } from "../Meeting/Meeting.tsx";
import { AllMeetingsContainer } from "./AllMeetingsContainer.tsx";
import { TitleContainer } from "./TitleContainer.tsx";
import { MeetingsContainer } from "./MeetingsContainer.tsx";

export const AllMeetings = () => {
  const meetingIds = useAppSelector((state) =>
    selectMeetingsIdsByFilter(state, null),
  );

  return (
    <AllMeetingsContainer>
      <TitleContainer>Все встречи</TitleContainer>
      <MeetingsContainer>
        {meetingIds.map((meetingId) => (
          <Meeting meetingId={meetingId} key={meetingId} />
        ))}
      </MeetingsContainer>
    </AllMeetingsContainer>
  );
};
