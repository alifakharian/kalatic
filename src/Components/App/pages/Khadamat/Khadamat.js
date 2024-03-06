import khadamat from "./Khadamat.module.css";

const Khadamat = () => {
  return (
    <>
      <div
        className={`flex justify-around flex-wrap gap-y-5 my-[20px] ${khadamat.khadamat}`}
        dir="rtl"
      >
        <div className="flex">
          <img src={require("./img/1.jpg")} alt="" />
          <p className="m-3 text-gray-600">روند بازگشت سفارشات</p>
        </div>
        <div className="flex">
          <img src={require("./img/2.jpg")} alt="" />
          <p className="m-3 text-gray-600">10 روز ضمانت بازگشت</p>
        </div>
        <div className="flex">
          <img src={require("./img/3.jpg")} alt="" />
          <p className="m-3 text-gray-600">ضمانت اصالت کالا</p>
        </div>
        <div className="flex">
          <img src={require("./img/4.jpg")} alt="" />
          <p className="m-3 text-gray-600">تضمین بهترین قیمت</p>
        </div>
      </div>
    </>
  );
};

export default Khadamat;
