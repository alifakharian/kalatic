import React, { useState } from "react";
import contact from "./Contact.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { eye } from "react-icons-kit/fa/eye";
import { eyeSlash } from "react-icons-kit/fa/eyeSlash";
import Icon from "react-icons-kit";
import validator from "validator";

const Contact = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepearpassword] = useState("");
  const [fnamme, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [ashna, setAshna] = useState("");
  const [icon, setIcon] = useState(eye);
  const [type, setType] = useState("password");
  const chaneicon = () => {
    if (type === "password") {
      setType("type");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeSlash);
    }
  };
  const navigate = useNavigate();

  const Cheeck = () => {
    if (
      validator.isEmail(email) &&
      password == repeatpassword &&
      phone.length == 11 &&
      phone.substring(0, 2) == "09"
    ) {
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: `${fnamme} ${lname},خوش آمدید`,
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/karbar");
    } else {
      Swal.fire({
        icon: "error",
        timer: 2000,
        title: "ایمیل وارد شده معتبر نمی باشد !!!!!",
      });
      navigate("/contact")
    }
    if (password != repeatpassword) {
      Swal.fire({
        icon: "error",
        timer: 2000,
        title: "رمز عبور و تکرار آن یکسان نمی باشد",
      });
    }
    if (phone.length != 11 && phone.substring(0, 2) != "09") {
      Swal.fire({
        icon: "error",
        timer: 2000,
        title: "شماره تماس وارد شده معتبر نمی باشد",
      });
    }
  };

  return (
    <>
      {/* <h1 className="bg-blue-600 text-white mx-auto text-center">Contact</h1> */}
      <div
        className={`flex justify-around my-5 gap-y-[35px] flex-wrap mb-[100px] ${contact.contact}`}
        dir="rtl"
      >
        <form class="sm:w-[65%] px-[20px] " dir="rtl">
          <div class="relative z-0 w-full mb-5 group">
            <input
              //  type="email"
              // name="floating_email"
              // id="floating_email"
              className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              onChange={(e) => setMail(e.target.value)}
              // required=""
            />

            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              آدرس ایمیل
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type={type}
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}

              // required
            />

            <label
              for="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              رمز عبور
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group flex">
            <input
              type={type}
              //  name="repeat_password"
              //  id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setRepearpassword(e.target.value)}

              //  required
            />
            <Icon
              icon={icon}
              className="absolute left-0 top-4 text-gray-600 font-bold"
              onClick={chaneicon}
            />
            <label
              for="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              تکرار رمز عبور
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                // type="password"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setFname(e.target.value)}

                //required
              />
              <label
                for="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                نام
              </label>
            </div>
            <div className="relative   z-0 w-full group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setLname(e.target.value)}

                // required
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                نام خانوادگی
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 top-[15px] w-full mb-5 group">
              <input
                // type="tel"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                // name="floating_phone"
                // id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                type="number"
                onChange={(e) => setPhone(e.target.value)}

                //   required
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                شماره تماس
              </label>
            </div>
            <div className="relative top-[30px] text-center bottom-[20px]  right-[10px]   w-full mb-5 group">
              <label
                for="countries"
                className={`block  text-gray-500 font-light dark:text-white ${contact.selecttitle} `}
              >
                نحوه آشنایی با ما
              </label>
              <select
                id="countries"
                className="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setAshna(e.target.value)}
              >
                <option className="text-gray-500" value="" selected></option>
                <option className="text-gray-500 text-center" value="Instagram">
                  Instagram
                </option>
                <option className="text-gray-500 text-center" value="Telegram">
                  Telegram
                </option>
                <option className="text-gray-500 text-center" value="linkdin">
                  linkdin
                </option>
                <option className="text-gray-500 text-center" value="website">
                  website
                </option>
                <option className="text-gray-500 text-center" value="You Tube">
                  You Tube
                </option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 mt-[30px] hover:bg-blue-800 focus:ring-4   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700   disabled:bg-slate-700  disabled:cursor-not-allowed "
            disabled={
              email.length == 0 ||
              password.length == 0 ||
              repeatpassword.length == 0 ||
              fnamme.length == 0 ||
              lname.length == 0 ||
              phone.length == 0 ||
              ashna.length == 0
            }
            onClick={Cheeck}
          >
            ثبت
          </button>
        </form>
        <div className="lg:w-[35%]   px-[20px]">
          <img src={require("./img/1.jpg")} className="rounded-3xl" />
        </div>
      </div>
    </>
  );
};

export default Contact;
