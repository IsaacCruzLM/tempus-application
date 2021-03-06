import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.colorOfBadge};
  border-radius: 0.7rem;
  font-weight: 700;
`;

export default Container;
