import styled from 'styled-components';

export const ButtonStyled = styled.button` 
${(props) => {
    const { theme: { layout } } = props;

    return `
  background-color:  #1A1A1A;
  color: #fff;
  width: 60px;
  height: 40px;
  padding: 8px;
  border-radius: ${layout.border.xSmall};
  border: 1px solid #fff;
  margin: 5px 15px 0 0;
  cursor: pointer;
  &:hover {
    filter: brightness(85%);
  }
  `;
  }}
`;
