'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DesignSysSlider = ({ designSysSliderImgs}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    Draggable: true,
    centerPadding: "200px",
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          arrow: false,
          Draggable: true,
          centerPadding: "0px",
        },
      },          
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          arrow: false,
          Draggable: true,
          centerPadding: "0px",
        },
      },          
    ],
  };

  return (
    <div className="landing-wrapper fj-container full-slider">
      <div className="landing-inner-content">
        <div className="fjslide">
        <Slider {...settings}>
            {designSysSliderImgs?.map((item, index) => (
                 <div className="slide" key={index}>
                 <Image src={item.path} alt="Slide 1"  height={100} width={900}/>
                 <figcaption className="fj-text-sm-md fj-uppercase fj-mt-10 caption">{item.img}</figcaption>
               </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    // <div>hello</div>
  );
};

export default DesignSysSlider;
