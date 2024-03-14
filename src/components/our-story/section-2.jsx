'use client'
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText, ScrollSmoother, ScrollTrigger } from "gsap/all"
import StorySlider from '../../components/our-story/story-slider'
const ThirdStorySection = () => {
  const introTitleRef7 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-title-7"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle7 = introTitleRef7.current;
    const splitText = new SplitText(introTitle7, { type: "lines", linesClass: "intro-title-7" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle7,
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

  const introTitleRef8 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-title-8"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle8 = introTitleRef8.current;
    const splitText = new SplitText(introTitle8, { type: "lines", linesClass: "intro-title-8" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle8,
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
  const introTitleRef9 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-title-9"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle9 = introTitleRef9.current;
    const splitText = new SplitText(introTitle9, { type: "lines", linesClass: "intro-title-9" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle9,
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
  const introTextRef8 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-text-8"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introText8 = introTextRef8.current;
    const splitText = new SplitText(introText8, { type: "lines", linesClass: "intro-text-8" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introText8,
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
  const introTextRef9 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-text-9"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introText9 = introTextRef9.current;
    const splitText = new SplitText(introText9, { type: "lines", linesClass: "intro-text-9" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introText9,
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
  // const wrapRef = useRef(null);

  // useEffect(() => {
  //   const wrapElement = wrapRef.current;
  //   wrapElement.style.transition = '.6s ease';
  //   gsap.to(wrapElement, {
  //     backgroundColor: gsap.getProperty('html', '--light-color'),
  //     scrollTrigger: {
  //       trigger: '.tours-section',
  //       scrub: true,
  //       end: 'bottom bottom',
  //       // markers: true,
  //       onUpdate: ({ progress, direction }) => {
  //         // Change the background color based on scroll position
  //         const bgColor = progress > 0.5 ? gsap.getProperty('html', '--primary-dark') : gsap.getProperty('html', '--light-color');
  //         const progressBar = progress > 0.5 && progress < 0.99;
  //         // Check if scroll is near the end
  //         const isNearEnd = direction === 1 && progress > 0.99;
  
  //         // If near the end, transition to white
  //         if (isNearEnd) {
  //           wrapElement.style.transition = 'background-color .6s ease';
  //           wrapElement.style.backgroundColor = gsap.getProperty('html', '--light-color');
  //           wrapElement.classList.remove('journey-dark');
  //         } else {
  //           wrapElement.style.transition = '.6s ease';
  //           wrapElement.style.backgroundColor = bgColor;
  //           wrapElement.classList.remove('journey-dark');
  //         }
  
         
  //         if (progressBar) {
  //           wrapElement.classList.add('journey-dark');
  //         } else {
  //           wrapElement.classList.remove('journey-dark');
  //         }
  //       },
  //     },
  //   });
  // }, []);

  //video animation 1//
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

  //video animation 2//
  const videoRef1 = useRef(null);
  const playedOnce1 = useRef(false);

  useEffect(() => {
    const coolVideo = videoRef1.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: coolVideo,
        start: "top 60%",
        end: "top -100%",
        scrub: true,
        // markers: true,
        onUpdate: ({ progress, direction }) => {
          if (progress > 0 && progress < 1) {
            if (!playedOnce1.current) {
              coolVideo.play();
              playedOnce1.current = true;
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
      <section className='dark-section tours-section' >
        <div className=''>
          <div ref={introTitleRef7} className="dot-text   fj-container">
            <h2 className="fj-h0 fj-dark fj-text-center intro-title-7 fj-y-120">
              Organised tours are nice.
            </h2>
          </div>
          <div className=" fj-clear fj-container">
            <div className='fj-inline adventure-txt-box fj-item-start fj-container2'>
              <div ref={introTitleRef8}>
                <h3 className='fj-h3 intro-title-8 dot-text   '>
                  But adventures last <br /> a lifetime.
                </h3>
              </div>

              <div ref={introTextRef8} className="adventure-text dot-text">
                <p className='fj-text-r intro-text-8'>More importantly, they keep you curious; alert and alive. They give you a new lens on the world; a priceless perspective.</p>
                <br />
                <br />
                <p className='fj-text-r  intro-text-8'> We left our senior and high paying jobs 5 years ago. We felt there was more to life.We took some time off to explore.</p>
                <p className='fj-text-r  intro-text-8'> Literally. Like explore the world.</p>
              </div>

            </div>

            <div className='fj-text-center animation-1 fj-mt-50'>
              <video width="100%"
                height="412"
                playsInline={true}
                webkit-playsinline="true"
                preload="auto"
                loop={false}
                muted={true}
                ref={videoRef}>
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/join-ani.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/join-ani.webm" type="video/webm" />
              </video>
            </div>
          </div>
          <div className="fj-slider-container fj-y-120 landing-wrapper fj-container ">
            <div className="fj-container2">
            <StorySlider />

            </div>
          </div>
          <div className="fj-container asked-question ">
            <div className="fj-y-120">
            <div ref={introTitleRef9} className="">
            <h2 className="fj-h2 fj-dark  fj-text-center intro-title-9  ">
              We asked ourselves questions <br />we hadn&apos;t ever asked before.
            </h2>
            </div>

            <div className="fj-inline fj-align-end bottom-text fj-container2  fj-mt-50">
              <div ref={introTextRef9} className=" fj-mt-50">
              <p className=" fj-text-lg intro-text-9">
                What kind of impact do we want our design to have?
              </p>
           
                <p className="fj-text-lg intro-text-9">what it means to be creative, how to leverage technology for
                good?  </p> <p className="fj-text-lg intro-text-9"> how our new experiences and exposure to different cultures can teach us to create better user experiences?
              </p>
              </div>
             
              <div className="fj-text-right">
                <video width="526"
                  height="305"
                  className="video ques-ani-story"
                  playsInline={true}
                  webkit-playsinline="true"
                  preload="auto"
                  loop={false}
                  muted={true}

                  ref={videoRef1}>
                  <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/asked-ques-ani.mov" type='video/mp4; codecs="hvc1"' />
                  <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/asked-ques-ani.webm" type="video/webm" />
                </video>
              </div>
            </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdStorySection;
