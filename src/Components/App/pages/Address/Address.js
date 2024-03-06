import { useState } from "react";
import address from "./Address.module.css";
import { useEffect } from "react";

const Address = () => {
  return (
    <>
      <div
        className={`flex flex-col flex-wrap px-[45px] dir="rtl ${address.address}`}
        dir="rtl"
      >
        <p className="font-extrabold mt-5">دفتر مرکزی :</p>
        <p className="mt-2">
          تهران، خیابان انقلاب، خیابان فخررازی، خیابان روانمهر، شماره 85
        </p>
        <p className="font-extrabold mt-[30px]">خدمات پس از فروش :</p>
        <p className="mt-3">
          لطفاً کالا را برای بازگرداندن و ارسال آن به خدمات پس از فروش از طریق
          پست، تنها به صندوق پستی 14155/7181 ارسال کنید.
        </p>
        <p className="font-extrabold mt-[30px]">تلفن تماس :</p>
        <p className="mt-2">021-67437 و 63454000-021</p>
        <p className="font-extrabold mt-[30px]">ایمیل :</p>
        <p className="mt-2">info@kalatik.com</p>
      </div>
      <div className="map">
        <div className=""></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.4248708047844!2d51.44316107524761!3d35.61725103348686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f91fc161c34a54b%3A0x89ed60246299336f!2sTehran%20Province%2C%20Rey%2C%20District%2020%D8%8C%20Azadi%2C%20Iran!5e0!3m2!1sen!2s!4v1708093368306!5m2!1sen!2s"
          referrerpolicy="no-referrer-when-downgrade"
          width={600}
          className="w-[100%] my-[25px] "
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Address;
