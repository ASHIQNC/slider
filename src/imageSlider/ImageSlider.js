import React, { useRef, useState } from "react";
import land from "../assets/land.png";
import cat from "../assets/cat.gif";

import arrowLeft from "../assets/left2.png";
import arrowRight from "../assets/right2.png";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";

const ImageSlider = () => {
  const images = [
    require("../assets/pic1.jpg"),
    require("../assets/pic2.jpg"),
    require("../assets/pic3.jpg"),
    require("../assets/pic4.jpg"),
    require("../assets/moon.png"),
  ];
  const parallaxRef = useRef();
  const [sliderIndex, setSliderIndex] = useState(0);
  const [speed, setSpeed] = useState(1);

  const handlePrevClick = () => {
    setSliderIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setSliderIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const slide = useSpring({
    // transform: `translateX(-${sliderIndex * (100 / images.length)}%)`,
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  });

  return (
    <div>
      {/* by default "factor" will be one which means its size is equal to one page
        but we can make to half of the page or more than one page by updating the factor  */}
      {/* The offset of the layer when it's corresponding page is fully in view  */}
      <Parallax
        style={{ backgroundColor: "black" }}
        pages={4}
        ref={parallaxRef}>
        {images.map((image, index) => (
          <ParallaxLayer
            key={index}
            offset={index}
            speed={speed}
            style={{ height: "100%" }}>
            <animated.img style={slide} src={images[sliderIndex]} alt="image" />
          </ParallaxLayer>
        ))}
        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}></ParallaxLayer>
        {/* here the giff we start at begining of second page and ends at half of third page */}
        <ParallaxLayer
          sticky={{ start: 0.3, end: 2.9 }}
          style={{ textAlign: "center" }}>
          <img src={cat} />
        </ParallaxLayer>

        {/* Image Slider Controls */}
        <ParallaxLayer
          sticky={{ start: 0, end: 3.5 }}
          offset={2.2}
          speed={0.1}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <img
            src={arrowLeft}
            alt="Left Arrow"
            style={{ cursor: "pointer", marginRight: "20px", height: "100px" }}
            onClick={handlePrevClick}
          />
          <img
            src={arrowRight}
            alt="Right Arrow"
            style={{ cursor: "pointer", height: "100px" }}
            onClick={handleNextClick}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ImageSlider;
