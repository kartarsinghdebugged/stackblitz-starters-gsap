'use client'
import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText'
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import HeroMobile2 from '../common/heromobile2'
import HeroTab2 from '../common/herotab2'
gsap.config({trialWarn: false});
const ModrenDays = () => {
  const ModrenTitleRef = useRef(null);
  const ModrenTextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro__title2"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle2 = ModrenTitleRef.current;
    const splitText = new SplitText(introTitle2, { type: "lines", linesClass: "intro__title2" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle2,
        start: "top 60%", 
        end: "top 1%",  
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
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".modren-days .intro-text"); 

    const introText = ModrenTextRef.current;
    const splitText = new SplitText(introText, { type: "lines", linesClass: "intro-text" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introText,
        start: "top 60%", 
        end: "top 100%", 
        once: true, 
        // markers: true
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
      <section className='modren-days fj-clear fj-container'>
        <div className=' fj-container2 fj-align-start'>
          <div className="fj-y-120 fj-inline">
          <div className="modren-days-title" ref={ModrenTitleRef}>
        <h3 className='fj-h3 intro__title2' >
            Modern day <br /> explorers
          </h3>
          </div>
          <div className="" ref={ModrenTextRef}>
          <p className='fj-text-r intro-text'>We help ambitious, forward-thinking, impact-seeking organisations discover a way to their users hearts <br/>through curious exploration and intelligent, thoughtful design.</p>
          </div>
          </div>
         <HeroMobile2/>
         <HeroTab2/>
        </div>
     
      </section>

    </>
  );
};

export default ModrenDays;