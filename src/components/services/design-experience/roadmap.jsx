'use client'
import React, { useRef, useEffect } from "react";
import gsap from "gsap/all";
import { SplitText, ScrollTrigger } from "gsap/all"
const RoadMap = ({ data }) => {
  const { title, videoDetail, feature } = data;
  const titleRef1 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    ScrollTrigger.saveStyles(".title-1"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const title1 = titleRef1.current;
    const splitText = new SplitText(title1, { type: "lines", linesClass: "title-1" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: title1,
        start: "top 50%",
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

  const titleRef2 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    ScrollTrigger.saveStyles(".roadmap-features-list"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const title2 = titleRef2.current;
    const splitText = new SplitText(title2, { type: "lines", linesClass: "roadmap-features-list" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: title2,
        start: "top 50%",
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
        // markers: true,
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
      <div className=' fj-container selected-intineraries roadmap-intineraries'>
        <div className="  gap-118 fj-align-start fj-y-120">
          <div className="fj-container2 fj-inline">
            <div className='main-pin-section'>
              <h3 className='fj-h3 title-1' ref={titleRef1} >
                <span>{title.part1}</span> <br />
                <span>
                  {title.part2}
                </span>
              </h3>
              <div className='home-ani-2 home-ani-1 home-ani-4'>
                <video width="470"
                  height="267"
                  className="video"
                  playsInline={true}
                  webkit-playsinline="true"
                  preload="auto"
                  muted={true}
                  loop={false}
                  ref={videoRef}>
                  <source src={videoDetail.src1} type='video/mp4; codecs="hvc1"' />
                  <source src={videoDetail.src2} type="video/webm" />

                </video>
              </div>

            </div>
            <div>
              <ul>
                <div ref={titleRef2} className="roadmap-features-list">
                  {feature.map((feature, index) => (

                    <li key={index}>
                      <h3 className="fj-h4">{feature.title}</h3>
                      <p className="fj-text-r fj-mt-10">{feature.description}</p>
                    </li>

                  ))}
                </div>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default RoadMap;