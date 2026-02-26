import React from 'react'
import './styles/Hero.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import { heroSlides } from '../util/hero';
const Hero = () => {
  return (
    <div className='hero-container'>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          type: 'fraction',
          el: '.swiper-pagination',
        }}
        navigation={{
          nextEl: '.arr-next',
          prevEl: '.arr-prev'
        }}
        className="hero-slider"
        loop={true}
      >
        {heroSlides.map((slider) => (
          <SwiperSlide
            key={slider.id}
            style={{ backgroundImage: `url(${slider.image.desk})` }}
            className='hero-slide'
          >
            <div className="inner">
              <div className="t-wrap">
                <h2>{slider.title}</h2>
                <p>{slider.subtxt}</p>
                <a href={slider.ctaHref}>{slider.ctaTxt}</a>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero