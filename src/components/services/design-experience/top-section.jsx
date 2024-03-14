'use client'
import React, { useRef, useEffect } from "react";
import gsap from "gsap/all";
import { SplitText, ScrollTrigger } from "gsap/all"


const TopDesignSection = ({ data }) => {

  const { title, desc, videoDetail } = data;
  const introTitleRef7 = useRef(null);

//   useEffect(() => {
//     const introTitle2Height = introTitleRef7.current.clientHeight;
// const viewPostHeight = (window.innerHeight - introTitle2Height) / 2;
// document.querySelector('.fj-spacer01').style.height = `${viewPostHeight}px`;
//     gsap.registerPlugin(SplitText, ScrollTrigger);
//     ScrollTrigger.saveStyles(".intro-title-7"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

//     const introTitle7 = introTitleRef7.current;
//     const splitText = new SplitText(introTitle7, { type: "lines", linesClass: "intro-title-7" });

//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: introTitle7,
//         start: "top 50%",
//         once: true,
//         markers: false,
//       },
//     });

//     tl.from(splitText.lines, {
//       opacity: 0,
//       y: 200,
//       x: 0,
//       stagger: .1,
//       duration: .4,
//       ease: "power3.out",
//     });

//     // Cleanup function for ScrollTrigger
//     return () => {
//       tl.kill();
//       splitText.revert();
//     };
//   }, []);

  return (
    <>
      <div className="fj-spacer01"></div>
      <section className='banner fj-container  service-top-section'>
        <div className='fj-container2' ref={introTitleRef7} >
          <div className="">

          <h1 className='fj-h1 fj-dark lg:fj-h0-lg intro-title-7'>
            <span className="block">{title.part1}</span>  <span>{title.part2}</span>
          </h1>
          </div>
          <div className="service-top-text">
          <p className="fj-text-lg fj-mt-50  intro-title-8 " >
            {desc.part1}</p>
            
            <p className="fj-text-lg fj-mt-30 intro-title-8 strong-txt" >{desc.part2}
          </p>
          </div>
       
        </div>
        <div className='home-ani-1 fj-text-right' >
          <video
            width="900"
            height="550"
            className="video top-section-video"
            playsInline={true}
            webkit-playsinline="true"
            preload="auto"
            muted={true}
            loop={true}
            autoPlay={true}
          >
            <source src={videoDetail.src1} type='video/mp4; codecs="hvc1"' />
            <source src={videoDetail.src2}type="video/webm" />
          </video>
        </div>
      </section>
    </>
  );
};

export default TopDesignSection;
