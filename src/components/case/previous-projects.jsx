import React from "react";
import Link from "next/link";
const PrevoiusProjects = ({ nextCaseStudy, prevCaseStudy }) => {

    return (
        <>
            <section className=' dark-section  last-section fj-y-284 '>
                <div className="fj-inner fj-container ">
                    <div className="  projects-box  fjslide ">
                        <div className="fj-inline  gap-100">
                            <div className="prev-proj-div">
                                <Link
                                    href={`/case-study/${prevCaseStudy?.title}_${prevCaseStudy?.id}`}
                                    className={`prev-proj-btn${prevCaseStudy ? ' active' : ' inactive '}`}
                                >
                                    <span className="arrow-btn">
                                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_24_268)">
                                                <rect y="0.816406" width="36" height="36" rx="18" fill="white" />
                                                <rect x="-7.5" y="-6.68359" width="51" height="51" rx="25.5" fill="#FAFAFA" />
                                                <rect x="-7.5" y="-6.68359" width="51" height="51" rx="25.5" stroke="#FAFAFA" />
                                                <path d="M25 19.2067H11M11 19.2067L18 12.2065M11 19.2067L18 26.2065" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <rect x="0.5" y="1.31641" width="35" height="35" rx="17.5" stroke="#FAFAFA" />
                                            <defs>
                                                <clipPath id="clip0_24_268">
                                                    <rect y="0.816406" width="36" height="36" rx="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>


                                    </span>
                                    <h3 className="fj-h3">Previous <br /> Project</h3>
                                </Link>
                                {/* {prevCaseStudy?.title && prevCaseStudy?.id && 
                                <Link href={`/case-study/${prevCaseStudy?.title}_${prevCaseStudy?.id}`} className="prev-proj-btn">
                                    <h3 className="fj-h3 ">Previous Project</h3>
                                </Link>
                                } */}
                            </div>
                            <div className="img-box">
                                <video
                                    width="100%"
                                    height="300"
                                    className="video"
                                    playsInline={true}
                                    webkit-playsinline="true"
                                    preload="auto"
                                    muted={true}
                                    loop={true}
                                    autoPlay={true}
                                >
                                    <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/asked-ques-ani.mov" type='video/mp4; codecs="hvc1"' />
                                    <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/asked-ques-ani.webm" type="video/webm" />
                                </video>
                            </div>
                            <div className="fj-right   fjslide next-proj-div">
                                <button className='fj-btn-text fj-text-left ' type='button'>
                                    <Link href={`/case-study/${nextCaseStudy?.title}_${nextCaseStudy?.id}`} className={`fj-link1 f fj-block  next-proj-btn${nextCaseStudy ? ' active' : ' inactive '}`} >
                                        <span className="arrow-btn">
                                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_24_273)">
                                                    <rect y="0.816406" width="36" height="36" rx="18" fill="white" />
                                                    <rect x="-7.5" y="-6.68359" width="51" height="51" rx="25.5" fill="#FAFAFA" />
                                                    <rect x="-7.5" y="-6.68359" width="51" height="51" rx="25.5" stroke="#FAFAFA" />
                                                    <path d="M11 19.2067H25M25 19.2067L18 12.2065M25 19.2067L18 26.2065" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                                <rect x="0.5" y="1.31641" width="35" height="35" rx="17.5" stroke="#FAFAFA" />
                                                <defs>
                                                    <clipPath id="clip0_24_273">
                                                        <rect y="0.816406" width="36" height="36" rx="18" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>




                                        </span>
                                        <h3 className="fj-h3">Next <br /> Project</h3>
                                    </Link>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default PrevoiusProjects;