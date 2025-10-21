import styled from "@emotion/styled";

export const MeetingContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: "14px",
  gap: "8px",
  border: "1px solid #EAEAEA",
  borderRadius: "10px",
});

interface MeetingStatusProps {
  color: string;
  fontColor: string;
}

export const MeetingStatus = styled.h5<MeetingStatusProps>((props) => ({
  margin: 0,
  padding: "4px 10px 4px 10px",
  color: props.fontColor,
  backgroundColor: props.color,
  border: "1px solid #F3F4F6",
  borderRadius: "7px",
  fontSize: "0.8em",
  fontWeight: 400,
}));

export const MeetingTitle = styled.h5({
  margin: 0,
  color: "#0A0A0A",
  fontWeight: 400,
  fontSize: "0.94em",
});
