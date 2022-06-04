import styled from "styled-components";

export const InputStyled = styled.input`
  width: ${props => props.theme.layout.horizontalLength.full};
  border-radius: ${props => props.theme.layout.border.xSmall};
  padding: 9px;
  border: 1px solid ${props => props.theme.palette.core.lightGray};
  box-sizing: border-box;
  &:hover { filter: brightness(70%) };
  &:focus {
    background-color: ${props => props.theme.palette.core.lightGray};
    border: 0;
    outline: none;
    padding: 10px;
  }
  + input {
    margin-top: 22px;
  }
`;
