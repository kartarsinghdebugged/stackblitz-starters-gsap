'use client'
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText, ScrollSmoother, ScrollTrigger } from "gsap/all"
import Image from "next/image";
import ChallangeSlider from "../case/sliders/challange-slider"
import noImg from '../../assets/images/no-img.jpg'
import LineAnimation3 from './line-animation-temp1/line-3'
import LineAnimation13 from '../case/line-animation-temp2/line3'
import LineAnimation33 from '../case/line-animation-temp3/line3'
import LineAnimation34 from '../case/line-animation-temp3/line4'
import LineAnimation43 from '../case/line-animation-temp4/line3'
import LineAnimation44 from '../case/line-animation-temp4/line4'

const Quotes = ({ challengeMainQuote, challengeSubQuote, challengeMainQuoteImg, tempId, challangeSliderImgs }) => {

  const challengeMainQuoteImgData = JSON.parse(challengeMainQuoteImg)
  const introMainTitleRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(" .intro-maintitle"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introMainTitle = introMainTitleRef.current;
    const splitText = new SplitText(introMainTitle, { type: "lines", linesClass: "intro-maintitle" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.challenge-img .fj-mt-10',
        start: "top 80%",
        end: "top 100%", // Adjust the end position based on your needs
        once: true,
        // markers: true,
      },
    });

    tl.from(splitText.lines, {
      opacity: 0,
      y: 200,
      x: 0,
      stagger: .1,
      duration: .4,
      ease: "power3.out",
    });

    // Cleanup function for ScrollTrigger
    return () => {
      tl.kill();
      splitText.revert();
    };
  }, []);
  return (
    <>

      <section className='banner fj-container pt-130 line-ani-3  case-section-3 '>

        <div className='fj-inner  fj-relative fj-y-120'>
          <div className=" fj-text-center">

            {tempId === 3 ? <LineAnimation33 /> : (tempId === 4 ? <LineAnimation43 /> : '')}
          </div>

          <h3 className="fj-h2 " ref={introMainTitleRef}>
            {tempId === 1 || tempId === 4 ? (
              <div className="intro-maintitle fj-h2 quote-text fj-pt-120" dangerouslySetInnerHTML={{ __html: challengeMainQuote }}></div>
            ) : (
              <>
                <div className="intro-maintitle fj-h2 quote-text" dangerouslySetInnerHTML={{ __html: challengeMainQuote }}></div>
                <div className="fj-h4 sub-quote" dangerouslySetInnerHTML={{ __html: challengeSubQuote }}></div>
              </>

            )}


          </h3>

          <div className="animation-div fj-text-right">


            {tempId === 2 ? <div className="fj-text-center"> <LineAnimation13 className="" /> </div> :
              (tempId === 3 ? <div className="line-34">  <LineAnimation34 /></div>
                :
                (tempId === 4 ? <div className="line-44"> <LineAnimation44 /></div> : <div className="fj-text-center">  <LineAnimation3 className="" /> </div>)
              )
            }

          </div>
          {tempId === 1 || tempId === 2 ? (
            <figure className="banner-3 ">
              {challengeMainQuoteImgData.link ? (
                <Image src={challengeMainQuoteImgData.link} width={1480} height={944} alt="Quotes" className="fj-img-fluid" />
              ) : (
                <Image src={noImg} alt="Quotes" className="fj-img-fluid" />
              )}
              <figcaption className="fj-text-sm-md fj-uppercase fj-mt-10">{challengeMainQuoteImgData.name}</figcaption>
            </figure>
          ) : (
            <div className="" >
              {tempId === 4 ?
                <div className="">
                  <video controls={false}
                    width="100%"
                    height="auto"
                    className="video"
                    playsInline={true}
                    muted={true}
                    loop={true}
                    autoPlay={true}
                  >
                    <source src={challengeMainQuoteImgData.link} type='video/mp4;' />
                  </video>
                  <figcaption className="fj-text-sm-md fj-uppercase fj-mt-10">{challengeMainQuoteImgData.name}</figcaption>
                </div>
                : <ChallangeSlider challangeSliderImgs={challangeSliderImgs} />}
            </div>
          )}



        </div>

      </section>
    </>
  );
};

export default Quotes;