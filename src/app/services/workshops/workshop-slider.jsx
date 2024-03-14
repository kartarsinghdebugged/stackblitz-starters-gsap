"use client";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImg1 from "../../../assets/images/work1.png";
import slideImg2 from "../../../assets/images/work2.png";
import slideImg3 from "../../../assets/images/work3.png";

const Workshopslider = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1728,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="landing-wrapper fj-container fj-visible workshop-slider">
      <div className="landing-inner-content">
        <div className="fjslide">
          <Slider {...settings}>
            <div className="slide">
              <Image src={slideImg1} alt="Slide 1" />
            </div>
            <div className="slide">
              <Image src={slideImg2} alt="Slide 2" />
            </div>
            <div className="slide">
              <Image src={slideImg3} alt="Slide 3" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Workshopslider;
