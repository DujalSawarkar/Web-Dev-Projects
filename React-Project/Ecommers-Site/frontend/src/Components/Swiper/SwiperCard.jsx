
import Data2 from "../../Data2.js";
import SwipeCard from "./SwipeCard.jsx";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";



import { Pagination } from "swiper/modules";

export default function SwiperImage() {
  return (
    <>
      <Swiper
        
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper ml-20 mr-20 "
      >
        {Data2.map((e) => (
          <SwiperSlide >
            <SwipeCard key={e.id} Data2={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
