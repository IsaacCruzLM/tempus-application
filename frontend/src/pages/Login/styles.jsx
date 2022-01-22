import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.primary1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-height: 80%;
  max-width: 500px;
  background-color: ${(props) => props.theme.background};
  padding: 5rem 2rem;
  border-radius: 1rem;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.primary2};
`;

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

export const Button = styled.button`
  /* resetar aparencia */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  padding: 0.8rem 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #1B1B1B;
  outline: none;
  font-size: 1.2em;
  color: ${(props) => props.theme.primary2};

  background-color: ${(props) => props.theme.primary1};
  color: ${(props) => props.theme.background};
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 0.5rem;
  margin-top: 2rem;

  &:hover {
    background-color: ${(props) => props.theme.primary1_lighter};
    transform: scale(1.05);
    filter: brightness(1.1);
    color: ${(props) => props.theme.primary2};
  }
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

export const SpanError = styled.span`
  display: flex;
  padding: 0;
  background-color: rgba(255, 0, 0, 0.2);
`;
