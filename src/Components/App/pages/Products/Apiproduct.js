import Product from "./Product";

const Apiproduct = ({ img }) => {
  return (
    <>
      <div className="flex flex-wrap justify-around  gap-x-[50px] mb-[60px] mt-5  gap-y-[50px] mx-[5px]">
        {img &&
          img.map((elem) => {
            return (
              <>

                <Product elem={elem} key={elem.id} />
              </>
            );
          })}
      </div>
    </>
  );
};

export default Apiproduct;
