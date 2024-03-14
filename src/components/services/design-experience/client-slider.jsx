"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImg1 from "../../../assets/images/client-slide-1.png";
import Link from "next/link";
import AnchorDarkBtn from '../../common/anchor-dark-btn'
import btnFill from '../../../assets/images/btn-fill.png'
import Image from "next/image";

const DesignClientSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 2.3,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1728,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 2.3,
          centerMode: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2.1,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1.2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1.6,
          centerMode: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },

    ],
  };


  return (
    <div className="fjslide ">
      <Slider {...settings}>

        <div className="fj-slide-content shape-slide">
          <div className='card-arrow'>
            <AnchorDarkBtn />
          </div>
          <div
            className="fj-slide "
            style={{ backgroundImage: `url(${slideImg1.src})` }}>

            <div className="fj-card fj-bg-300">
              <div className='fj-inline'>
                <div>
                  <p className="fj-text-sm-md fj-uppercase">
                    Israeli Ministry of Health
                  </p>
                  <p className="fj-textlg-md">Digital health at scale</p>
                </div>
                <div>
                  <button className="fj-btn-outline" type="button">
                    <Link className="fj-text-sm fj-decoration-none fj-dark link" href='#'>Design &amp; Experience</Link>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
        <div className="fj-slide-content shape-slide">
          <div className='card-arrow'>
            <AnchorDarkBtn />
          </div>
          <div
            className="fj-slide"
            style={{ backgroundImage: `url(${slideImg1.src})` }}>
            <div className="fj-card fj-bg-300">
              <div className='fj-inline'>
                <div>
                  <p className="fj-text-sm-md fj-uppercase">
                    Israeli Ministry of Health
                  </p>
                  <p className="fj-textlg-md">Digital health at scale</p>
                </div>
                <div>
                  <button className="fj-btn-outline" type="button">
                    <Link className="fj-text-sm fj-decoration-none fj-dark link" href='#'>Design &amp; Experience</Link>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="fj-slide-content shape-slide">
          <div className='card-arrow'>
            <AnchorDarkBtn />
          </div>
          <div
            className="fj-slide"
            style={{ backgroundImage: `url(${slideImg1.src})` }}>
            <div className="fj-card fj-bg-300">
              <div className='fj-inline'>
                <div>
                  <p className="fj-text-sm-md fj-uppercase">
                    Israeli Ministry of Health
                  </p>
                  <p className="fj-textlg-md">Digital health at scale</p>
                </div>
                <div>
                  <button className="fj-btn-outline" type="button">
                    <Link className="fj-text-sm fj-decoration-none fj-dark link" href='#'>Design &amp; Experience</Link>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="fj-slide-content shape-slide">
          <div className='card-arrow'>
            <AnchorDarkBtn />
          </div>
          <div
            className="fj-slide"
            style={{ backgroundImage: `url(${slideImg1.src})` }}>
            <div className="fj-card fj-bg-300">
              <div className='fj-inline'>
                <div>
                  <p className="fj-text-sm-md fj-uppercase">
                    Israeli Ministry of Health
                  </p>
                  <p className="fj-textlg-md">Digital health at scale</p>
                </div>
                <div>
                  <button className="fj-btn-outline" type="button">
                    <Link className="fj-text-sm fj-decoration-none fj-dark link" href='#'>Design &amp; Experience</Link>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="fj-slide-content">
          <div
            className="fj-slide"
            style={{ backgroundImage: `url(${slideImg1.src})` }}>
            <div className="fj-card fj-bg-300">
              <div className='fj-inline'>
                <div>
                  <p className="fj-text-sm-md fj-uppercase">
                    Israeli Ministry of Health
                  </p>
                  <p className="fj-textlg-md">Digital health at scale</p>
                </div>
                <div>
                  <button className="fj-btn-outline" type="button">
                    <Link className="fj-text-sm fj-decoration-none fj-dark link" href='#'>Design &amp; Experience</Link>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Slider>
    </div>

  );
};

export default DesignClientSlider;
