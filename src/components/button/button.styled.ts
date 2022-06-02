import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.palette.core.primary};
  color: ${(props) => props.theme.palette.core.contrast};
  width: 100%;
  padding: 9px;
  border-radius: 5px;
  border: 0;
  margin: 0 0 22px;
  &:hover {
    background-color: #c00f09;
  }
`;
