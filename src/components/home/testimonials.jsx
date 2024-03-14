'use client'
import React, { useEffect, useRef } from "react";
import TestimonialsSlider from "./testimonial-slider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
gsap.config({ trialWarn: false });
const Testimonials = () => {
  gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
  const introTitleRef5 = useRef(null);

  useEffect(() => {

    ScrollTrigger.saveStyles(".intro-title-5");

    const introTitle = introTitleRef5.current;
    const splitText = new SplitText(introTitle, { type: "lines", linesClass: "intro-title-5" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials ",
        start: "top 50%", // Adjust the start position based on your needs
        end: "bottom 10%", // Adjust the end position based on your needs
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

    return () => {
      tl.kill();
      splitText.revert();
    };
  }, []);
  //video animation//
  const videoRef = useRef(null);
  const playedOnce = useRef(false);

  useEffect(() => {
    const coolVideo = videoRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: coolVideo,
        start: "top 60%",
        end: "top -100%",
        scrub: true,
        // markers: true,
        onUpdate: ({ progress, direction }) => {
          if (progress > 0 && progress < 1) {
            if (!playedOnce.current) {
              coolVideo.play();
              playedOnce.current = true;
            }
          } else {
            // Pause only if scrolling forwards
            if (direction > 0 && playedOnce.current) {
              coolVideo.pause();
            }
          }
        },
      },
    });

    function isTouchDevice() {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }

    if (isTouchDevice()) {
      coolVideo.play();
      coolVideo.pause();
    }

    return () => {
      coolVideo.pause();
    };
  }, []);




  return (
    <>
    <div className="testimonials">
    <section className=' fj-container '>
        <div className=' fj-white  fj-container2 '>
          <div className="fj-y-120 selected-intineraries">
          <div className=''>
            <div ref={introTitleRef5} className="desk-view">
            <h3 className='fj-h3 fj-dark intro-title-5'>
              What people 
            </h3>
            <br/>
            <h3 className='fj-h3 fj-dark intro-title-5'>
             say
            </h3>
            </div>
            <div ref={introTitleRef5} className="mob-view">
            <h3 className='fj-h3 fj-dark intro-title-5'>
              What people  say
            </h3>
            </div>
          
            <div className="">
              <video width="470"
                height="100%"
                className="video"
                playsInline={true}
                webkit-playsinline="true"
                preload="auto"
                muted={true}
                loop={false}
                
                ref={videoRef}>
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/homevideo2.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/homevideo2.webm" type="video/webm" />

              </video>
            </div>

          </div>
          <div className='fj-w-60' >
            <TestimonialsSlider />
          </div>
          </div>
         
        </div>
      </section>
    </div>
    

    </>
  );
};

export default Testimonials;