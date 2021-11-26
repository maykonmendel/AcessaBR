import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Card from '../Card';

SwiperCore.use(Pagination)

const Slider = () => {
    return (
        <Swiper slidesPerView={4}>
            <SwiperSlide>
                <Card />              
            </SwiperSlide>
            <SwiperSlide>
                <Card />              
            </SwiperSlide>
            <SwiperSlide>
                <Card />              
            </SwiperSlide>
            <SwiperSlide>
                <Card />              
            </SwiperSlide>
            <SwiperSlide>
                <Card />              
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;