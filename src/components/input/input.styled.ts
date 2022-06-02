import styled from "styled-components";

export const InputStyled = styled.input`
width: 100%;
padding: 8px;
border-radius: 5px;
border: 1px solid #e0e0e0;
margin: 0 0 22px;
box-sizing: border-box;
&:hover,
&:focus {
  background-color: ${props => props.theme.palette.core.lightGray};
  border: 0;
  outline: none;
  padding: 9px;
}
& input + input {
  background-color: gray;
}
`;
