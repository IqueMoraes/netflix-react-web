import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
  min-height: 100vh;
  background-color: #141414;
`;

export const Image = styled.div`
  height: 100vh;
  width: 100vw;
  positin: absolute;
  top: 0;
  left: 0;
  z-index: -1;

`
