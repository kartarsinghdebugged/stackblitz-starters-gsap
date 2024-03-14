import React from "react";
import Link from "next/link";
const Services = () => {

    return (
        <>
            <div className="service-shape fj-relative">
                <div className='card-arrow'>
                    <Link href='/services/design-experience'   className="fj-anchor-circle fj-anchor-circle">
                        <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="white" strokeWidth="1.5" />
                                <path d="M14.6436 21.4419L21.2433 14.8422M21.2433 14.8422L14.6436 14.8421M21.2433 14.8422L21.2432 21.4418" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </Link>
                </div>

                <div className='service-card card-1'>
                    <div className="text-container">
                        <Link href='/services/design-experience'  >
                            <h4 className='fj-h4 fj-dark'>Design &amp;  <br className="" />  Experience </h4>
                            <p className='fj-text-r fj-dark description'>
                                An all-inclusive journey designed to deliver immersive and seamless experiences.
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link href='/services/design-experience'  >
                            <video
                                width="263"
                                height="100%"
                                className="video card1-video"
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
                        </Link>
                    </div>



                </div>
            </div>
            <div className="service-shape fj-relative">
                <div className='card-arrow'>
                    <Link href='/services/concept-prototyping'   className="fj-anchor-circle fj-anchor-circle">
                        <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="white" strokeWidth="1.5" />
                                <path d="M14.6436 21.4419L21.2433 14.8422M21.2433 14.8422L14.6436 14.8421M21.2433 14.8422L21.2432 21.4418" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </Link>
                </div>
                <div className='service-card card-2'>
                    <div className="text-container">
                        <Link href='/services/concept-prototyping'  >
                            <h4 className='fj-h4 fj-dark'>Proof of concept &amp;  <br /> Prototyping </h4>
                            <p className='fj-text-r fj-dark description'>
                                Turning big ideas into tangible digital products with rapid ideation and structured creativity.
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link href='/services/concept-prototyping'  >
                            <video
                                width="234"
                                height="100%"
                                className="video card2-video"
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
                        </Link>
                    </div>

                </div>
            </div>
            <div className="service-shape fj-relative">
                <div className='card-arrow'>
                    <Link href='/services/growth-innovation'   className="fj-anchor-circle fj-anchor-circle">
                        <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="white" strokeWidth="1.5" />
                                <path d="M14.6436 21.4419L21.2433 14.8422M21.2433 14.8422L14.6436 14.8421M21.2433 14.8422L21.2432 21.4418" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </Link>
                </div>
                <div className='service-card card-3'>
                    <div className="text-container">
                        <Link href='/services/growth-innovation'  >
                            <h4 className='fj-h4 fj-dark'>Growth &amp;  <br />Innovation</h4>
                            <p className='fj-text-r fj-dark description'>
                                From ideation to execution and beyond, we design a wide range of digital products and immersive experiences.
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link href='/services/growth-innovation'  >
                            <video
                                width="263"
                                height="100%"
                                className="video card3-video"
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
                        </Link>
                    </div>

                </div>
            </div>
            <div className="service-shape fj-relative">
                <div className='card-arrow'>
                    <Link href='/services/training-teams'   className="fj-anchor-circle fj-anchor-circle">
                        <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="white" strokeWidth="1.5" />
                                <path d="M14.6436 21.4419L21.2433 14.8422M21.2433 14.8422L14.6436 14.8421M21.2433 14.8422L21.2432 21.4418" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </Link>
                </div>
                <div className='service-card card-4'>
                    <div className="text-container">
                        <Link href='/services/training-teams'  >
                            <h4 className='fj-h4 fj-dark'>Training &amp; <br />Teams</h4>
                            <p className='fj-text-r fj-dark description'>
                                Helping transition from outsourced to in-house in a seamless, cost-effective manner.
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link href='/services/training-teams'  >
                            <video
                                width="263"
                                height="100%"
                                className="video card4-video"
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
                        </Link>
                    </div>

                </div>
            </div>
            <div className="service-shape fj-relative">
                <div className='card-arrow'>
                    <Link href='/services/workshops'   className="fj-anchor-circle fj-anchor-circle">
                        <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="white" strokeWidth="1.5" />
                                <path d="M14.6436 21.4419L21.2433 14.8422M21.2433 14.8422L14.6436 14.8421M21.2433 14.8422L21.2432 21.4418" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </Link>
                </div>
                <div className='service-card card-5'>
                    <div className="text-container">
                        <Link href='/services/workshops'  >
                            <h4 className='fj-h4 fj-dark'>Workshops</h4>
                            <p className='fj-text-r fj-dark description'>
                                Focused design thinking and ideation workshops to tackle design, UI and product challenges, while unlocking organisational potential.
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link href='/services/workshops'  >
                            <video
                                width="263"
                                height="100%"
                                className="video card5-video"
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
                        </Link>

                    </div>

                </div>
            </div>

        </>
    );
};

export default Services;