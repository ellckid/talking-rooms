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
