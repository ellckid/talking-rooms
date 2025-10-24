import styled from "@emotion/styled";

interface StatusTitleProps {
  ongoing?: boolean;
}

export const StatusTitle = styled.h5<StatusTitleProps>((props) => ({
  margin: 0,
  color: props.ongoing ? "#E7000A" : "#145DFC",
  fontSize: "0.88em",
  fontWeight: 400,
}));
