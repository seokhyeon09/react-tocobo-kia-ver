import React from 'react'
import './styles/TopBanner.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

import { headerData } from '../util/header';

const TopBanner = () => {
    const banner = headerData.topBanner;
    return (
        <div className='topBanner'>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{ delay: 3000 }}
                direction={'vertical'}
                modules={[Autoplay]}
            >
                {banner.map((item) => (
                    <SwiperSlide key={item.id}>
                        <a href={item.href}>{item.text}</a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default TopBanner