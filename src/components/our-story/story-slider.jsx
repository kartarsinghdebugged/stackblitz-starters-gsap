"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImg1 from "../../assets/images/our-story/photo1.png";
import slideImg2 from "../../assets/images/our-story/photo2.png";
import slideImg3 from "../../assets/images/our-story/photo3.png";
import slideImg4 from "../../assets/images/our-story/photo4.png";
import slideImg5 from "../../assets/images/our-story/photo5.png";
import slideImg6 from "../../assets/images/our-story/photo6.png";
import slideImg7 from "../../assets/images/our-story/photo7.png";
import slideImg8 from "../../assets/images/our-story/photo8.png";

const StorySlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: false,
          speed: 700,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: true,
          centerPadding: '10px',
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1.3,
          slidesToScroll: 1.3,
          centerMode: false,
          variableWidth: true,
          centerPadding: '1px',
        },
      },
     
      {
        breakpoint: 767,
        settings: {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1.1,
          slidesToScroll: 1.1,
          centerMode: true,
          variableWidth: true,
          centerPadding: '1px',
        },
      },

    ],
  };


  return (
    <div className="fjslide fj-visible">
      <Slider {...settings} className="story-slider">


        <div className="fj-slide">
          <Image src={slideImg1} alt="slide1" />
        </div>
        <div className="fj-slide">
          <Image src={slideImg2} alt="slide2" />
        </div>
        <div className="fj-slide">
          <Image src={slideImg3} alt="slide3" />
        </div>
        <div className="fj-slide">
          <Image src={slideImg4} alt="slide4" />
        </div>
        <div className="fj-slide">
          <Image src={slideImg5} alt="slide5" />
        </div>
        <div className="fj-slide">
          <Image src={slideImg6} alt="slide6" />
        </div>
        <div className="fj-slide">
          <Image src={slideImg7} alt="slide7" />
        </div>
        <div className="fj-slide">
          <Image src={slideImg8} alt="slide8" />
        </div>
      </Slider>
    </div>

  );
};

export default StorySlider;
