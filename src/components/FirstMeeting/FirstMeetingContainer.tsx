import styled from "@emotion/styled";

interface FirstMeetingContainerProps {
  ongoing?: boolean;
}

export const FirstMeetingContainer = styled.div<FirstMeetingContainerProps>(
  (props) => ({
    display: "flex",
    flexDirection: "column",
    paddingBottom: "20px",
    border: props.ongoing ? "1px solid #FFC9C9" : "1px solid #BEDBFF",
    borderRadius: "10px",
    backgroundColor: props.ongoing ? "#FEF2F2" : "#EFF6FF",
    padding: "14px",
    maxHeight: "125px",
  }),
);
