import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Navigation } from "swiper/modules";
import product from "./Product.module.css";
import { useEffect } from "react";

const Slider = () => {
  const [rotate, setRotate] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setRotate(false);
    },4000);
  }, []);

  return (
    <>
      {/* منو بچرخون */}
      {/* <div>{rotate? <div className={`text-center tracking-[0.25rem] rounded-2xl duration-1000 ${product.rotate}`}>منو بچرخون</div>:<div className={`rounded-2xl  text-center ${product.hidenrotate} duration-1000 scale-50`}>منو بچرخون</div>}</div> */}
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
          // pagination: "true",
          navigation: "true",
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCube, Pagination, Navigation]}
        className={`mySwiper p-[20px] shadow-2xl   ${product.showmore}`}
      >
        <SwiperSlide className={`bg-white p-2 ${product.firstswiperslider}`}>
          <div>
            {rotate ? (
              <div
                className={`text-center tracking-[0.38rem] rounded-2xl duration-1000 ${product.rotate}`}
              >
                منو بچرخون
              </div>
            ) : (
              <div
                className={`rounded-2xl  text-center ${product.hidenrotate} duration-1000  scale-50`}
              >
                منو بچرخون
              </div>
            )}
          </div>
          <img src={require("./img/3.webp")} className="mx-auto text-center" />
          <p className="mt-1 text-center  mx-auto leading-[35px]">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto block mt-5 font-bold py-2 px-4 rounded">
            179.000 هزار تومان
          </button>

          <p className="text-gray-600 line-through text-center mx-auto block my-3 mt-3">
            299.000 هزار تومان
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-2">
          <img src={require("./img/2.webp")} className="mx-auto text-center" />
          <p className="mt-1 text-center  mx-auto leading-[35px]">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto block mt-5 font-bold py-2 px-4 rounded">
            179.000 هزار تومان
          </button>

          <p className="text-gray-600 line-through text-center mx-auto block  my-3 mt-3">
            299.000 هزار تومان
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-2">
          <img src={require("./img/1.webp")} className="mx-auto text-center" />
          <p className="mt-1 text-center  mx-auto leading-[35px]">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto block mt-5 font-bold py-2 px-4 rounded">
            179.000 هزار تومان
          </button>

          <p className="text-gray-600 line-through text-center mx-auto block  my-3 mt-3">
            299.000 هزار تومان
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-2">
          <img src={require("./img/4.webp")} className="mx-auto text-center" />
          <p className="mt-1 text-center  mx-auto leading-[35px]">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto block mt-5 font-bold py-2 px-4 rounded">
            179.000 هزار تومان
          </button>

          <p className="text-gray-600 line-through text-center mx-auto block  my-3 mt-3">
            299.000 هزار تومان
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-2">
          <img src={require("./img/5.webp")} className="mx-auto text-center" />
          <p className="mt-1 text-center  mx-auto leading-[35px]">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto block mt-5 font-bold py-2 px-4 rounded">
            179.000 هزار تومان
          </button>

          <p className="text-gray-600 line-through text-center mx-auto block  my-3 mt-3">
            299.000 هزار تومان
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
