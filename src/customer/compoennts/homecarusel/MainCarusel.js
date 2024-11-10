import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCaruselData } from "./MainCaruselData";

const MainCarousel = () => {
  const items = MainCaruselData.map((item) => (
    <img src={item.image} className="w-full h-[400px] object-cover" alt="" />
  ));
  return (
    <AliceCarousel
      items={items}
      controlsStrategy="alternate"
      autoPlay
      disableButtonsControls={true} // Disable next and previous buttons
    />
  );
};

export default MainCarousel;
