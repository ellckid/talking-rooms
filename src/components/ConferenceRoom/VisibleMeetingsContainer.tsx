import styled from "@emotion/styled";

interface TodayMeetingsContainerProps {
  isHidden: boolean;
}

export const VisibleMeetingsContainer = styled.div<TodayMeetingsContainerProps>(
  (props) => ({
    display: "flex",
    flexDirection: "column",
    overflow: props.isHidden ? "hidden" : "visible",
    maxHeight: props.isHidden ? "324px" : "auto",
    transition: "max-height 0.2s ease",
  }),
);
