// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Story from "../Story/Story.js";
import { Carousel } from "flowbite-react";
const Slider = () => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={require("./img/1.jpg")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./img/2.jpg")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./img/3.jpg")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./img/4.jpg")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./img/5.jpg")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./img/6.jpg")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./img/7.jpg")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./img/8.jpg")} alt="" />
        </SwiperSlide>
      </Swiper> 
       {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={require("./img/1.jpg")} className="h-full" />
        <img src={require("./img/2.jpg")} className="h-full" />
        <img src={require("./img/3.jpg")} className="h-full" />
        <img src={require("./img/4.jpg")} className="h-full" />
        <img src={require("./img/5.jpg")} className="h-full" />
      </Carousel>
    </div>  */}
     
   
      <Story />
    </>
  );
};

export default Slider;
