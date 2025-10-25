import { useAppSelector } from "../../redux/store.ts";
import { selectMeetingsIdsByFilter } from "../../redux/meetingsSlice.ts";
import { Meeting } from "../Meeting/Meeting.tsx";
import { useTheme } from "@emotion/react";
import { MyTheme } from "../../theme/theme.ts";
import * as S from "./AllMeetings.styled.ts";

export const AllMeetings = () => {
  const meetingIds = useAppSelector((state) =>
    selectMeetingsIdsByFilter(state, null),
  );
  const theme: MyTheme = useTheme();

  return (
    <S.AllMeetingsContainer theme={theme}>
      <S.TitleContainer>Все встречи</S.TitleContainer>
      <S.MeetingsContainer>
        {meetingIds.map((meetingId) => (
          <Meeting meetingId={meetingId} key={meetingId} />
        ))}
      </S.MeetingsContainer>
    </S.AllMeetingsContainer>
  );
};
