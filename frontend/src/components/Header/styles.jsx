import styled from 'styled-components';

export const HeaderComponent = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.primary1};

  @media (max-width: 767px) {
    height: 100%;
    justify-content: center;
  };
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${(props) => props.theme.primary2};

  @media (max-width: 767px) {
    display: none;
  };
`;

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  button {
     /* resetar aparencia */
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    padding: 0.4rem 1rem;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #1B1B1B;
    outline: none;

    background-color: ${(props) => props.theme.primary1_lighter};
    color: ${(props) => props.theme.background};
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.2rem;

    &:hover {
      transform: scale(1.05);
      filter: brightness(1.1);
      color: ${(props) => props.theme.primary2};
      cursor: pointer;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.theme.primary2};
  }

  button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    padding: 0.2rem;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #1B1B1B;
    outline: none;

    background-color: ${(props) => props.theme.primary1_lighter};
    color: ${(props) => props.theme.background};
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.2rem;

    &:hover {
      transform: scale(1.05);
      filter: brightness(1.1);
      color: ${(props) => props.theme.primary2};
      cursor: pointer;
    }
  }
`;

export const ModalSubtitle = styled.div`
  margin: 1rem 0;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;

  input {
    width: 100%;
    height: 30px;
    padding: 5px 10px;
  }
`;

export const Button = styled.button`
  /* resetar aparencia */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  padding: 0.6rem 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #1B1B1B;
  outline: none;

  background-color: ${(props) => props.theme.primary1};
  color: ${(props) => props.theme.background};
  font-size: 1.2rem;
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
