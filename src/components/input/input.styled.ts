import styled from 'styled-components';

export const InputStyled = styled.input`
  ${(props) => {
    const {
      theme: { layout, palette },
    } = props;

    // retornando erro com css`
    return `
      width: 100%;
      border-radius: ${layout.border.xSmall};
      padding: 9px;
      border: 1px solid ${palette.core.lightGray};
      box-sizing: border-box;

      &:hover {
        filter: brightness(85%);
      }

      &:focus {
        background-color: ${palette.core.lightGray};
        border: 0;
        outline: none;
        padding: 10px;
      }

      + input {
        margin-top: 22px;
      }
    `;
  }}
`;
