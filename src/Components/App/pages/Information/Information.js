import { Link } from "react-router-dom";
import inform from "./Information.module.css"

const Information = () => {
  return (
    <>
      <div className={`flex justify-around bg-slate-200 rounded-xl p-2 mt-[40px] flex-wrap gap-y-[20px] ${inform.inform}`} dir="rtl">
        <div className="sm:w-[18%] mr-2">
          <h1>دفتر مرکزی</h1>
          <p className="text-gray-600 mt-5">
            تهران، خیابان انقلاب، خیابان فخررازی، خیابان روانمهر، پلاک 85 ساعت
            پاسخگویی: شنبه تا چهارشنبه 18-9 پنجشنبه 14-9
          </p>
          <p className="text-gray-600">تلفن: 02163454000</p>
          <p className="text-gray-600">ایمیل: info@kalatik.com</p>
        </div>

        <div className="lg:w-[18%] flex flex-col">
          <h1 className="mt-2">اطلاعات</h1>
          <Link className="text-gray-600 hover:text-rose-700  mt-4" to="/address">ارتباط باما</Link>
          <Link to="products" className="text-gray-600 hover:text-rose-700">محصولات جدید</Link>
          <Link to="/" className="text-gray-600 hover:text-rose-700">صفحه اصلی</Link>
          <Link to="/contact" className="text-gray-600 hover:text-rose-700">عضویت</Link>
        </div>

        <div className="lg:w-[18%] flex flex-col">
          <h1 className="mt-2">لینک های مفید</h1>
          <Link className="text-gray-600 hover:text-rose-700 mt-4">روند ارسال سفارشات</Link>
          <Link className="text-gray-600 hover:text-rose-700">مقررات ضمانت 10 روزه</Link>
          <Link className="text-gray-600 hover:text-rose-700">سرویس کنجینه چیست ؟</Link>
          <Link className="text-gray-600 hover:text-rose-700">فروش اقساطی</Link>
        </div>

        <div className="lg:w-[18%] flex flex-col">
          <h1 className="mt-2">حساب کاربری</h1>
          <Link className="text-gray-600 hover:text-rose-700 mt-4">سفارشات من</Link>
          <Link className="text-gray-600 hover:text-rose-700">آدرس های من</Link>
          <Link className="text-gray-600 hover:text-rose-700">اطلاعات شخصی من</Link>
          <Link className="text-gray-600 hover:text-rose-700">تخفیف های من</Link>

        </div>

          <div  className="lg:w-[18%] flex flex-col">
          <h1   className="mt-2">دسترسی سریع</h1>
          <Link className="text-gray-600 hover:text-rose-700 mt-4">قیمت گوشی</Link>
          <Link className="text-gray-600 hover:text-rose-700">گوشی آیفون</Link>
          <Link className="text-gray-600 hover:text-rose-700">گوشی نوکیا</Link>
          <Link className="text-gray-600 hover:text-rose-700">گوشی شیامی</Link>
          <Link className="text-gray-600 hover:text-rose-700">گوشی سامسونگ</Link>
        </div>
      </div>
   
    </>
  );
};

export default Information;
