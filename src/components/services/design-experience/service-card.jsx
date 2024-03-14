"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const ServiceCard = () => {
  const pathname = usePathname();

  return (
    <>
      {!pathname.includes('/design-experience') && <div className=" design-services">
        <div className="fj-relative other-service-realtive fj-anchor-circle">
          <div className='card-arrow'>
            <Link href='/services/design-experience' target="_blank" className="fj-anchor-circle fj-anchor-circle">
              <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="white" strokeWidth="1.5" />
                  <path d="M14.6436 21.4425L21.2433 14.8428M21.2433 14.8428L14.6436 14.8428M21.2433 14.8428L21.2432 21.4424" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </span>
            </Link>
          </div>
          <div className='service-card other-services'>

            <Link href="/services/design-experience" className="">
              <video
                width="263"
                height="100%"
                className="video"
                playsInline={true}
                webkit-playsinline="true"
                preload="auto"
                muted={true}
                loop={true}
                autoPlay={true}
              >
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/design-exp-ani.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/design-exp-ani.webm" type="video/webm" />
              </video>
              <h4 className='fj-textr-md fj-dark'>Design  &amp; <br />Experience  </h4>
            </Link>

          </div>
        </div>

      </div>
      }

      {!pathname.includes('/concept-prototyping') && <div className=" design-services">
      <div className="fj-relative other-service-realtive fj-anchor-circle">
      <div className='card-arrow'>
            <Link href='/services/concept-prototyping' target="_blank" className="fj-anchor-circle">
              <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="white" strokeWidth="1.5" />
                  <path d="M14.6436 21.4425L21.2433 14.8428M21.2433 14.8428L14.6436 14.8428M21.2433 14.8428L21.2432 21.4424" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </span>
            </Link>
          </div>
      <div className='service-card other-services'>
          <Link href="/services/concept-prototyping" className="">
            <video
              width="263"
              height="100%"
              className="video"
              playsInline={true}
              webkit-playsinline="true"
              preload="auto"
              muted={true}
              loop={true}
              autoPlay={true}
            >
              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/prototyping-ani.mov" type='video/mp4; codecs="hvc1"' />
              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/prototyping-ani.webm" type="video/webm" />
            </video>
            <h4 className='fj-textr-md fj-dark'><span className="desktop-text">Proof of concept</span> <span className="tab-text">POC</span> &amp; <br />Prototyping  </h4>
          </Link>
        </div>
      </div>

      </div>
      }

      {!pathname.includes('/growth-innovation') && <div className="fj-relative design-services">
      <div className="fj-relative other-service-realtive fj-anchor-circle">
      <div className='card-arrow'>
            <Link href='/services/growth-innovation' target="_blank" className="fj-anchor-circle fj-anchor-circle">
              <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="white" strokeWidth="1.5" />
                  <path d="M14.6436 21.4425L21.2433 14.8428M21.2433 14.8428L14.6436 14.8428M21.2433 14.8428L21.2432 21.4424" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </span>
            </Link>
          </div>
          <div className='service-card other-services'>
          <Link className="" href="/services/growth-innovation">
            <video
              width="263"
              height="100%"
              className="video"
              playsInline={true}
              webkit-playsinline="true"
              preload="auto"
              muted={true}
              loop={true}
              autoPlay={true}
            >
              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/growth-ani.mov" type='video/mp4; codecs="hvc1"' />
              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/growth-ani.webm" type="video/webm" />
            </video>
            <h4 className='fj-textr-md fj-dark'>Growth &amp; <br></br> Innovation </h4>
          </Link>
        </div>
      </div>
      </div>
      }

      {!pathname.includes('/training-teams') && <div className="fj-relative design-services">
      <div className="fj-relative other-service-realtive fj-anchor-circle">
      <div className='card-arrow'>
            <Link href='/services/training-teams' target="_blank" className="fj-anchor-circle fj-anchor-circle">
              <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="white" strokeWidth="1.5" />
                  <path d="M14.6436 21.4425L21.2433 14.8428M21.2433 14.8428L14.6436 14.8428M21.2433 14.8428L21.2432 21.4424" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </span>
            </Link>
          </div>
          <div className='service-card other-services'>
          <Link href="/services/training-teams" className="">
            <video
              width="263"
              height="100%"
              className="video"
              playsInline={true}
              webkit-playsinline="true"
              preload="auto"
              muted={true}
              loop={true}
              autoPlay={true}
            >
              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/traning-ani.mov" type='video/mp4; codecs="hvc1"' />
              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/traning-ani.webm" type="video/webm" />
            </video>
            <h4 className='fj-textr-md fj-dark'>Training &amp; <br /> Teams</h4>
          </Link>
        </div>
      </div>
      </div>
      }

      {!pathname.includes('/workshops') && <div className="fj-relative design-services">
      <div className="fj-relative other-service-realtive fj-anchor-circle">
      <div className='card-arrow'>
            <Link href='/services/workshops' target="_blank" className="fj-anchor-circle fj-anchor-circle">
              <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="white" strokeWidth="1.5" />
                  <path d="M14.6436 21.4425L21.2433 14.8428M21.2433 14.8428L14.6436 14.8428M21.2433 14.8428L21.2432 21.4424" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </span>
            </Link>
          </div>
          <div className='service-card other-services'>
          <Link href="/services/workshops" className="">
            <video
              width="263"
              height="100%"
              className="video"
              playsInline={true}
              webkit-playsinline="true"
              preload="auto"
              muted={true}
              loop={true}
              autoPlay={true}
            >
              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/workshop-ani.mov" type='video/mp4; codecs="hvc1"' />
              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/workshop-ani.webm" type="video/webm" />
            </video>
            <h4 className='fj-textr-md fj-dark'>Workshops </h4>
          </Link>
        </div>
      </div>
        
       
      </div>
      }
    </>
  );
};

export default ServiceCard;