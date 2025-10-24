export const getColors = (
  meetingStatus:
    | "текущая"
    | "прошедшая"
    | "предстоящая"
    | "Встречи нет"
    | undefined,
) => {
  switch (meetingStatus) {
    case "прошедшая":
      return {
        color: "#F3F4F6",
        fontColor: "#1D2939",
      };
    case "текущая":
      return {
        color: "#FFE2E2",
        fontColor: "#9F0811",
      };
    default:
      return {
        color: "#DBEAFE",
        fontColor: "#1A3CB9",
      };
  }
};
