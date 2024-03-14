'use client'
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText, ScrollSmoother, ScrollTrigger } from "gsap/all"

import Link from "next/link";
import CoverBanner from "./cover-banner";
import LineAnimation1 from './line-animation-temp1/line-1'
import LineAnimation11 from './line-animation-temp2/line1'
import LineAnimation31 from './line-animation-temp3/line1'
import LineAnimation41 from './line-animation-temp4/line1'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const CaseBanner = ({ title, subtitle, category, desc, coverImg, tempId }) => {


  const coverImgData = JSON.parse(coverImg);
  const introTitleRef7 = useRef(null);
  const introTitleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro__title2"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle2 = introTitleRef.current;
    const splitText = new SplitText(introTitle2, { type: "lines", linesClass: "intro__title2" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle2,
        start: "top 50%", // Adjust the start position based on your needs
        end: "top 300%",  // Adjust the end position based on your needs
        once: true, 
        
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
  useEffect(() => {
   
    gsap.registerPlugin(SplitText, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-title-7"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle7 = introTitleRef7.current;
    const splitText = new SplitText(introTitle7, { type: "lines", linesClass: "intro-title-7" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle7,
        start: "top 50%",
        once: true,
        markers: false,
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
  const introTitleRef8 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-title-8"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle8 = introTitleRef8.current;
    const splitText = new SplitText(introTitle8, { type: "lines", linesClass: "intro-title-8" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle8,
        start: "top 50%",
        once: true,
        markers: false,
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
      <div className="fj-spacer01"></div>
      <div className="case-banner-section fj-container section-1">
        <section className='banner  case-banner  ' >

          <div className=' fj-container2 fj-relative'>
            <div className="" >
              
            </div>
            <div className=' ' >
              <h1 className='fj-h0 fj-dark intro-title-7 main-title'>{title}</h1>
            </div>

            <div className='fj-inline fj-align-top fj-mt-50 fj-gap-100 intro-title-8 fj-text-lg sub-section '  >
              <div className="left-section">
                <h5 className="fj-textlg-md mb-2 " >
                  {subtitle}
                </h5>
                <ul className="fj-list-container">
                  {category && category?.length > 0 && category?.map((item, index) => (
                    <li className="fj-list-outline" key={index}>
                      {/* <Link href="#" className="fj-text-sm">{item.categoryId}</Link> */}
                      <div className="fj-text-sm">{item.category}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className=""
                dangerouslySetInnerHTML={{ __html: desc }}
              />


            </div>
<div className="animation-div fj-relative">
{tempId === 2 ? <div className="line-11"><LineAnimation11 /> </div>
          : 
          (tempId === 3 ? <div className="line-31"><LineAnimation31 /> </div>
          :
          (tempId === 4 ? <LineAnimation41 /> 
          : <LineAnimation1 className='line-1' />
          ))}
</div>
      
          </div>






          <div className="">
            <CoverBanner coverImg={coverImgData.link} name={coverImgData.name} />
          </div>



        </section>

      </div>
    </>

  );
};

export default CaseBanner;