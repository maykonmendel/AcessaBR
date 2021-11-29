import React, { useState, useEffect, useContext } from 'react';
//import { FilterContext } from '../../contexts/FilterContext';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Card from '../Card';
import api from '../../config/api';

SwiperCore.use([Pagination]);

const Slider = () => {
    const { filteredPlaces, setFilteredPlaces } = useContext;
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            const result = await api.get(`/places?category=${filteredPlaces}`);

            if (result.status === 200) {
                setPlaces(result.data);
            }
        }

        fetchPlaces();
        
    }, [filteredPlaces, setFilteredPlaces]);

    return (
        <Swiper
            breakpoints={{
                300: {
                    slidesPerView: 1
                },                
                767: {
                    sliderPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
        >
            {places.map((item) => (
                <SwiperSlide key={item.id}>
                    <Card key={item.id} item={item}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;