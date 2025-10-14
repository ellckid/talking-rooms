import styled from "@emotion/styled";

interface MeetingStatusProps {
  status: "текущая" | "прошедшая" | "предстоящая" | "Встречи нет" | undefined;
}

export const MeetingStatus = styled.h5<MeetingStatusProps>((props) => {
  let color;
  let fontColor;
  switch (props.status) {
    case "прошедшая":
      color = "#F3F4F6";
      fontColor = "#1D2939";
      break;
    case "текущая":
      color = "#FFE2E2";
      fontColor = "#9F0811";
      break;
    default:
      color = "#DBEAFE";
      fontColor = "#1A3CB9";
  }

  return {
    margin: 0,
    padding: "4px 10px 4px 10px",
    color: fontColor,
    backgroundColor: color,
    border: "1px solid #F3F4F6",
    borderRadius: "7px",
    fontSize: "0.8em",
    fontWeight: 400,
  };
});
