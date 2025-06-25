// components/LoopSlider.jsx
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // basic theme
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const LoopSlider = ({
    works
}) => {
  return (
    <div className="w-full">
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          gap: "1rem",
          arrows: false,
          pagination: false,
          drag: false,
          breakpoints: {
            768: {
              perPage: 2,
            },
        },
          autoScroll: {
            speed: 0.7,
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
          },
          
        }}
        extensions={{ AutoScroll }}
      >
        {works.map((work, i) => (
          <SplideSlide key={i}>
            <div>
              <img src={work} className="w-full rounded-2xl"/>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default LoopSlider;
