import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.colorOfBadge};
  border-radius: 0.7rem;
`;

export default Container;
