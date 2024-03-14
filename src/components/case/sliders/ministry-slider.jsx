'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MinistrySlider = ({ ministrySliderImgs}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "200px",
    adaptiveHeight: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          Draggable: false,
          centerPadding: "20px",
        },
      },          
    ],
  };

  return (
    <div className="landing-wrapper fj-container full-slider  minister-slider">
      <div className="landing-inner-content">
        <div className="fjslide">
        <Slider {...settings}>
            {ministrySliderImgs?.map((item, index) => (
                 <div className="slide" key={index}>
                 <Image src={item.sliderImgPath} alt="Slide 1"  height={400} width={900}/>
                 <figcaption className="fj-text-sm-md fj-uppercase fj-mt-10 caption">{item.sliderImg}</figcaption>
               </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    // <div>hello</div>
  );
};

export default MinistrySlider;
