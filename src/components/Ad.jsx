import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: teal;
  font-size: 15px;
  color: #fff;
  font-weight: 600;
`;
const Ad = () => {
  return <Container>Get it! Super Deal & Free Shipping</Container>;
};

export default Ad;
