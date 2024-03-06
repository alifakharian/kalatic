import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu/Menu.js";
import Slider from "./pages/Slider/Slider.js";
import Story from "./pages/Story/Story.js";
import Product from "./pages/Product/Product.js";
import Discountimg from "./pages/Discountimg/Discontimg.js";
import Kindproduct from "./pages/Kindproduct/Kindproduct.js";
import Showpro from "./pages/Showpro/Showpro.js";
import Khadamat from "./pages/Khadamat/Khadamat.js";
import Information from "./pages/Information/Information.js";
import Showmore from "./pages/Showmore/Showmore.js";
import Products from "./pages/Products/Products.js";
import Contact from "./pages/Contact/Contact.js";
import Singelproduct from "./pages/Products/Singelproduct.js";
import Address from "./pages/Address/Address.js";
import Social from "./pages/Social/Social.js";
import Karbar from "./pages/Contact/Karbar.js";
import Kam from "./pages/Products/Kam.js";
import Medium from "./pages/Products/Medium.js";
import Height from "./pages/Products/Height.js";
import Exheight from "./pages/Products/Exheight.js";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Slider />}></Route>
          <Route path="/" element={<Story />}></Route>
          <Route path="/" element={<Product />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<Singelproduct />}></Route>
          <Route path="/" element={<Discountimg />}></Route>
          <Route path="/" element={<Kindproduct />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/karbar" element={<Karbar />}></Route>
          <Route path="/" element={<Showpro />}></Route>
          <Route path="/address" element={<Address />}></Route>
          <Route path="/kam" element={<Kam />}></Route>
          <Route path="/medium" element={<Medium />}></Route>
          <Route path="/height" element={<Height />}></Route>
          <Route path="/exheight" element={<Exheight />}></Route>
          
        </Routes>
        <Khadamat />
        <Showmore />
        <Information />
        <Social />
      </BrowserRouter>
    </>
  );
};

export default App;
