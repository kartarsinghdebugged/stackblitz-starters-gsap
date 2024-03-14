'use client'
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText, ScrollSmoother, ScrollTrigger } from "gsap/all"
import Image from "next/image";
import noImg from '../../assets/images/no-img.jpg'
import LineAnimation2 from './line-animation-temp1/line-2'
import LineAnimation12 from './line-animation-temp2/line2'
import LineAnimation32 from './line-animation-temp3/line2'
import LineAnimation42 from './line-animation-temp4/line2'
const Challenge = ({ desc, challengeImg, tempId }) => {
  const challengeimgData = JSON.parse(challengeImg)
  const introSubTitleRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-subtitle"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introSubTitle = introSubTitleRef.current;
    const splitText = new SplitText(introSubTitle, { type: "lines", linesClass: "intro-subtitle" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.case-banner-section-2',
        start: "top 69%",
        end: "top 100%", // Adjust the end position based on your needs
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

    // Cleanup function for ScrollTrigger
    return () => {
      tl.kill();
      splitText.revert();
    };
  }, []);
  const introMainTitleRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-maintitle"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introMainTitle = introMainTitleRef.current;
    const splitText = new SplitText(introMainTitle, { type: "lines", linesClass: "intro-maintitle" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.case-banner-section-2',
        start: "top 70%",
        end: "top 100%", // Adjust the end position based on your needs
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

    // Cleanup function for ScrollTrigger
    return () => {
      tl.kill();
      splitText.revert();
    };
  }, []);
  return (
    <div className="case-banner-section-2  fj-relative">

      <section className='banner fj-container pt-130 marquee-gsap'>
        {

          tempId === 2 ? (
            <div className="line-12">

              <LineAnimation12 />
            </div>
          ) : (
            tempId === 3 ? (
              <LineAnimation32 />
            ) : (tempId === 4 ? <LineAnimation42 /> : <div className="line-02 fj-container ">
              <div className="fj-container2 fj-relative">
                <LineAnimation2 className='line-2' />
              </div>
            </div>
            )
          )
        }

        <div className='fj-inner fj-container2'>
          <div className="fj-pt-120">
            {/* <h3 className="fj-h3 fj-w-64 mb-2 intro-maintitle " ref={introMainTitleRef}> */}
            <h3 className="fj-h3 fj-w-64 mb-2 intro-maintitle   challenge-title " ref={introMainTitleRef}>
              The challenge
            </h3>
            <div className="intro-subtitle fj-w-64" ref={introSubTitleRef}
              dangerouslySetInnerHTML={{ __html: desc }}
            >

            </div>
            {/* <p className="fj-textr-md fj-w-64">Sompo&apos;s initial research unearthed the mind-boggling fact that 75% of Japanese women feel they don&apos;t get enough practical information and guidance from their GYN / OBYS.</p>
                    <br />
                    <p className="fj-text-r fj-w-64">
                        This coincided with the fact that most FemTech digital products have a siloed approach that is primarily focused on either Reproductive Health and / or Pregnancy & Nursing. There is a glaring market gap for a holistic approach to female wellbeing</p> */}
            <figure className="fj-mt-50 challenge-img">
              {challengeimgData.link ? <Image src={challengeimgData.link} alt="challenge" width={1480} height={1218} className="fj-img-fluid" placeholder="blur" blurDataURL="Loading:..." /> : <Image src={noImg} alt="challenge" className="fj-img-fluid" placeholder="blur" />}
              <figcaption className="fj-text-sm-md fj-uppercase fj-mt-10">{challengeimgData.name}</figcaption>
            </figure>
          </div>


        </div>

      </section>
    </div>
  );
};

export default Challenge;