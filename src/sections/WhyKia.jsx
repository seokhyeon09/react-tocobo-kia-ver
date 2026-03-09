import React from 'react'
import whykia from '../util/whykia'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './styles/WhyKia.scss'

const WhyKia = () => {
  return (
    <div className='inner whykia-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          Why Kia PBV?
        </h2>
        <p className="txt">
          최초의 전용 PBV 모델인 중형 Kia PV5는차량 호출, 딜리버리, 유틸리티 서비스 등주요 도메인에 적합하며,<br/>
          다양한 고객 니즈를 위한컨버전 역량을 갖춘 차량이 될 것입니다.
        </p>
        <a href="#" className="btn">
          Kia PBV 로드맵
        </a>
      </div>
      <div className="slider-wrap">
        <div className="in">
          <Swiper 
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          className="whykia-slider">
            {whykia.map((sl)=>(

            <SwiperSlide 
            style={{backgroundImage:`url(${sl.image})`}}
            key={sl.id} >
              <a href={sl.link}>
              {sl.id}
              </a>
            </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default WhyKia
