import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import Cart from "../customer/compoennts/cart/Cart";
import Navbar from "../customer/compoennts/navbar/Navbar";
import Footer from "../customer/compoennts/footer/Footer";
import Product from "../customer/compoennts/product/Product";
import ProductDetails from "../customer/compoennts/productdetails/ProductDetails";
import CheckOut from "../customer/compoennts/checkout/CheckOut";
import Orders from "../customer/compoennts/order/Orders";
import OrderDetails from "../customer/compoennts/order/OrderDetails";
const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart/checkout" element={<CheckOut />} />
        <Route path="/account/order" element={<Orders />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />

        {/* <MainCarusel /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        {/* <CheckOut /> */}
        {/* <Orders /> */}
        {/* <OrderDetails /> */}
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
