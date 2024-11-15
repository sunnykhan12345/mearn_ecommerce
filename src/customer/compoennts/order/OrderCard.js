import { AdjustOutlined } from "@mui/icons-material";
import { colors, Grid } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <div className="p-5 shadow-lg border hover:shadow-2xl">
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between", mt: 2 }}
      >
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              src="data:image/jpeg;base64,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"
              alt="img"
              className="w-[5rem] h-[5rem] object-cover object-top"
            />
            <div className="ml-5 space-y-2">
              <p>Men Slim Mid Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p className="flex items-center">
                <AdjustOutlined
                  xs={{ width: "10px", height: "10px" }}
                  className="text-green-500 w-[10px] h-[10px] mr-1"
                />
                <span>Delivere On March 03</span>
              </p>
              <p className="capitalize text-xs">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;your item has
                been delivered
              </p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivere On March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
