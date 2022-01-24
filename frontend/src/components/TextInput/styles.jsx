import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 1.4rem;
  width: 90%;
`;

export const Input = styled.input`
  /* resetar aparencia */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  padding: 0.7rem 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #1b1b1b;
  outline: none;
  font-size: 1rem;
  color: ${(props) => props.theme.title};

  &:focus {
    border-bottom: 2px solid #EA537E;
  };
`;

export const Label = styled.label`
  color: ${(props) => props.theme.primary1};
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;
