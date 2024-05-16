// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{delay: 2000}}
    >
      <SwiperSlide><p>444</p></SwiperSlide>
      <SwiperSlide><p>555</p></SwiperSlide>
      <SwiperSlide><p>666</p></SwiperSlide>
      <SwiperSlide><p>777</p></SwiperSlide>
      ...
    </Swiper>
  );
};
