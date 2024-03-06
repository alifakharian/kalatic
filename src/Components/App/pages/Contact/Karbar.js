import { FaGift, FaLocationDot, FaStar, FaUserLarge, FaWallet } from "react-icons/fa6";
import { RiHome2Fill } from "react-icons/ri";
import contact from "./Contact.module.css";
import { useState } from "react";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { MdEmail, MdStreetview, MdWorkHistory } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { BsSave2Fill } from "react-icons/bs";
const Karbar = () => {
const [giftcount, setGiftcount] = useState(0);
const [starcount, setStarcount] = useState(0);

  return (
    <>
      {/* <h1 className="text-center text-white p-3 bg-teal-500">Karbar</h1> */}
      <div
        className={`flex flex-wrap   justify-center gap-x-[20px] gap-y-[20px]  mt-5  ${contact.karbar}`}
        dir="rtl"
      >
        <div className="2xl:w-[17vw] border-solid border-2 border-rose-600 rounded-2xl">
          <div className="flex justify-center mt-1 mx-2   gap-x-[30px]">
            <FaUserLarge
              className={`size-[60px] rounded-full bg-rose-600 text-white p-2`}
            />
            <p className="text-rose-600 mt-5 font-extrabold">صفحه شخصی کاربر</p>
          </div>
          <p className="text-gray-700 my-3 text-center  ">
            کاربر گرامی به کالاتیک خوش آمدید
          </p>
        </div>
        <div className="2xl:w-[37vw] flex justify-between border-solid bg-pink-100 border-4 border-pink-100 p-3 rounded-2xl">
          <FaWallet
            className={`size-[55px] mt-4  rounded-xl  text-rose-600 p-2`}
          />
          <p className="text-gray-700  mt-7 text-start ">
            تومان موجودی کیف پول
          </p>
        </div>

        <div className="2xl:w-[17vw] flex justify-between   border-solid border-2 border-rose-600  rounded-2xl">
          <div className="flex">
            <FaGift
              className={`size-[55px] mt-8 mr-2 rounded-xl  text-rose-600 p-2`}
            />
            <p className="mt-11 size-4 mr-3 text-rose-600 font-extrabold">
              {giftcount}
            </p>
          </div>
          <p className="text-gray-700 mt-11 ml-2">در انتظار پرداخت</p>
        </div>

        <div className="2xl:w-[17vw] flex justify-between  border-solid border-2 border-rose-600  rounded-2xl">
          <div className="flex">
            <FaStar
              className={`size-[55px] mt-8 mr-2 rounded-xl  text-rose-600 p-2`}
            />
            <p className="mt-11 size-4  text-rose-600 font-extrabold">
              {starcount}
            </p>
          </div>
          <p className="text-gray-700 mt-11 ml-2">امتیاز و تخفیف</p>
        </div>
      </div>
      <div
        className={`flex flex-wrap justify-  gap-x-[20px] gap-y-[20px]  mt-[50px]  ${contact.karbar}`}
        dir="rtl"
      >
        <div className="2xl:w-[17vw] mb-[150px]  bg-slate- flex flex-col flex-wrap gap-y-[10px] mr-[30px]"dir="rtl">
          <div className="flex mt-3 gap-x-[15px]   text-gray-600 hover:text-rose-600">
          <RiHome2Fill className="size-[20px]"/>
            <p className="">خلاصه فعالیت ها</p>
          </div>
          <div className="flex mt-3 gap-x-[15px]   text-gray-600 hover:text-rose-600">
          <MdWorkHistory  className="size-[20px]"/>
            <p className="">تاریخچه سفارشات</p>
          </div>
          <div className="flex mt-3 gap-x-[15px]    text-gray-600 hover:text-rose-600">
          <FaLocationDot className="size-[20px]"/>
            <p className="">آدرس ها</p>
          </div>
          <div className="flex mt-3 gap-x-[15px]    text-gray-600 hover:text-rose-600">
          <MdEmail className="size-[20px]"/>
            <p className="">پیام ها</p>
          </div>
          <div className="flex mt-3 gap-x-[15px]  text-gray-600 hover:text-rose-600">
          <ImUsers className="size-[20px]"/>
            <p className="">دیدگاه ها</p>
          </div>
          <div className="flex mt-3 gap-x-[15px]   text-gray-600 hover:text-rose-600">
          <BsSave2Fill  className="size-[20px]"/>
            <p className="">علاقه مندی ها</p>
          </div>
          <div className="flex mt-3 gap-x-[15px]   text-gray-600 hover:text-rose-600">
          <MdStreetview  className="size-[20px]"/>
            <p className="">بازدید های اخیر</p>
          </div>
          <div className="flex mt-3 gap-x-[15px]   text-gray-600 hover:text-rose-600">
          <FaUser  className="size-[20px]"/>
            <p className="">اطلاعات حساب کار بری</p>
          </div>
          <div className="flex mt-3 gap-x-[15px]   text-gray-600 hover:text-rose-600">
          <AiFillSound  className="size-[20px]"/>
            <p className="">ارسال تیکت</p>
          </div>
        </div>
        <div className="flex gap-x-[40px] flex-wrap justify-center gap-y-[40px] lg:h-[100px]">
          <div className="2xl:w-[37vw] flex  border-solid bg-pink-100 border-4 border-pink-100 p-3 rounded-2xl">
            <FaShoppingBasket className="size-[50px] rounded-xl bg-rose-600 text-white p-2" />
            <div className="mr-5">
              <p className="text-gray-600">0</p>
              <p className="text-gray-600">سفارش</p>
              <p className="text-rose-600 font-light">جاری</p>
            </div>
          </div>
          <div className="2xl:w-[17vw] flex">
            <FaShoppingBasket className="size-[50px] mr-3 rounded-xl mt-3 bg-rose-600 text-white p-2" />
            <div className="mr-5 mt-3">
              <p className="text-gray-600">0</p>
              <p className="text-gray-600">سفارش</p>
              <p className="text-rose-600 font-light">تحویل شده</p>
            </div>
          </div>
          <div className="2xl:w-[17vw] flex">
            <FaShoppingBasket className="size-[50px] mr-3 rounded-xl mt-3 bg-rose-600 text-white p-2" />
            <div className="mr-5 mt-3">
              <p className="text-gray-600">0</p>
              <p className="text-gray-600">سفارش</p>
              <p className="text-rose-600 font-light">لغو شده</p>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Karbar;
