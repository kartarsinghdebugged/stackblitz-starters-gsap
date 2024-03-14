'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


const MarqueeContainer = ({ label }) => {
  const marqGsap = useRef(null);
  const marqContainer = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: marqContainer.current,
        start: 'top 78%',
        end: 'top 1%',
        scrub: 3,
        // markers: true,
        // pin: true,
        // pinSpacing: true
      }
    });

    tl.fromTo(
      marqGsap.current,
      { xPercent: 0 },
      { xPercent: -76, duration: 2 }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div className="marquee-container fj-container desktop-view" ref={marqContainer}>
        <h1 className="fj-h0 fj-dark  marquee-gsap zoom-text fj-y-120" ref={marqGsap}>
          {label}
        </h1>
      </div>
      <div className="marquee-container tab-mob-view ">
      <div className=' fj-container '>
        <h1 className="fj-h0 fj-dark  zoom-text fj-pt-120" >
          {label}
        </h1>
      </div>
      </div>
     
    </>
  )
}

export default MarqueeContainer