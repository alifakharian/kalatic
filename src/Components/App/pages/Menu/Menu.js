import { Link, NavLink } from "react-router-dom";
import menu from "./Menu.module.css";

const Menu = () => {
  return (
    <>
      <nav
        className={`flex items-center justify-between flex-wrap bg-slate-600  p-1 ${menu.nav}`}
        dir="rtl"
      >
        <div className="w-full block  justify-center flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm bg-red- mx-auto justify-center text-center lg:flex-grow">
            <NavLink
              href="#responsive-header"
              className="block  mb-5  p-2 lg:inline-block lg:mt-5  text-white hover:bg-rose-600 hover:rounded-lg duration-700"
              to="/"
            >
              صفحه اصلی
            </NavLink>
            <Link
              href="#responsive-header"
              className="block  mb-5  p-2 lg:inline-block lg:mt-5  text-white hover:bg-rose-600 hover:rounded-lg duration-700"
              to="/products"
            >
              محصولات جدید
            </Link>

            <Link
              href="#responsive-header"
              className="block  mb-5  p-2 lg:inline-block lg:mt-5  text-white hover:bg-rose-600 hover:rounded-lg duration-700"
              to="/address"
            >
              ارتباط با ما
            </Link>
          </div>
        </div>
        <Link
          href="#responsive-header"
          className="block  mb-5  p-2 lg:inline-block lg:mt-5  text-white hover:bg-rose-600 hover:rounded-lg duration-700"
          to="/contact"
        >
          عضویت
        </Link>
      </nav>
    </>
  );
};

export default Menu;
