"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ConceptsSlider = ({ conceptIdeationImgs }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          centerPadding: "0px",
        },
      },          
    ],
  };
  return (
    <div className="fjslide fj-inner">
      <Slider {...settings} style={{ outerHeight: '100px' }}>
      {conceptIdeationImgs && conceptIdeationImgs.length > 0 && conceptIdeationImgs.map((item, index) => (
        <div className="fj-concept-slide" key={item.id ? item.id : index}>
          <Image className="fj-w-full fj-contain" src={item.path} width={1615} height={890} alt={`concept-slide-${index + 1}`} />
          <figcaption className="fj-text-sm-md fj-uppercase fj-mt-10 caption">{item.img}</figcaption>
        </div>
      ))}

    </Slider>
    
    </div>
  
  );
};

export default ConceptsSlider;
