import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  
  span {
    margin-left: 5px;
    color: ${({ active, theme }) => (active ? theme.primary2 : theme.title)}
  };
  svg {
    color: ${({ active, theme }) => (active ? theme.primary2 : theme.title)}
  };

  &:hover {
    background-color: ${(props) => props.theme.primary2};
    filter: brightness(0.9);
    cursor: pointer;
  };
`;

export const SelectedLine = styled.span`
  width: 40px;
  background-color: ${(props) => props.theme.primary2};
  height: 2px;
  margin-top: 5px;
`;
