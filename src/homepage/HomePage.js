import React from "react";
// import HomeSectionCarusel from "./customer/compoennts/homesectioncarseul/HomeSectionCarusel";
import HomeSectionCarusel from "../customer/compoennts/homesectioncarseul/HomeSectionCarusel";
import { Mens_Kurta } from "../data/Mens_kurta";
// import { Mens_Kurta } from "../src/data/Mens_kurta";
const HomePage = () => {
  return (
    <>
      <div className="space-y-10 py-20 flex flex-col justify-center px-4 lg:px-10">
        <HomeSectionCarusel data={Mens_Kurta} nameSection="Men's Kurta" />
        <HomeSectionCarusel data={Mens_Kurta} nameSection="Men's Shoes" />
        <HomeSectionCarusel data={Mens_Kurta} nameSection="Men's Shirts" />
        <HomeSectionCarusel data={Mens_Kurta} nameSection="Women's Saree" />
        <HomeSectionCarusel data={Mens_Kurta} nameSection="Women's Dress" />
      </div>
    </>
  );
};

export default HomePage;
