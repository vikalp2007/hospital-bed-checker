import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSlider = () => {
  return (
    <Carousel
      showArrows={true}
      animationHandler="fade"
      autoPlay={true}
      interval={1200}
      infiniteLoop={true}
    >
      <div>
        <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1601841197690-6f0838bdb005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1601841197690-6f0838bdb005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <p className="legend">Legend 1</p>
      </div>
    </Carousel>
  );
};

export default HeroSlider;
