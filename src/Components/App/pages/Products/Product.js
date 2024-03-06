import { Link } from "react-router-dom";
import product from "./Product.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
const Product = ({ elem }) => {
  const [category, setCategory] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      // setCategory(elem.category)
    }, 4000);
  });
  return (
    <>
      <div className="border-4 rounded-2xl  hover:scale-105  duration-500 hover:border-gray-600 ">
        <div>
          {" "}
          <img src={elem.image} className="size-[180px] mx-auto px-3 pt-3 " />
        </div>
        <div className="text-center text-purple-800 font-bold mt-3">
          {/* {category || (<Skeleton count={1} baseColor="purple" highlightColor={"#5D3FD3"}></Skeleton>)} */}
          {elem.category}
        </div>
        {/* <div className=" bg-teal-600 w-[250px]  text-center">{elem.title}</div> */}

        <div
          className={`p-1 bg-blue-600 mt-3 hover:bg-blue-800 text-white  font-medium  flex justify-center mx-auto w-[60%]  rounded-xl  text-center ${product.price}`}
          dir="rtl"
        >
          <p className="">000</p>
          <p className="">{elem.price}</p>

          <p className="mr-1">تومان</p>
        </div>

        <button className="bg-gray-500 p-2 rounded-b-xl mt-[25px] text-white   mx-auto w-[280px]  hover:rounded-b-xl font-bold hover:bg-gray-800">
          <Link className={product.showmore} to={`/products/${elem.id}`}>
            {" "}
            نمایش بیش تر
          </Link>
        </button>
      </div>
    </>
  );
};

export default Product;
