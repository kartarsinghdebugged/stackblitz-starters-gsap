'use client'
import React, { useEffect, useRef } from "react";
// import Heroanibar from '../../shared/layout/hero-animation'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,ScrollSmoother,SplitText);
const BannerSection = () => {
  const introTitleRef = useRef(null);

  useEffect(() => {
    const introTitle2Height = introTitleRef.current.clientHeight;
    const viewPostHeight = (window.innerHeight - introTitle2Height) / 2;
    document.querySelector('.fj-spacer01').style.height = `${viewPostHeight}px`;
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

  return (
    <>
   <div className="fj-spacer01"></div>
      <section className='banner fj-container home-banner'>
        <div className=' intro__title2' ref={introTitleRef}>
          <h1 className='fj-h0 fj-dark lg:fj-h0-lg ' >
            User experiences <br/> driven by real-life <br/> experiences
          </h1>
        </div>
        <div className='fj-right  home-ani-1 hero-animation-a-box ' >
          {/* <Heroanibar/> */}
          </div>
       
      </section>
      
    </>
  );
};

export default BannerSection;
