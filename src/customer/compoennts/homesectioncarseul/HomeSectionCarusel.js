import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../homesectioncard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarusel = ({ data, nameSection }) => {
  const carouselRef = useRef(null); // Add ref to access AliceCarousel methods

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const slidePrev = () => carouselRef.current?.slidePrev(); // Use carouselRef to call slidePrev
  const slideNext = () => carouselRef.current?.slideNext(); // Use carouselRef to call slideNext

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="border relative px-4 lg:px-8">
      <h2 className="text-2xl text-gray-900 text-start py-5 font-semibold">
        {nameSection}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} // Attach the ref to AliceCarousel
          items={items}
          controlsStrategy="alternate"
          disableButtonsControls={true} // Disable default buttons
          responsive={responsive}
          disableDotsControls
        />
        <Button
          onClick={slideNext}
          variant="contained"
          className="absolute bg-red-400"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
        <Button
          onClick={slidePrev}
          variant="contained"
          className="absolute bg-red-400"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarusel;
