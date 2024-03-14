'use client'
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText, ScrollSmoother, ScrollTrigger } from "gsap/all"
import Image from "next/image";
import ServiceCard from '../../../components/services/design-experience/service-card'
gsap.registerPlugin(ScrollTrigger);
const OtherService = () => {



  const TitleRef1 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".title1"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const Title1 = TitleRef1.current;
    const splitText = new SplitText(Title1, { type: "lines", linesClass: "title1" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: Title1,
        start: "top 50%",
        end: "top 100%", // Adjust the end position based on your needs
        once: true,
        markers: false,
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
        //  markers: true,
        onUpdate: ({ progress, direction }) => {
          if (progress > 0 && progress < 1) {
            if (!playedOnce.current) {
              coolVideo.play();
              playedOnce.current = true;
            }
          } else {
            // Pause only if scrolling forwards
            if (direction > 0) {
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
      <section className=' dark-section design-other-service dark-service-section fj-y-120'>
        <div className="fj-container">
          <div className="">
            <div className="fj-container2 heading-box" ref={TitleRef1} >

              <h2 className="fj-h2 fj-dark  fj-text-center tile1 fj-mb-0 ">
                Not knowing where we&apos;re going
              </h2>
              <br />
              <h2 className="fj-h2 fj-dark  fj-text-center tile1 ">does not mean we don&apos;t know what we&apos;re doing.</h2>

            </div>
            <div className="fj-inline fj-align-end fj-container2">
            <div className="fj-w-full">
                <p className="test fj-text-r">
                There are different types of journeys in life. <br/>
                Some can be an adventure of a lifetime, some can be short and sweet. Either way, <br/>
                short or long, camping or luxury, a great journey should change you.
                </p>
                <p className=" fj-text-r fj-mt-30">
                Fusion Journey offers a few digital design journeys as well, depending on where you are starting and where you <br/> are starting and where you are heading.
                </p>

            </div>
            <div className="fj-text-right art-work-animation2 ">
              <video
                width="400"
                height="448"
                className="video"
                playsInline={true}
                webkit-playsinline="true"
                preload="auto"
                muted={true}
                loop={false}
                autoPlay={true}
                ref={videoRef}
              >
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/design-exp2.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/design-exp2.webm" type="video/webm" />
              </video>
            </div>
          
            </div>
        
          </div>


          <div className=" fj-y-120 other-services-card">
            <div className='fj-inline fj-white fj-align-start fj-container2'>
              <h3 className='fj-h3 title3'>
                Other <br /> Services
              </h3>
              <div className='fj-inline fj-gap-15'>
                <ServiceCard />
              </div>
            </div>
          </div>

        </div>

      </section>

    </>
  );
};

export default OtherService;