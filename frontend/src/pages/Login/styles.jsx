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
