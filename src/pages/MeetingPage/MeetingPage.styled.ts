import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "26px",
  justifyContent: "space-between",
  padding: "0 22px 0 22px",

  "@media (max-width: 700px)": {
    flexDirection: "column",
    gap: "16px",
  },
});

export const Title = styled.h1({
  fontWeight: 400,
  margin: 0,
  padding: "15px 0 25px 22px",
  color: "#0A0A0A",
  fontSize: "1.75em",
});
