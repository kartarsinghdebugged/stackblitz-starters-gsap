'use client'
import React, { useEffect, useRef } from "react";
import LineAnimation9 from './line-animation-temp1/line-9'
import LineAnimation8 from './line-animation-temp1/line-8'
import TabLineAnimation from '../case/case-tab-footer/footer-animation'
import MobLineAnimation from '../case/case-mob-footer/footer-animation'
import Link from "next/link";
import gsap from 'gsap';
import PrevoiusProjects from '../case/previous-projects'
const Impact = ({ ourImpactDesc, nextCaseStudy, prevCaseStudy }) => {
  return (
    <>

      <section className='  fj-white our-impact  fj-relative impact-section  fj-y-120 our-impact-section' >
     
        <div className="fj-inner fj-container fj-relative">
          <MobLineAnimation  className="mob-animation"/>
          <TabLineAnimation className="tab-animation"/>
        <LineAnimation8  className="desktop-animation"/>
          <div className="fj-container2 ">
      
          <div className=" fj-inline impact-box">
    
        {/* <LineAnimation9 /> */}
            <h3 className="fj-h3 line-bg">Our Impact</h3>
            {/* <p className="fj-text-lg fj-w-64">
                            We created a roadmap for owning an ecosystem…a scalable business opportunity rooted in invaluable consumer insights of both practical and emotional motivators of what just happens to be the fastest growing demographic in Japan. <br />
                            While we didn&apos;t see the project through, the impact on the organization has been significant as it deepened their understanding and commitment to their role in furthering women&apos;s health in a holistic manner.
                        </p> */}
            <div
              className="fj-text-lg "
              dangerouslySetInnerHTML={{ __html: ourImpactDesc }}
            >
            </div>

          </div>
          </div>
       
          <div className="fj-right fj-mt-50 impact-btn">
            <span className='fj-btn-text ' type='button'>
              <Link href='#' className="  fj-inline fj-link1 link fj-anchor-circle">
                <span >See the protopye in action</span>
                <span className="fj-anchor-style">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0514 21.9498L21.9509 12.0503M21.9509 12.0503L12.0513 12.0503M21.9509 12.0503L21.9508 21.9498" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </span>
          </div>
        </div>
        <PrevoiusProjects 
          nextCaseStudy={nextCaseStudy}
          prevCaseStudy={prevCaseStudy}
        />
      </section>
    </>
  );
};

export default Impact;