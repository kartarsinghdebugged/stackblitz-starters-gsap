'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BodyWrapper = ({ children }) => {
  const wrapRef = useRef(null);

  // useEffect(() => {
  //   const sectionClasses = ['.home .wrap', '.our-story .tours-section', '.dark-service-section', '.our-impact-section'];

  //   sectionClasses.forEach((sectionClass) => {
  //     const section = document.querySelector(sectionClass);

  //     if (section) {
  //       gsap.to(section, {
  //         scrollTrigger: {
  //           trigger: section,
  //           start: 'top center',
  //           end: 'bottom center',
  //           scrub: true,
  //           onEnter: () => {
  //             // Update body background color when entering the section
  //             document.body.style.backgroundColor = 'var(--primary-dark)';
  //             document.body.classList.add('journey-dark');
  //           },
  //           onLeave: () => {
  //             // Revert body background color when leaving the section
  //             document.body.style.backgroundColor = 'var( --light-color)';
  //             document.body.classList.remove('journey-dark');
  //           },
  //           onLeaveBack: () => {
  //             // Revert to the initial color when leaving the section
  //             document.body.style.backgroundColor = 'var( --light-color)';
  //             document.body.classList.remove('journey-dark');
  //           },
  //           onEnterBack: () => {
  //             // Revert to the initial color when leaving the section
  //             document.body.style.backgroundColor = 'var(--primary-dark)';
  //             document.body.classList.add('journey-dark');
  //           },
  //         },
  //       });
  //     }
  //   });

  //   // Set initial body background color to white
  //   document.body.style.backgroundColor = 'var(--light-color)';

  //   return () => {
  //     // Cleanup on component unmount
  //     gsap.killTweensOf(sectionClasses);
  //   };
  // }, []); // No dependencies, as this effect runs only once

  return (
    <body suppressHydrationWarning={true} ref={wrapRef}>
      {children}
    </body>
  );
};

export default BodyWrapper;

