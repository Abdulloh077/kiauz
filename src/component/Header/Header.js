import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import "./Header.css";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// import required modules
// import { Navigation } from "swiper";
// import s1 from "../images/k1.jpg";
// import s2 from "../images/k2.jpg";
// import s3 from "../images/k4.jpg";
// import s4 from "../images/k5.jpg";
export default () => {
  return (
    <div className="slid">
      <video
      className="vd"
        src="https://cdn.kia-motors.uz/uploads/files/Sportage 2022.mp4"
        muted="muted"
        autoplay="autoplay"
        loop="loop"
        preload="https://cdn.kia-motors.uz/uploads/files/Sportage 2022.mp4"
        playsinline=""
      ></video>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src={s1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={s2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={s3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={s4} alt="" />
      </SwiperSlide>
    </Swiper> */}
    </div>
  );
};
