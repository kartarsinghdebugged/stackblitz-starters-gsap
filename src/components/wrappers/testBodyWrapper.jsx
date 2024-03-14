'use client'
import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'

const TestBodyWrapper = ({ children }) => {

  const wrapRef = useRef(null);
  
  useLayoutEffect(() => {
    const sectionClasses = ['.home .journey-section', '.our-story .tours-section', '.dark-service-section',  '.our-impact-section'];
    sectionClasses.forEach((sectionClass) => {
      const section = document.querySelector(sectionClass);
      if (section) {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top center', // Adjust the start position as needed
            end: 'bottom center', // Adjust the end position as needed
            scrub: true,
            toggleClass: {
              targets: wrapRef.current,
              className: 'journey-dark',
            },
          },
        });
      }
    });
  }, [wrapRef]);


  return (
    <>
      <div ref={wrapRef}> 
        {children}
      </div>
    </>
  )
}

export default TestBodyWrapper