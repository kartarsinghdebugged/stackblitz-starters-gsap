import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImg1 from "../../../assets/images/work1.png";
import slideImg2 from "../../../assets/images/work2.png";

const ResearchSlider = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.4,
    slidesToScroll: 1.4,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1728,
        settings: {
            slidesToShow: 1.4,
            slidesToScroll: 1.4,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
            slidesToShow: 1.6,
            slidesToScroll: 1.6,
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
              <Image src={slideImg2} alt="Slide 1" />
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ResearchSlider;
