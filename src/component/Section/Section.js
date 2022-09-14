import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Section.css";


import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export default () => {
  return (
    <div className="slid">
      <h2>Modellar</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src="https://cdn.kia-motors.uz/uz/uploads/articles/978/article-original.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.kia-motors.uz/uz/uploads/articles/1126/article-original.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.kia-motors.uz/uz/uploads/articles/1399/article-original.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.kia-motors.uz/uz/uploads/articles/1057/article-original.png" alt="" />
      </SwiperSlide>
       <SwiperSlide>
        <img src="https://cdn.kia-motors.uz/uz/uploads/articles/1114/article-original.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.kia-motors.uz/uz/uploads/articles/1127/article-original.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.kia-motors.uz/uz/uploads/articles/1143/article-original.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.kia-motors.uz/uz/uploads/articles/1642/article-original.png" alt="" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
};
