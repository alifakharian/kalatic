import { Accordion, Button } from "flowbite-react";
import product from "./Product.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Filter = () => {
  const [fader, setFader] = useState(0);
  const navigate = useNavigate();

  const ok = () => {
    if (fader == 0) {
      Swal.fire({
        icon: "error",
        text: "محدوده قیمت را تععین کنید",
      });
    }
    if (fader <= 5000000 && fader > 0) {
      navigate("/kam");
    }
    if (fader <= 10000000 && fader > 5000000) {
      navigate("/medium");
    }
    if (fader <= 15000000 && fader > 10000000) {
      navigate("/height");
    }
    if (fader <= 20000000 && fader > 15000000) {
      navigate("/exheight");
    } else {
      console.log("jhtyr");
    }
  };

  return (
    <div className={` ${product.showmore}`}>
      {/* <p className="text-center my-3 p-3 mx-2"> فیلتر ها بر اساس</p> */}
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title className="text-gray-500 mx-auto text-center">
            قیمت
          </Accordion.Title>
          <Accordion.Content className="text-center">
            <input
              type="range"
              min="0"
              max="20000000"
              step="5000000"
              value={fader}
              className=""
              onChange={(e) => {
              setFader(e.target.value);
              }}
            />
            <div className="flex flex-wrap justify-center gap-x-1">
              <div>{fader}</div>
              <div>تومان</div>
            </div>
            <button
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold  py-2 px-4  mt-5 rounded-lg inline-flex "
              onClick={ok}
            >
              <span>فیلتر</span>
            </button>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Filter;
