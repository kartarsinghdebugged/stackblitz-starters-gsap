'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const MyComponent = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    // Define the timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        pin: true,
        pinSpacing: true,
        start: "left-=120px left",
        end: "+=2000",
        // scrub: 1
      }
    });

    // Add animations to the timeline
    timeline.addLabel('card1');
    timeline.to('.card-1', {
      yPercent: 0,
      opacity: 1
    });

    timeline.from('.card-2', {
      yPercent: 75,
      opacity: 0
    });
    timeline.addLabel("card2");

    timeline.to(".card-1", {
      scale: 0.95,
      yPercent: -0.5,
      opacity: 0.5
    }, "-=0.3");

    timeline.to('.card-2', {
      yPercent: 0,
      opacity: 1
    });

    timeline.from('.card-3', {
      yPercent: 75,
      opacity: 0
    });
    timeline.addLabel('card3');

    timeline.to(".card-2", {
      scale: 0.98,
      yPercent: -0.4,
      opacity: 0.6
    }, "-=0.3");

    timeline.to(".card-3", {
      yPercent: 0,
      opacity: 1
    });

    timeline.to('.card-3', {});

    // Ensure cleanup when the component unmounts
    return () => {
      timeline.kill(); // Kill the timeline to prevent memory leaks
    };
  }, []); // Empty dependency array ensures this useEffect runs once on mount

  return (
    <div className="cards" ref={cardsRef}>
      {/* Your card elements go here */}
      <div className="card-1">Card 1</div>
      <div className="card-2">Card 2</div>
      <div className="card-3">Card 3</div>
    </div>
  );
};

export default MyComponent;
