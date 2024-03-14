'use client'
import React, { useRef, useEffect } from "react";
import gsap from "gsap/all";
import { SplitText, ScrollTrigger } from "gsap/all"
import Image from "next/image";
import callImg from '../../assets/images/calling-img.png'
const TopStorySection = () => {
  
  const introTitleRef7 = useRef(null);
  useEffect(() => {
    const introTitle2Height = introTitleRef7.current.clientHeight;
    const viewPostHeight = (window.innerHeight - introTitle2Height) / 2;
    document.querySelector('.fj-spacer01').style.height = `${viewPostHeight}px`;
    gsap.registerPlugin(SplitText, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-title-7"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle7 = introTitleRef7.current;
    const splitText = new SplitText(introTitle7, { type: "lines", linesClass: "intro-title-7" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle7,
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
  const introTitleRef8 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-title-8"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle8 = introTitleRef8.current;
    const splitText = new SplitText(introTitle8, { type: "lines", linesClass: "intro-title-8" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle8,
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
  return (
    <>
    <div className="fj-spacer01"></div>
      <section className='banner  fj-container service-top-section section1'>
        <div className='marquee-gsap fj-container2'>
          <div>
          <h1 className='fj-h0 fj-dark lg:fj-h0-lg intro-title-7 '  ref={introTitleRef7}>Curious by <br />  nature</h1>
          </div>
         <div ref={introTitleRef8}>
         <p className="fj-text-lg  intro-title-8 fj-mt-50">
            Our journey is still in the making, but this is what</p><br/>
            <p className="fj-text-lg  intro-title-8">
             has  brought us here so far...
          </p>
         </div>
         
        </div>
        <div className=' fj-text-right'>
          <video
            width="auto"
            height="408"
            className="video ourstory-video"
            playsInline={true}
            webkit-playsinline="true"
            preload="auto"
            muted={true}
            loop= {true}
            autoPlay={true}
          >
            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/Our_Story_ani.mov" type='video/mp4; codecs="hvc1"' />
            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/Our_Story_ani.webm" type="video/webm" />
          </video>
        </div>

        <div className="fj-y-120">
          <Image src={callImg} alt="calling-image" className="call-img" />
        </div>
      </section>
    </>
  );
};

export default TopStorySection;
