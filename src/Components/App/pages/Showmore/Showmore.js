import { Accordion } from "flowbite-react";
import showmore from "./Showmore.module.css"

const Showmore = () => {
  return (
    <>
      <div
        className={`container-fluid gap-y-[30px] flex flex-wrap justify-between mx-[20px] mt-[30px] ${showmore.showmore}`}
        dir="rtl"
      >
        <div className="lg:w-[55%]">
          <Accordion>
            <Accordion.Panel> 
              <Accordion.Title className="text-rose-500 mx-auto text-center">
                فروشگاه اینترنتی کالاتیک؛ یک خرید به صرفه
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  کالاتیک یکی از بزرگ‌ترین فروشگاه‌های لوازم دیجیتال است که سبدی
                  متنوع از کالاهای پرطرفدار از برندهای معتبر را در کنار قیمت های
                  شگفت‌انگیز به کاربران ارائه می‌دهد. در کالاتیک می‌توانید نسبت
                  به خرید گوشی موبایل از برندهای مطرح، خرید لوازم جانبی انواع
                  گوشی و تبلت، خرید ساعت هوشمند و دستبند سلامت و خرید لپ تاپ و
                  لوازم جانبی کامپیوتر اقدام کنید.
                </p>
                <h1 className="mt-10 text-rose-500">
                 خرید گوشی موبایل
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  بسیاری از کاربران، قیمت گوشی های روز بازار را از سایت کالاتیک
                  بررسی می‌کنند؛ زیرا کالاتیک همواره تلاش می‌کند علاوه بر فروش
                  اجناس، با برخورداری از ضمانت اصالت کالا و داشتن گارانتی معتبر،
                  محصولات را به بهترین قیمت در اختیار کاربران قرار دهد. به همین
                  منظور می‌توانید در زمان خرید گوشی موبایل اطمینان خاطر حاصل
                  کنید که بهترین قیمت گوشی در اختیارتان قرار می‌گیرد.
                </p>
                <h1 className=" mt-11 text-rose-500">
                  خرید لوازم جانبی
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  ما همواره تلاش می‌کنیم لوازم جانبی پرطرفدار و محبوب هر محصولی
                  که در سایت کالاتیک موجود می‌شود را با برچسب قیمت مناسب در
                  اختیار کاربران قرار دهیم. در صورتی که نسبت به خرید گوشی یا
                  محصول دیگری علاقه‌مند شده‌اید، اما لوازم جانبی مدنظرتان موجود
                  نیست، می‌توانید با واحد پشتیبانی تماس بگیرید و نسبت به موجود
                  شدن اقلام مدنظرتان اقدام کنید. واحد تامین کالاتیک در صورت
                  امکان، نسبت به موجود کردن محصول یا محصولات مدنظرتان در اسرع
                  وقت اقدام خواهد کرد.
                </p>
                <h1 className="mt-10 text-rose-500">
                  تضمین اصالت کالا
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  کالاتیک همواره مشتری‌مداری را الگوی خود قرار می‌دهد تا اجناس
                  اصل در اختیار کاربران قرار گیرد و از فروش گوشی یا هر محصول
                  دیگری که به‌صورت های‌کپی باشد، خودداری می‌کند. به این نکته
                  باید اشاره کرد که پایین‌تر بودن قیمت گوشی یا اقلام دیگر مانند
                  تبلت، ساعت هوشمند، هندزفری یا لپ تاپ به معنی تقلبی یا های‌کپی
                  بودنشان نیست؛‌ بلکه قیمت گذاری کالاها به سیاست کالاتیک
                  بازمی‌گردد که محصولات از برچسب قیمت منصفانه برخوردار باشند.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="lg:w-[30%] gap-x-[10px] gap-y-[40px]  flex flex-wrap justify-end">
            <img src={require("./img/1.png")}  className="sm:size-[80px]" />
            <img src={require("./img/2.webp")} className="sm:size-[80px]" />
            <img src={require("./img/3.webp")} className="sm:size-[80px]" />
            <img src={require("./img/5.webp")} className="sm:size-[80px]" />
        </div>
      </div>
    </>
  );
};

export default Showmore;
