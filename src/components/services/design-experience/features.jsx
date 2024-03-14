'use client'
import React, {useRef, useEffect} from "react";
import gsap from "gsap/all";
import {SplitText, ScrollTrigger} from "gsap/all"
const DesignFeatures = ({data }) => {
  const { title, features } = data;
    const introSectionRef1 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    ScrollTrigger.saveStyles(".section1"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introSection1 = introSectionRef1.current;
    const splitText = new SplitText(introSection1, { type: "lines", linesClass: "section1" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introSection1,
        start: "top 60%",
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
  const introSectionRef2 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    ScrollTrigger.saveStyles(".section2"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introSection2 = introSectionRef2.current;
    const splitText = new SplitText(introSection2, { type: "lines", linesClass: "section2" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introSection2,
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
    // const features = [
    //     'UX/UI',
    //     'End-to-End design and product',
    //     'Customer research & insights',
    //     'User testing',
    //     'Scalable design systems',
    //     'Art direction',
    //     'Visual identity',
    //     'Web design',
    // ];
    return (
        <div className="fj-y-120">
            <section className='banner fj-container roadmap-container'>
                <div className='fj-container2'>
                    <div className=" fj-inline features-box gap-100 " >
                        <h3 className="fj-h3 section1" ref={introSectionRef1}>
                            Areas of <br />expertise
                        </h3>
                        <ul className="feature-list fj-w-64 section2" ref={introSectionRef2}>
                            {features.map((features, index) => (
                                <li className="" key={index}>
                                    <span className="fj-h5 gt-klim">{(index + 1).toString().padStart(2, '0')}</span>
                                    <span className="fj-text-r">{features}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default DesignFeatures;