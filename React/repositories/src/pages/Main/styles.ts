import styled, { keyframes, css } from 'styled-components';

interface SubmitButtonProps {
  loading: boolean
}

interface InputWarningProps {
  activated: boolean
}

// border: 2.4px solid palevioletred;
export const InputWarning = styled.input<InputWarningProps>`
  flex: 1;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;

  border-style: solid;
  border-width: ${(props) => (props.activated ? 2.4 : 1)};
  border-color: ${(props) => (props.activated ? 'palevioletred' : '#eee')}
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})<SubmitButtonProps>`
  padding: 0 6px 0 15px;
  margin-left: 15px;

  display: flex;
  align-items: center;
  /* justify-content: center; */

  border: 0;
  border-radius: 4px;
  background: #7f2ed0;

  ${(props) => props.loading && css`
    cursor: not-allowed;
    opacity: 0.6;

    svg {
      animation: ${rotate} 1s linear infinite;
    }
  `}
`;


export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li + li {
    border-top: 1px solid #eee;
  }

  a {
    color:  #7f2ed0;
    text-decoration: none;
  }
`;
