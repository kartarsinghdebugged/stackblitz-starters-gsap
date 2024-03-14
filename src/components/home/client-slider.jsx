"use client";
import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ClientSlider = ({ caseStudySlides }) => {
  
  const landingWrapperRef = useRef(null);
  const landingInnerContentRef = useRef(null);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: 10,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1728,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          intialSlide: 0,
          centerMode: false,
          dots: false,
          Draggable: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
          Draggable: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
          Draggable: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
          Draggable: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
          Draggable: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
          Draggable: true,
          variableWidth: true,
        },
      },

    ],
  };
  const router = useRouter();
  const handleTitle = (title) => {
    const titleArr = title.split(" ").join("-");
    return titleArr;
  };

  const getImageUrl = (image) => {
    const parseImg = JSON.parse(image);
    return parseImg?.link
  }

  const handleCaseStudy = (title, id) => {
    router.push(`/case-study/${handleTitle(title)}_${id}`)
  }

  return (
    <div className="landing-wrapper fj-container fj-visible">
      {/* Your JSX content */}
      <div className="landing-inner-content">
        <div className="fjslide">
          {/* <Slider {...settings} ref={sliderRef}>
            {caseStudySlides && caseStudySlides.length > 0 && caseStudySlides.map((item) => (
              <div className={`fj-slide-content shape-slide slide-${handleTitle(item.title)} ${item.isTransparent ? 'transparent-slide' : ''}`} key={item.id} ref={landingWrapperRef} onClick={() => handleCaseStudy(item.title, item.id)}>
                <div className='card-arrow'>
                  <Link href={`/case-study/${handleTitle(item.title)}_${item.id}`} className="fj-anchor-circle">
                    <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" fill="#2D2D2D" />
                        <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="#2D2D2D" strokeWidth="1.5" />
                        <path d="M14.6436 21.4419L21.2433 14.8423M21.2433 14.8423L14.6436 14.8422M21.2433 14.8423L21.2432 21.4419" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </div>
                <div>
                  <div className="fj-relative slide-data">
                    <div className="fj-card">
                      <div className='fj-inline fj-align-start'>
                        <div className="left">
                          <p className="fj-text-sm-md fj-uppercase">
                            {item.subtitle}
                          </p>
                          <p className="fj-textlg-md">{item.title}</p>
                        </div>
                        <div>
                          <button className="fj-btn-outline" type="button">
                            <Link className="fj-text-sm fj-decoration-none fj-dark link" href={`/case-study/${handleTitle(item.title)}_${item.id}`}>
                              {item?.caseStudyCategories[0].category}
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="fj-slide" style={{ backgroundImage: `url(${getImageUrl(item.thumbnailImg)})` }} ref={landingInnerContentRef}></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
