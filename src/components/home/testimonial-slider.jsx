"use client";
import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../assets/images/avatar.png";

const TestimonialsSlider = () => {
  const [isClient, setIsClient] = useState(false)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const updateWindowWidth = () => {
    setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateWindowWidth);
      setIsClient(true)
      return () => {
        window.removeEventListener('resize', updateWindowWidth);
      };
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    Draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "100px",
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          Draggable: true,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          Draggable: true,
          centerMode: true,
          arrows: false,
          centerPadding: "0px",
        },
      },
    ],
  };


  const testimonials = [
    {
      avatar: avatar1,
      name: "Sahar Ben Ari",
      position: "CMO / Purple",
      quote: "“Professionals in their craft! Deep understanding of our users and always insistent on the small details.. that which differentiate a good experience from an amazing one.”"
    },
    {
      avatar: avatar1,
      name: "David Laxer",
      position: "CMO / Purple",
      quote: "“Working with Yaeli and Noga gives new meaning to creative collaboration. Beyond simply “getting it”, they challenge you to come up with the best version of your creative self, creating an environment where only the best ideas ultimately prevail. It is a journey like no other I have experienced (pun intended).”"
    },
    {
      avatar: avatar1,
      name: "Evyatar Peretz",
      position: "Chief Innovation & Technology Officer / Israel Ministry of Finance",
      quote: "Yaeli and her team are exceptional at understanding client perspectives, quickly identifying business needs and exceeding expected results. Their work always stands out, often perfect on the first presentation, creating a resounding ‘WOW’. Recently, they showed off their talents by creating a credit card in honor of our project manager, capturing the essence in a way we couldn’t have imagined. I wholeheartedly commend them for their strong commitment to quality."
    },
    {
      avatar: avatar1,
      name: "David Gruberger",
      position: "VP, Projects & Product Director",
      quote: "I enthusiastically recommend Yaeli Paz as a top-notch UX and UI design consultant and product conception expert. Their transformative work on our platform, exceptional designers' talent acquisition, and innovative approach significantly boosted our user engagement. Their expertise has played an indispensable role in our overall success."
    },

  ];


  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleReadMore = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="fjslide testimonial-slider">
      {/* <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="slide" key={index}>
            <div className="frame1 fj-inline">
              <Image src={testimonial.avatar} alt="avatar" />
              <div>
                <h2 className="fj-sub-h2 fj-dark">{testimonial.name}</h2>
                <h6 className="fj-text-r fj-dark">{testimonial.position}</h6>
              </div>
            </div>
            {isClient ?
              <p className="fj-textlg-md fj-dark quote">
                {windowWidth >= 1024 || expandedIndex === index
                  ? testimonial.quote
                  : `${testimonial.quote.slice(0, 140)}${testimonial.quote.length > 140 ? '...' : ''
                  }`}
                {testimonial.quote.length > 140 && windowWidth < 1025 && (
                  <span
                    className="read-more"
                    onClick={() => handleToggleReadMore(index)}
                  >
                    {expandedIndex === index ? 'Read less' : 'Read more'}
                  </span>
                )}
              </p>
              :
              null
            }
          </div>
        ))}
      </Slider> */}
    </div>
  );
};


export default TestimonialsSlider;
