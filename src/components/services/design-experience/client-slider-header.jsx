'use client'
import React, {useRef, useEffect} from "react";
import gsap from "gsap/all";
import {SplitText, ScrollTrigger} from "gsap/all"
import ClientSlider from "../../home/client-slider";
const ClientSliderHead = () => {
  const introSectionRef1 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    ScrollTrigger.saveStyles(".section1"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introSection1 = introSectionRef1.current;
    const splitText = new SplitText(introSection1, { type: "lines", linesClass: "section1" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introSection1,
        start: "top 50%",
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
      <section className='client-section fj-clear fj-y-120 fj-container'>
          <div className='fj-container2' >
            <h3 className='fj-h3 section1' ref={introSectionRef1}>
              Client journeys
            </h3>
          </div>
          <div className='fj-slider-box'>
            <ClientSlider />
          </div>
      </section>

    </>
  );
};

export default ClientSliderHead;