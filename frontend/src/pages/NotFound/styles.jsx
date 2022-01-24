import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.primary1};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.primary2};
`;

export const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.primary2};
`;

export const Button = styled.button`
  /* resetar aparencia */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  padding: 0.8rem;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #1B1B1B;
  outline: none;
  font-size: 0.8rem;
  color: ${(props) => props.theme.primary2};

  background-color: ${(props) => props.theme.primary1_lighter};
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
    cursor: pointer;
  }
`;
