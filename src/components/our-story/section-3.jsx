'use client'
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { SplitText, ScrollSmoother, ScrollTrigger } from "gsap/all"
import Link from "next/link";
import ExploreAniBar from '../../shared/layout/explore-ani'
import ContactUsLeads from '../../components/contactUsleads/contactUsLeads'
import MarqueeContainer from "../home/marqueeContainer";
gsap.registerPlugin(ScrollTrigger);
const SecondStorySection = () => {
  const introTextRef10 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-text-10");
    const introText10 = introTextRef10.current;
    const splitText = new SplitText(introText10, { type: "lines", linesClass: "intro-text-10" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introText10,
        start: "top 50%",
        end: "top 100%",
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
    return () => {
      tl.kill();
      splitText.revert();
    };
  }, []);
  const introTextRef11 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-text-11"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introText11 = introTextRef11.current;
    const splitText = new SplitText(introText11, { type: "lines", linesClass: "intro-text-11" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introText11,
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
  const introTitleRef10 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-title-10");

    const introTitle10 = introTitleRef10.current;
    const splitText = new SplitText(introTitle10, { type: "lines", linesClass: "intro-title-10" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle10,
        start: "top 45%",
        end: "top 100%",
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
    return () => {
      tl.kill();
      splitText.revert();
    };
  }, []);
  const introTitleRef11 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-title-11"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle11 = introTitleRef11.current;
    const splitText = new SplitText(introTitle11, { type: "lines", linesClass: "intro-title-11" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle11,
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
  useEffect(() => {
    gsap.from('.balance-text .marquee-gsap', {
      xPercent: 12,
      duration: 2,
    });
    gsap.to('.balance-text .marquee-gsap', {
      xPercent: -170,
      scrollTrigger: {
        trigger: '.balance-text .marquee-container',
        start: 'top 70%',
        end: 'top 1%',
        scrub: 6,
        duration: 2,
        // markers: true
      },
    });
  }, []);
  const [joinUsModal, setJoinUsModal] = useState(false);
  const handleJoinUsModal = () => setJoinUsModal(!joinUsModal)
  const [contactUsModal, setcontactUsModal] = useState(false);
  const handleContactUsModal = () => setcontactUsModal(!contactUsModal)
  return (
    <>
      <section className='balance-text fj-container '>
        <section className='journey-section'>
          <div className="marquee-container fj-container desktop-view">
            <h1 className="fj-h0 fj-dark fj-dark marquee-gsap fj-y-120">
              The balance between our passion for design and our desire to simply live.
            </h1>
          </div>
          <div className="marquee-container  tab-mob-view">
            <div className="fj-container">
            <h1 className="fj-h0 fj-dark fj-dark fj-y-120">
              The balance between our passion for design and our desire to simply live.
            </h1>

            </div>
          </div>
          {/* <MarqueeContainer 
            label='The balance between our passion for design and our desire to simply live.'
          /> */}

          <div className=' fj-white fj-y-120 '>
            <div className='fj-inline  fj-container2 '>
              <div className='left-text-column dot-text'  ref={introTitleRef10}>
                <h3 className='fj-h3 fj-dark intro-title-10 '>
                  Fusion Journey <br /> was born.
                </h3>
                <div className='fj-btn-text journey-anchor-btn-outter' onClick={handleContactUsModal} >
                  <span className="fj-dark fj-inline fj-link1 link  fj-anchor-circle" >
                    <span >Get in touch</span>
                    <span className="fj-anchor-style dark-anchor">
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0514 21.9498L21.9509 12.0503M21.9509 12.0503L12.0513 12.0503M21.9509 12.0503L21.9508 21.9498" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>

                </div>
              </div>
              <div ref={introTextRef10} className="dot-text">
                <p className='fj-text-r fj-dark intro-text-10'>
                  Along the way, we discovered an amazing tribe of creatives, designers, innovators and strategists who were asking the same questions.
                </p>

                <br />
                <br />
                <p className='fj-text-r fj-dark intro-text-10'>
                  A highly curious digital design agency that doesn&apos;t take shortcuts.</p>
                <br />
                <br />
                <p className='fj-text-r fj-dark intro-text-10'>
                  A group of women* who believe in the positive power of design; passionate beyond reason about user experiences.</p>
                <br />
                <br />
                <p className='fj-text-r fj-dark intro-text-10'>
                  Oh..and yeah… we might be anywhere in the world right now. But don&apos;t worry, we&apos;re here for you and ready to embark on a great journey.</p>
              </div>

            </div>

          </div>

          <div className=' fj-white fj-container-inner '>
            <div className=' home-of-explore fj-align-start fj-container2 '>
              <div className="fj-y-120 fj-inline">
                <div className='left-text-column dot-text ' ref={introTitleRef11}>
                  <h3 className='fj-h3 fj-dark intro-title-10 ' >
                    Home of the  <br />explorers
                  </h3>
                  <button className='fj-btn-text journey-anchor-btn-outter' type='button'>
                    <div onClick={handleJoinUsModal} className="fj-dark fj-inline fj-link1 link  fj-anchor-circle">
                      <span >Join our team</span>
                      <span className="fj-anchor-style dark-anchor">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.0514 21.9498L21.9509 12.0503M21.9509 12.0503L12.0513 12.0503M21.9509 12.0503L21.9508 21.9498" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>

                  </button>
                </div>
                <div ref={introTextRef11} className="dot-text">
                  <p className='fj-text-r fj-dark intro-text-11'>Fusion Journey is home to a wide range of exceptionally curious UX/UI designers who not only have  <br /> a passion for user experiences,  but also endless   curiosity for different cultures and the beautifully <br /> complex human condition.</p>
                </div>
              </div>


            </div>

            <div className='fj-text-center join-ani-img '>
              {/* <HomeExplorersAnimation /> */}
              <ExploreAniBar/>
              
            </div>
          </div>
        </section>
      </section>
      <ContactUsLeads show2={joinUsModal} handleClose2={handleJoinUsModal} />
      <ContactUsLeads show={contactUsModal} handleClose={handleContactUsModal} />
    </>
  );
};

export default SecondStorySection;
