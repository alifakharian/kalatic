import Showpro from "../Showpro/Showpro";

const Kindproduct = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 w-full justify-center mx-auto my-3">
        <img src={require("./img/1.jpg")} className="size-[220px]" />
        <img src={require("./img/2.jpg")} className="size-[220px]" />
        <img src={require("./img/3.jpg")} className="size-[220px]" />
        <img src={require("./img/4.jpg")} className="size-[220px]" />
        <img src={require("./img/5.jpg")} className="size-[220px]" />
        <img src={require("./img/6.jpg")} className="size-[220px]" />
      </div>
      <Showpro/>
    </>
  );
};

export default Kindproduct;
