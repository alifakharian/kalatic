
import { Swiper, SwiperSlide } from "swiper/react";
import product from "./Product.module.css";
import { Pagination } from "swiper/modules";
import Discountimg from "../Discountimg/Discontimg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Product = () => {
  const [img,setImg] = useState("")
  const fetchapi = async () =>{
  const data = await axios("https://fakestoreapi.com/products")   
  setImg(data.data) 
  }
  useEffect(()=>{
   fetchapi();
  },[])
  return (
    <div className=" flex flex-wrap">
     
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwipe p-[45px] w-[80%]"
      >

        {img && 
        img.map((elem , index)=>{
            return(<>
            <SwiperSlide className={`gap-x-[60px] bg-slate-200  rounded-b-3xl rounded-2xl ${product.swiperslide}`} key={index}>
             
             <div className="bg-white">
            <img
              src={elem.image}
              className="mx-auto  rounded-xl size-[170px]"
            />
          </div>
          <button class="bg-slate-300 w-[50px] mt-2  text-rose-700  font-bold py-2 ml-3 rounded">
             {elem.id}%
            </button>
            <p className="text-center text-rose-600 font-bold mt-5 mb-3" dir="rtl">
              {elem.category}
          </p>
              <div className="p-[6px] flex justify-center mx-auto w-[50%] mt-3 rounded-xl font-light text-center"
              >
              <p className="mr-1">تومان</p>   
              <p className="">{elem.price}</p>
              <p className="">000</p>
                
              </div>
         
          <button className="bg-rose-700  rounded-b-3xl mt-1 mx-auto w-full text-white hover:bg-rose-800  font-bold py-2 px-4 rounded">
            <Link to="/products"> نمایش بیش تر</Link>
          </button>
            </SwiperSlide> 
            
            </>)
        })
        } 

      </Swiper>

      <div
        className={`bg-rose-600 w-[18%] h-[365px] mt-11 rounded-xl lg:rounded-3xl lg:mr-[10px] ${product.special}`}
        dir="rtl"
      >
        <img
          src={require("./img/sale-icon.png")}
          className="w-[10vw] mx-2  mt-4"
        />
        <p
          className={` text-white font-bold mt-10 sm:text-[30px] text-center ${product.speciallsell}`}
        >
          فروش ویژه
        </p>
        <a className={`text-white text-center font-bold text-[13px] mt-10 block ${product.speciallsell}`} href="#">
          
          <Link to="/products"> مشاهده بیش تر</Link>
        </a>
      </div>

      <Discountimg />
    </div>
  );
};

export default Product;
