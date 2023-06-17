import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>  <h2 style={{ textAlign: "center" }} class="section-title">
        <span class="primary-color">
          قيم أساسية
          <svg
            class="title-shape"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
          </svg>
        </span>
      </h2>
      <div class="iconbox-container-bg">
        <div class="iconbox-item-bg">
          <div class="iconbox-content-bg">
            <i aria-hidden="true" class="fas fa-smog"></i>
            <h4>الجودة</h4>
          </div>
        </div>
        <div class="iconbox-item-bg">
          <div class="iconbox-content-bg">
            <i aria-hidden="true" class="icon icon-Leaf"></i>
            <h4>الشمولية</h4>
          </div>
        </div>
        <div class="iconbox-item-bg">
          <div class="iconbox-content-bg">
            <i aria-hidden="true" class="fas fa-fill-drip"></i>
            <h4>التخصص</h4>
          </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
