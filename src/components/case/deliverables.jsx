'use client'
import React, { useRef, useEffect } from "react";
import gsap from "gsap/all";
import { SplitText, ScrollTrigger } from "gsap/all"
import LineAnimation7 from './line-animation-temp1/line-7'
import LineAnimation16 from './line-animation-temp2/line6'
import LineAnimation38 from './line-animation-temp3/line8'
import LineAnimation49 from './line-animation-temp4/line9'

const Deliverables = ({ deliverableDesc, keyFeatures, tempId }) => {
    const titleRef2 = useRef(null);
    useEffect(() => {
      gsap.registerPlugin(SplitText, ScrollTrigger);
      ScrollTrigger.saveStyles(".roadmap-features-list"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)
  
      const title2 = titleRef2.current;
      const splitText = new SplitText(title2, { type: "lines", linesClass: "roadmap-features-list" });
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: title2,
          start: "top 60%",
          once: true,
        //   markers: true,
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


    const keyFeaturesArr = keyFeatures ? JSON.parse(keyFeatures) : []
    return (
        <div className="fj-relative deliverables fj-y-120">
            {tempId === 2 ? <div className="fj-container fj-text-right">
                <div className="fj-container2">

                <LineAnimation16 />
                </div></div>  : ''}
            <div className="fj-container animation-div">
                <div className="fj-container2">
                {
  tempId === 2 ? '' :
    (tempId === 3 ? <div className="line-38"> <LineAnimation38 /></div> :
      (tempId === 4 ? <LineAnimation49 /> : <div className="line-07"> <LineAnimation7 /> </div>)
    )
}

                </div>

            </div>
            <section className='banner fj-container '>
                <div className='fj-inner fj-container2'>
                    <div className="">


                        <h3 className="fj-h3 fj-w-64 mb-2">
                            The deliverables
                        </h3>
                        {/* <p className="fj-text-r fj-w-64">
                            After developing 3 concepts that all greatly provide a holistic and integrated approach to women&apos;s health, we settled on one: A 24/7 digital companion that provides women with a safe space to connect, share, consult and consume; a trusted one-stop shop for women&apos;s wellbeing, designed to accompany them throughout all stages of life.
                        </p> */}
                        <div className=""
                            dangerouslySetInnerHTML={{ __html: deliverableDesc }}
                        >
                        </div>
                    </div>

                    <div className=" fj-inline fj-mt-50 features-box fj-start gap-100 fj-align-start fj-pt-120" >
                        <h4 className="fj-h4">
                            Key <br />Features
                        </h4>
                        <ul className="feature-list fj-w-64" ref={titleRef2}>
                            {keyFeaturesArr && keyFeaturesArr.length > 0 && keyFeaturesArr.map((item, index) => (
                                <li className="" key={index}>
                                    <span className="fj-h5 gt-klim">{index + 1}</span>
                                    <span className="fj-text-r ">{item}</span>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Deliverables;