import Kindproduct from "../Kindproduct/Kindproduct";

const Discountimg = () => {
  return (
    <>
      <div className="flex flex-wrap gap-x-2 gap-y-3 w-full justify-around mx-auto my-3">
        <img src={require("./img/1.jpg")} className="sm:w-[24%] rounded-2xl" />
        <img src={require("./img/2.jpg")} className="sm:w-[24%] rounded-2xl" />
        <img src={require("./img/3.jpg")} className="sm:w-[24%] rounded-2xl" />
        <img src={require("./img/4.jpg")} className="sm:w-[24%] rounded-2xl" />
      </div>
      <Kindproduct/>
    </>
  );
};

export default Discountimg;
