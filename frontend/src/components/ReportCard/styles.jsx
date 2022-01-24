import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.colorOfBadge};
  border-radius: 0.7rem;
  font-weight: 700;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto 3rem;
  
  h3 {
    text-align: center;
    color: ${(props) => props.theme.primary1};
    margin-bottom: 20px;
    font-size: 1.4rem;
  }

  p {
    text-align: center;
    color: ${(props) => props.theme.primary2};
    font-size: 2.2rem;
  }
`;

export const ClassContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  
  h4, p {
    text-align: center;
    color: ${(props) => props.theme.primary2};
    font-size: 1.6rem;
  }

  p {
    margin-left: 1rem;
  }
`;
