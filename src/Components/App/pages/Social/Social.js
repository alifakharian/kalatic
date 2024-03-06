import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import social from "./Social.module.css"
const Social = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between p-3 gap-y-[20px] mx-auto bg-gray-600">
        <div className="flex flex-wrap justify-start gap-x-[20px] gap-y-[10px] ">
          <FaTelegram className="size-[40px] text-white hover:text-teal-400 hover:scale-125 duration-500" />
          <FaInstagramSquare className="size-[40px] text-white hover:text-teal-400 hover:scale-125  duration-500" />
          <FaLinkedin className="size-[40px] text-white hover:text-teal-400 hover:scale-125  duration-500" />
          <FaTwitterSquare className="size-[40px] text-white hover:text-teal-400 hover:scale-125  duration-500" />
          <FaFacebook className="size-[40px] text-white hover:text-teal-400 hover:scale-125  duration-500" />
          <FaYoutube className="size-[40px] text-white hover:text-teal-400 hover:scale-125 duration-500" />
        </div>
        <div className={`text-white pr-4 mt-1 align-items-center ${social.passage}`}>
          تمامی حقوق متعلق به شرکت کالا پردازش پایا (فروشگاه آنلاین کالاتیک) می
          باشد
        </div>
      </div>
    </>
  );
};

export default Social;
