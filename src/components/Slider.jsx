import styled from 'styled-components';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import data from '../data';
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  transform: translateX(0vw);
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #fff;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) => props.position === 'Right' && '15px'};
  left: ${(props) => props.position === 'Left' && '15px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.3;
  z-index: 2;
`;
const SliderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex: 1;
`;
const Slide = styled.div`
  display: flex;
  height: 100vh;
  background: #b4b4b4;
`;
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  background: #b4b4b4;
`;

const Infos = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 5px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  width: 133px;
  cursor: pointer;
  border: 0.5px solid #000;
`;

const Slider = () => {
  /*  const handleClick = (direction) => {
    if (direction === 'left') {
    }
  }; */
  console.log(data);
  return (
    <Container>
      <Slide>
        {data.map((item) => {
          return (
            <SliderWrapper key={item.id}>
              <Arrow position='Left'>
                <ArrowLeftIcon />
              </Arrow>
              <ImgContainer style={item.style}>
                <img height='100%' src={item.img} alt='shopping' />
              </ImgContainer>
              <Infos>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>SHOW NOW</Button>
              </Infos>
              <Arrow position='Right'>
                <ArrowRightIcon />
              </Arrow>
            </SliderWrapper>
          );
        })}
      </Slide>
    </Container>
  );
};

export default Slider;
