import "./App.css";
import MainCarusel from "./customer/compoennts/homecarusel/MainCarusel";
import HomeSectionCarusel from "./customer/compoennts/homesectioncarseul/HomeSectionCarusel";

import { Mens_Kurta } from "../src/data/Mens_kurta";
import HomePage from "./homepage/HomePage";
import Product from "./customer/compoennts/product/Product";
import ProductDetails from "./customer/compoennts/productdetails/ProductDetails";
import Cart from "./customer/compoennts/cart/Cart";
import CheckOut from "./customer/compoennts/checkout/CheckOut";
import Orders from "./customer/compoennts/order/Orders";
import OrderDetails from "./customer/compoennts/order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
      <div>
      
      </div>
    </div>
  );
}

export default App;
