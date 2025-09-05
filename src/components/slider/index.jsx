import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import "./customSlide.css";

function Slider({ products, height, navigationStyle }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      // Access the navigation buttons
      const prevButton = swiperInstance.navigation.prevEl;
      const nextButton = swiperInstance.navigation.nextEl;
      if (prevButton && nextButton) {
        console.log("prevButton", prevButton);
        console.log("nextButton", nextButton);
        prevButton.style.backgroundColor = "#ffffff";
        prevButton.style.padding = "15px 25px";
        prevButton.style.border = "2px solid #ffffff";
        prevButton.style.color = "#000000";
        prevButton.style.borderRadius = "2px";

        nextButton.style.backgroundColor = "#ffffff";
        nextButton.style.padding = "15px 25px";
        nextButton.style.border = "2px solid #ffffff";
        nextButton.style.color = "#000000";
        nextButton.style.borderRadius = "2px";
      }
    }
  }, [products]);

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        navigation
        style={{ height: height, width: "100%" }}
      >
        {products?.map((product, index) => (
          <SwiperSlide key={index}>
            <img
              src={product.imageCover}
              alt={product.title}
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
