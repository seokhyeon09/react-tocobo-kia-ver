import React, { useState, useEffect } from 'react'
import './styles/Hero.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import { heroSlides } from '../util/hero';
const Hero = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 1111
  )
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1111)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)

  }, [])

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
            style={{ backgroundImage: `url(${isMobile? slider.image.mobile : slider.image.desk})` }}
            className='hero-slide'
          >
            <div className="inner">
              <div className="t-wrap">
                <h2 dangerouslySetInnerHTML={{__html:slider.title}}></h2>
                <p dangerouslySetInnerHTML={{__html:slider.subtxt}}></p>
                <a href={slider.ctaHref}>{slider.ctaTxt}</a>
              </div>
            </div>


          </SwiperSlide>
        ))}
        <div className='hero-nav'>
          <div className='arr-prev'>prev</div>
          <div className='swiper-pagination'></div>
          <div className='arr-next'>next</div>
        </div>
      </Swiper>
    </div>
  )
}

export default Hero