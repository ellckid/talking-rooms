import styled from "@emotion/styled";
interface MeetingContainerProps {
  hidden: boolean;
}

export const MeetingContainer = styled.div<MeetingContainerProps>((props) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#F9FAFC",
  border: "1px solid #FCFCFD",
  borderRadius: "6px",
  marginBottom: "8px",
  maxHeight: props.hidden ? 0 : "auto",
  opacity: props.hidden ? 0 : 1,
  transition: "opacity 0.2s ease, max-height 0.2s ease",
  overflow: "hidden",
}));
