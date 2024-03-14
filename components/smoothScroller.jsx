'use client'
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const MyComponent = ({ children }) => {
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollSmoother);
    ScrollSmoother.create({
      smooth: 2,
    //   scrub:3,
      effects: true,
      smoothTouch: 0.5,
    //   trigger: smoothContentRef.current,
    //   start: 'top top',
    //   end: 'bottom bottom',
      // pin: smoothWrapperRef.current,
    });
  }, []);

  return (
    <div ref={smoothWrapperRef} id="smooth-wrapper">
      <div ref={smoothContentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default MyComponent;


