import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Magnifier from "react-glass-magnifier";
import product from "./Product.module.css";

const Singelproduct = () => {
  const { id } = useParams();
  const [singelproduct, setSingelproduct] = useState("");
  const [loading, setLoadding] = useState(true);
  try {
    const axiousapi = async () => {
      const data = await axios(`https://fakestoreapi.com/products/${id}`);
      setSingelproduct(data.data);
      setLoadding(false)
    };
    useEffect(() => {
      axiousapi();
    }, []);
  } catch {}
  return (
    singelproduct && (
      <>
        <div>
          {loading ? (
            <>
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8  mx-auto mt-3 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <div
          className="flex  gap-y-[20px] px-[5px] justify-around  mb-[100px] mt-[30px]  flex-wrap"
          dir=""
        >
          <div className="border-4 rounded-3xl   border-gray-600" dir="">
            <div className="img-fluid lg:w-[450px] ">
              <Magnifier
                imageUrl={singelproduct.image}
                imgAlt="small image"
                zoomFactor={2}
                glassDimension={120}
                largeImageUrl={singelproduct.image}
                glassBorderColor="gray"
                glassBorderWidth={4}
              />
            </div>

            <button className="bg-gray-500  p-2 rounded-b-2xl  text-white w-full mx-auto hover:rounded-b-2xl font-bold hover:bg-gray-800">
              <Link className={product.showmore} to="/products">
                {" "}
                صفحه محصولات
              </Link>
            </button>
          </div>

          <div className="" dir="rtl">
            <div className="px-[5px]" dir="rtl">
              <div
                className={`text-purple-800 mx-[5px] font-bold ${product.singeltitle}`}
              >
                {singelproduct.title}
              </div>
              <div
                className={`flex  flex-wrap mx-[5px] mt-[20px] gap-x-[40px] gap-y-[20px] ${product.code}`}
              >
                <p className="text-gray-600">
                  نوع محصول : {singelproduct.category}
                </p>
                <p className="text-gray-600">
                  کد فروش : {singelproduct.rating.count}
                </p>
              </div>
              <div
                className={`p-1 text-blue-500 mx-[5px] mt-[20px] font-extrabold flex ${product.singelprice}`}
                dir="rtl"
              >
                <p className="">000</p>

                <p className="">{singelproduct.price}</p>
                <p className="mr-1">تومان</p>
              </div>
              <h1 className={` my-[20px] mx-[5px] ${product.titledescription}`}>
                درباره محصول :
              </h1>
              <div>
                <div
                  dir=""
                  className={`w-[65vw] leading-[35px] mx-auto  text-gray-700 ${product.description}`}
                >
                  {singelproduct.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Singelproduct;
