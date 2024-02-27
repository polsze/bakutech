import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import '/src/css/clients.css';
import BrandOne from '/src/assets/img/img_1.png';
import BrandTwo from '/src/assets/img/img_2.png';
import BrandThree from '/src/assets/img/img_3.png';
import BrandFour from '/src/assets/img/img_4.png';
import BrandFive from '/src/assets/img/img_5.png';

import { EffectCards } from 'swiper/modules';


export default function Clients() {
  return (
    <>
      <div  className='flex flex-row items-center justify-center w-full h-[70vh] bg-black bg-astronauta bg-cover bg-fixed xl:flex-col xl:justify-center sm:bg-center'>
        <div 
          className='flex items-center justify-start h-24 pl-48  xl:pl-4 xl:py-0 sm:mb-12'>
          <h2 className='pl-4 flex items-center justify-center m-auto text-white font-bold text-4xl border-l-8 h-24 border-orange-500' data-aos="zoom-in" >Clientes que confían en nuestro trabajo</h2>
        </div>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper xl:mb-4"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <SwiperSlide>
            <img src={BrandOne}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={BrandTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BrandThree} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BrandFour} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BrandFive} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}