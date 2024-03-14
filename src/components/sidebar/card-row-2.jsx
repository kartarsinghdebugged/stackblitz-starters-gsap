'use client'
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const CardRow2 = ({ closeMenu }) => {
  //video animation//
  const videoRef1 = useRef();
  const videoRef2 = useRef();
  const videoRef3 = useRef();

  const handleMouseEnter = (videoRef) => {
    const videoElement = videoRef.current;
    videoElement.play();
  };

  const handleMouseLeave = (videoRef) => {
    const videoElement = videoRef.current;
    videoElement.pause();
    videoElement.currentTime = 0; // Reset video to the beginning
  };

  return (
    <>
      {/* Card 1 */}
      <div className="fj-relative row-2">
      <div className="card-arrow">
            <span className="fj-anchor-circle">
              <span className="fj-anchor-style">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.64266 7.44191L8.24233 0.84225M8.24233 0.84225L1.6426 0.842201M8.24233 0.84225L8.24226 7.44186" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </div>
          <div
        className=" fj-w-226 service-card other-services row-1 card2"
        onMouseEnter={() => handleMouseEnter(videoRef1)}
        onMouseLeave={() => handleMouseLeave(videoRef1)}
      >
        <Link href="/services/design-experience" onClick={closeMenu}>
          <div className="text-container">
            <video
              width="100%"
              height="100%"
              className="video desktop-video"
              playsInline={true}
              webkit-playsinline="true"
              preload="auto"
              muted={true}
              ref={videoRef1}
            >
              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/design-exp-ani.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/design-exp-ani.webm" type="video/webm" />
            </video>
            <video
              width="100%"
              height="100%"
              className="video mobile-video"
              playsInline={true}
              webkit-playsinline="true"
              preload="auto"
              muted={true}
              loop={true}
              autoPlay={true}
            
            >
              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/design-exp-ani.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/design-exp-ani.webm" type="video/webm" />
            </video>
            <h4 className="fj-textr-md fj-dark">Design &amp; <br />Experience </h4>
          </div>
         
        </Link>
      </div>
      </div>
   

      {/* Card 2 */}
      <div className="fj-relative  row-2">
      <div className="card-arrow">
            <span className="fj-anchor-circle">
              <span className="fj-anchor-style">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.64266 7.44191L8.24233 0.84225M8.24233 0.84225L1.6426 0.842201M8.24233 0.84225L8.24226 7.44186" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </div>
          <div
        className="fj-relative fj-w-226 service-card other-services row-1"
        onMouseEnter={() => handleMouseEnter(videoRef2)}
        onMouseLeave={() => handleMouseLeave(videoRef2)}
      >
        <Link href="/services/concept-prototyping" onClick={closeMenu}>
          <div className="text-container">
            <video
              width="100%"
              height="100%"
              className="video desktop-video"
              playsInline={true}
              webkit-playsinline="true"
              preload="auto"
              muted={true}
              ref={videoRef2}
            >
              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/prototyping-ani.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/prototyping-ani.webm" type="video/webm" />
            </video>
            <video
              width="100%"
              height="100%"
              className="video  mobile-video"
              playsInline={true}
              webkit-playsinline="true"
              preload="auto"
              muted={true}
              loop={true}
              autoPlay={true}
            >
              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/prototyping-ani.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/prototyping-ani.webm" type="video/webm" />
            </video>
            <h4 className="fj-textr-md fj-dark"><span className="desktop-text">Proof of concept</span> <span className="tab-text">POC</span> &amp; <br />Prototyping </h4>
          </div>
        
        </Link>
      </div>
      </div>
    

      {/* Card 3 */}
      <div className="fj-relative">
      <div className="card-arrow">
            <span className="fj-anchor-circle">
              <span className="fj-anchor-style">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.64266 7.44191L8.24233 0.84225M8.24233 0.84225L1.6426 0.842201M8.24233 0.84225L8.24226 7.44186" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </div>
          <div
        className="fj-relative fj-relative service-card other-services row-1 fj-w-471"
        onMouseEnter={() => handleMouseEnter(videoRef3)}
        onMouseLeave={() => handleMouseLeave(videoRef3)}
      >
        <Link href="/our-story" onClick={closeMenu}>
                  <div className=' no-cursor'>
            <div className="fj-text-right">
              <video
                width="100%"
                height="200"
                className="video desktop-video"
                playsInline={true}
                webkit-playsinline="true"
                preload="auto"
                muted={true}
                ref={videoRef3}
              >
                 <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/Our_Story_ani.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/Our_Story_ani.webm" type="video/webm" />
              </video>
              <video
                width="100%"
                height="200"
                className="video  mobile-video"
                playsInline={true}
                webkit-playsinline="true"
                preload="auto"
                muted={true}
                loop={true}
                autoPlay={true}
              >
                 <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/Our_Story_ani.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/Our_Story_ani.webm" type="video/webm" />
              </video>
            </div>
            <h4 className="fj-textr-md fj-dark">Our Story </h4>
          </div>
       
        </Link>
      </div>
      </div>
      
    </>
  );
};

export default CardRow2;
