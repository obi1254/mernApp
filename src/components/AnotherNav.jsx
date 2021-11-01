import { Swiper, SwiperSlide } from 'swiper/react';

const AnotherNav = () => {
  return (
    <Swiper
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
      spaceBetween={20}
      slidesPerView={1}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
    </Swiper>
  );
};
export default AnotherNav;
