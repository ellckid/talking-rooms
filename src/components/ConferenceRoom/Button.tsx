import styled from "@emotion/styled";

export const Button = styled.button({
  display: "flex",
  flex: "1",
  maxHeight: "40px",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "auto",
  padding: "10px 0 10px 0",
  fontWeight: 400,
  border: "1px solid #E8E8E8",
  borderRadius: "6px",
  backgroundColor: "#FFFFFF",
  fontSize: "0.88em",
  transition: "transform 0.1s ease, backgroundColor 0.1s ease",

  "&:hover": {
    transform: "scale(0.97)",
    backgroundColor: "#F9FAFC",
  },
});
