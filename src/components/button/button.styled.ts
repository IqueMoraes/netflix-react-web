import styled from "styled-components";

export const ButtonStyled = styled.button` 
${ props => {
  const { theme: {palette, layout }} = props;
  const {core} = palette;

  return `
  background-color: ${core.primary};
  color: ${core.contrast};
  width: ${layout.horizontalLength.full};
  padding: 8px;
  border-radius: ${layout.border.xSmall};
  border: 0;
  margin: ${layout.margin.groupInnerGap} 0 0;
  `
}}
`;
