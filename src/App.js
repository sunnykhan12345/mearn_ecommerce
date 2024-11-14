import "./App.css";
import MainCarusel from "./customer/compoennts/homecarusel/MainCarusel";
import HomeSectionCarusel from "./customer/compoennts/homesectioncarseul/HomeSectionCarusel";
import Navbar from "./customer/compoennts/navbar/Navbar";
import { Mens_Kurta } from "../src/data/Mens_kurta";
import Footer from "./customer/compoennts/footer/Footer";
import HomePage from "./homepage/HomePage";
import Product from "./customer/compoennts/product/Product";
import ProductDetails from "./customer/compoennts/productdetails/ProductDetails";
import Cart from "./customer/compoennts/cart/Cart";

function App() {
  return (
    <div className="">
      <Navbar />
      {/* <MainCarusel /> */}
      {/* <HomePage /> */}
      {/* <Product /> */}
      {/* <ProductDetails /> */}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
