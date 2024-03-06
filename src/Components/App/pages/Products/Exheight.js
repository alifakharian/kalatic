import Adver from "./Adver";
import Filter from "./Filter";
import product from "./Product.module.css";
import Slider from "./Slider";

const Exheight = () => {
  return (
    <>
      <div className="flex flex-wrap mt-[10px]  justify-center" dir="rtl">
        {/* Filters  */}
        <div className="w-full lg:w-[25%] bg-yellow-3">
          <Filter />
          <Slider />
          <Adver />
        </div>
        <div className="w-full lg:w-[75%] bg-red-  mt-5">
          <div
            className={`flex flex-wrap gap-[30px]  justify-evenly  ${product.showmore}`}
          >
            <div className="border-4 border-gray-300 hover:border-gray-600 hover:scale-105 hover:shadow-xl duration-500 rounded-2xl">
              <img
                src={require("./Exheight-img/1.webp")}
                className="size-[180px] mx-auto"
              />
              <div className="text-center mx-auto block leading-[35px] mt-1 px-2 font-extrabold w-[20vw]">
                اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
              </div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto block mt-5 font-bold py-2 px-4 rounded">
                179.000 هزار تومان
              </button>
              <div className="text-gray-600 line-through text-center mx-auto block  my-3 mt-3">
                299.000 هزار تومان
              </div>
            </div>

            <div className="border-4 border-gray-300 hover:border-gray-600 hover:scale-105 hover:shadow-xl duration-500 rounded-2xl">
              <img
                src={require("./Exheight-img/2.webp")}
                className="size-[180px] mx-auto"
              />
              <div className="text-center mx-auto block mt-1 leading-[35px] px-2 font-extrabold w-[20vw]">
                اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
              </div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto block mt-5 font-bold py-2 px-4 rounded">
                179.000 هزار تومان
              </button>
              <div className="text-gray-600 line-through text-center mx-auto block  my-3 mt-3">
                299.000 هزار تومان
              </div>
            </div>

            <div className="border-4 border-gray-300 hover:border-gray-600 hover:scale-105 hover:shadow-xl duration-500 rounded-2xl">
              <img
                src={require("./Exheight-img/3.webp")}
                className="size-[180px] mx-auto"
              />
              <div className="text-center mx-auto block mt-1 leading-[35px] px-2 font-extrabold w-[20vw]">
                اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
              </div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto block mt-5 font-bold py-2 px-4 rounded">
                179.000 هزار تومان
              </button>
              <div className="text-gray-600 line-through text-center mx-auto block  my-3 mt-3">
                299.000 هزار تومان
              </div>
            </div>
            <div className="border-4 border-gray-300 hover:border-gray-600 hover:scale-105 hover:shadow-xl duration-500 rounded-2xl">
              <img
                src={require("./Exheight-img/4.webp")}
                className="size-[180px] mx-auto"
              />
              <div className="text-center mx-auto block mt-1 leading-[35px] px-2 font-extrabold w-[20vw]">
                اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
              </div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto block mt-5 font-bold py-2 px-4 rounded">
                179.000 هزار تومان
              </button>
              <div className="text-gray-600 line-through text-center mx-auto block  my-3 mt-3">
                299.000 هزار تومان
              </div>
            </div>
            <div className="border-4 border-gray-300 hover:border-gray-600 hover:scale-105 hover:shadow-xl duration-500 rounded-2xl">
              <img
                src={require("./Exheight-img/5.webp")}
                className="size-[180px] mx-auto"
              />
              <div className="text-center mx-auto block mt-1 leading-[35px] px-2 font-extrabold w-[20vw]">
                اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
              </div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto block mt-5 font-bold py-2 px-4 rounded">
                179.000 هزار تومان
              </button>
              <div className="text-gray-600 line-through text-center mx-auto block  my-3 mt-3">
                299.000 هزار تومان
              </div>
            </div>
            <div className="border-4 border-gray-300 hover:border-gray-600 hover:scale-105 hover:shadow-xl duration-500 rounded-2xl">
              <img
                src={require("./Exheight-img/6.webp")}
                className="size-[180px] mx-auto"
              />
              <div className="text-center mx-auto block mt-1 leading-[35px] px-2 font-extrabold w-[20vw]">
                اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
              </div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white text-center mx-auto block mt-5 font-bold py-2 px-4 rounded">
                179.000 هزار تومان
              </button>
              <div className="text-gray-600 line-through text-center mx-auto block  my-3 mt-3">
                299.000 هزار تومان
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exheight;
