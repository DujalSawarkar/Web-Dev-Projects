import React from "react";
import "./SwiperCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Data2 from "../../Data2.js";
import SwipeCard from "./SwipeCard.jsx";
const SwiperImage = () => {
  return (
    <div className="image-slider">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {Data2.map((e) => (
          <SwiperSlide>
            <SwipeCard key={e.id} Data2={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperImage;
