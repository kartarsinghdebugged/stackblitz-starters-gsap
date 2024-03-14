"use client";
import React, { useEffect, useRef } from "react";
import ClientSlider from "./client-slider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { getData } from "../../lib/getData";
import OurJourney from '../../components/home/journey'
import Testimonials from '../../components/home/testimonials'
const ClientJourney = ({ data}) => {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);
  const introTitleRef = useRef(null);

  useEffect(() => {
   
    ScrollTrigger.saveStyles(".intro__title3");
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);
    const introTitle = introTitleRef.current;
    const splitText = new SplitText(introTitle, { type: "lines", linesClass: "intro__title3" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".client-section",
        start: "top 70%", // Adjust the start position based on your needs
        end: "bottom 10%", // Adjust the end position based on your needs
        once: true,
        // markers: false,
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

    return () => {
      tl.kill();
      splitText.revert();
    };
  }, []);

//bg-animations//
// const wrapRef = useRef(null);

// useEffect(() => {
//   const wrapElement = wrapRef.current;
//   wrapElement.style.transition = '.6s ease';
//   gsap.to(wrapElement, {
//     backgroundColor: gsap.getProperty('html', '--light-color'),
//     scrollTrigger: {
//       trigger: '.trigger-element',
//       scrub: true,
//       end: 'bottom bottom',
//       // markers: true,
//       onUpdate: ({ progress, direction }) => {
//         // Change the background color based on scroll position
//         const bgColor = progress > 0.3 ? gsap.getProperty('html', '--primary-dark') : gsap.getProperty('html', '--light-color');

//         // Check if scroll is near the end
//         const isNearEnd = direction === 1 && progress > 0.99;

//         // If near the end, transition to white
//         if (isNearEnd) {
//           wrapElement.style.transition = 'background-color .6s ease';
//           wrapElement.style.backgroundColor = gsap.getProperty('html', '--light-color');
//         } else {
//           wrapElement.style.transition = '.6s ease';
//           wrapElement.style.backgroundColor = bgColor;
//         }

//        // Add or remove a className based on the condition
//           const isDarkColor = bgColor === gsap.getProperty('html', '--primary-dark');
//           if (isDarkColor) {
//             wrapElement.classList.add('journey-dark');
//           } else {
//             wrapElement.classList.remove('journey-dark');
//           }
//       },
//     },
//   });
// }, []);
 return (
    <div className="">
      <section className='client-section fj-clear fj-y-120'>
        <div className='fj-inline  fj-container '>
          <h3 className='fj-h3 intro__title3 fj-container2' ref={introTitleRef}>
            Client <br className="hidden"/> journeys
          </h3>
        </div>
        <div className='fj-slider-box'>
          <ClientSlider caseStudySlides={data}/>
        </div>
      </section>
       <OurJourney  className="trigger-element"/>

    </div>
  );
};

export default ClientJourney;
