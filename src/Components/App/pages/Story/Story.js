import Product from "../Product/Product";
import story from "./Story.module.css";


const Story = () => {
  return (
    <>
      <div className={` flex justify-center mt-5 gap-x-[50px] gap-y-[25px] flex-wrap ${story.story}`}>
        <div className="">
          <img src={require("./img/1.webp")} className="border-[4px] border-rose-800 bg-rose-300 rounded-full p-1" />
          <p className="mt-1">خرید اقساطی</p>
        </div>
        <div className="">
          <img src={require("./img/2.webp")} className="border-4 border-rose-800 bg-rose-300 rounded-full p-1" />
          <p className="mt-1">سوشال مدیا</p>
        </div>
        <div className="">
          <img src={require("./img/3.webp")} className="border-4 border-rose-800 bg-rose-300 rounded-full p-1" />
          <p className="mt-1">اوج جذابیت</p>
        </div>
        <div className="">
          <img src={require("./img/4.webp")} className="border-4 border-rose-800 bg-rose-300 rounded-full p-1" />
          <p className="mt-1">چرا کالا تیک</p>
        </div>
        <div className="">
          <img src={require("./img/5.webp")} className="border-4 border-rose-800 bg-rose-300 rounded-full p-1" />
          <p className="mt-1">دنیای گیمینگ</p>
        </div>
       
      </div>
      <Product/>
    </>
  );
};

export default Story;
