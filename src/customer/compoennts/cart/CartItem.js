import {
  AddCircleOutline,
  RemoveCircleOutline,
  RemoveCircleOutlineRounded,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMLAASbDd_mWt2rJTTFcQx5-7ozSKfmroFw&s"
            alt="img"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p>Men Slim Mid Rise Black jeans</p>
          <p className="opacity-50">Size: L,White</p>
          <p className="opacity-70 mt-2">Seller: Crishtion 2fashion</p>

          <div className="flex space-x-6 items-center pt-6 text-gray-900 mt-6">
            <p className="font-semibold">€199</p>
            <p className="opacity-50 line-through">€211</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutline />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutline />
          </IconButton>
        </div>
        <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
